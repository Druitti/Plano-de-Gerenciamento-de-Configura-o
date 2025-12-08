const request = require('supertest');
const app = require('../../src/app');

describe('E2E - Order flow', () => {
  it('should create products, create an order, add an item and update status', async () => {
    const unique = Date.now();

    // create user
    const userRes = await request(app)
      .post('/api/users')
      .send({ name: 'Orderer', email: `orderer+${unique}@example.com`, password: 'pwd' });
    expect(userRes.statusCode).toBe(201);
    const userId = userRes.body.id;

    // create two products
    const p1 = await request(app).post('/api/products').send({ name: `P1-${unique}`, price: 10 });
    const p2 = await request(app).post('/api/products').send({ name: `P2-${unique}`, price: 5 });
    expect(p1.statusCode).toBe(201);
    expect(p2.statusCode).toBe(201);

    // create empty order
    const orderCreate = await request(app).post('/api/orders').send({ userId, items: [] });
    expect(orderCreate.statusCode).toBe(201);
    const orderId = orderCreate.body.id;

    // add item to order
    const addRes = await request(app)
      .post(`/api/orders/${orderId}/items`)
      .send({ productId: p1.body.id, quantity: 3, price: p1.body.price });
    expect(addRes.statusCode).toBe(200);
    expect(addRes.body.items.some(it => it.productId === p1.body.id)).toBe(true);

    // update order status
    const statusRes = await request(app)
      .put(`/api/orders/${orderId}/status`)
      .send({ status: 'shipped' });
    expect(statusRes.statusCode).toBe(200);
    expect(statusRes.body.status).toBe('shipped');
  });
});
