const request = require('supertest');
const app = require('../../../src/app');

describe('Users API (integration)', () => {
  it('POST /api/users -> create and GET /api/users/:id', async () => {
    const createRes = await request(app).post('/api/users').send({ name: 'Integration', email: 'int@example.com' });
    expect(createRes.statusCode).toBe(201);
    const id = createRes.body.id;
    const getRes = await request(app).get(`/api/users/${id}`);
    expect(getRes.statusCode).toBe(200);
    expect(getRes.body.email).toBe('int@example.com');
  });
});
