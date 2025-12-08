const request = require('supertest');
const app = require('../../../src/app');

describe('ProductController (unit)', () => {
  it('should create, get, update and delete a product', async () => {
    // create
    const resCreate = await request(app).post('/api/products').send({ name: 'UnitProd', price: 9.99 });
    expect(resCreate.statusCode).toBe(201);
    const id = resCreate.body.id;

    // get
    const resGet = await request(app).get(`/api/products/${id}`);
    expect(resGet.statusCode).toBe(200);
    expect(resGet.body.name).toBe('UnitProd');

    // update
    const resUpdate = await request(app).put(`/api/products/${id}`).send({ price: 12.5 });
    expect(resUpdate.statusCode).toBe(200);
    expect(resUpdate.body.price).toBe(12.5);

    // delete
    const resDelete = await request(app).delete(`/api/products/${id}`);
    expect(resDelete.statusCode).toBe(204);

    // get after delete should be 404
    const resGet2 = await request(app).get(`/api/products/${id}`);
    expect(resGet2.statusCode).toBe(404);
  });
});
