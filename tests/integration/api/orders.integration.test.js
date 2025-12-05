const request = require('supertest');
const app = require('../../../src/app');

describe('Orders API (integration)', () => {
  it('should create an order and retrieve it', async () => {
    const user = await request(app).post('/api/users').send({ name: 'IntOrderUser', email: `iou+${Date.now()}@ex.com`, password: 'pwd' });
    expect(user.statusCode).toBe(201);

    const product = await request(app).post('/api/products').send({ name: 'IntOrderProd', price: 2 });
    expect(product.statusCode).toBe(201);

    const order = await request(app).post('/api/orders').send({ userId: user.body.id, items: [{ productId: product.body.id, quantity: 1, price: product.body.price }] });
    expect(order.statusCode).toBe(201);
    const id = order.body.id;

    const get = await request(app).get(`/api/orders/${id}`);
    expect(get.statusCode).toBe(200);
    expect(get.body.id).toBe(id);
  });
});
