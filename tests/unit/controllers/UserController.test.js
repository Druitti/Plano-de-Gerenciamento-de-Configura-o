const request = require('supertest');
const app = require('../../../src/app');

describe('UserController (unit/integration light)', () => {
  it('GET /api/users should return 200 and an array', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
