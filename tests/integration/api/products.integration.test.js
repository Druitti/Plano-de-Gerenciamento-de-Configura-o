const request = require('supertest');
const app = require('../../../src/app');

describe('Products API (integration)', () => {
  it('should create, list and delete product', async () => {
    const res = await request(app).post('/api/products').send({ name: 'IntProd', price: 7 });
    expect(res.statusCode).toBe(201);
    const id = res.body.id;

    const list = await request(app).get('/api/products');
    expect(list.statusCode).toBe(200);
    expect(Array.isArray(list.body)).toBe(true);

    const del = await request(app).delete(`/api/products/${id}`);
    expect(del.statusCode).toBe(204);
  });
});
