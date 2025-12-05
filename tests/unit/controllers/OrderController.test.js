const request = require('supertest');
const app = require('../../../src/app');

describe('OrderController (unit)', () => {
  it('should create an order, add item and change status', async () => {
    // create user
    const u = await request(app).post('/api/users').send({ name: 'OCUser', email: `ocuser+${Date.now()}@ex.com`, password: 'pwd' });
    expect(u.statusCode).toBe(201);
    const userId = u.body.id;

    // create product
    const p = await request(app).post('/api/products').send({ name: 'OCProd', price: 3 });
    expect(p.statusCode).toBe(201);

    // create order
    const o = await request(app).post('/api/orders').send({ userId, items: [] });
    expect(o.statusCode).toBe(201);
    const orderId = o.body.id;

    // add item
    const add = await request(app).post(`/api/orders/${orderId}/items`).send({ productId: p.body.id, quantity: 2, price: p.body.price });
    expect(add.statusCode).toBe(200);
    expect(add.body.items.length).toBeGreaterThan(0);

    // update status
    const st = await request(app).put(`/api/orders/${orderId}/status`).send({ status: 'delivered' });
    expect(st.statusCode).toBe(200);
    expect(st.body.status).toBe('delivered');
  });
});
