const request = require('supertest');
const app = require('../../src/app');

describe('E2E - User registration flow', () => {
  it('should register a user and return token', async () => {
    const createRes = await request(app).post('/api/users').send({ name: 'E2E', email: 'e2e@example.com' });
    expect(createRes.statusCode).toBe(201);
    const loginRes = await request(app).post('/api/auth/login').send({ email: 'e2e@example.com' });
    expect(loginRes.statusCode).toBe(200);
    expect(loginRes.body).toHaveProperty('token');
  });
});
