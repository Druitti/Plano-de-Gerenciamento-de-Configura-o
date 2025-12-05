const request = require('supertest');
const app = require('../../src/app');

describe('E2E - Product purchase flow', () => {
  it('should create a product and place an order for it', async () => {
    const unique = Date.now();

    // create user
    const userRes = await request(app)
      .post('/api/users')
      .send({ name: 'Buyer', email: `buyer+${unique}@example.com`, password: 'pwd' });
    expect(userRes.statusCode).toBe(201);
    const userId = userRes.body.id;

    // create product
    const prodRes = await request(app)
      .post('/api/products')
      .send({ name: `Produto ${unique}`, price: 42.5 });
    expect(prodRes.statusCode).toBe(201);
    const product = prodRes.body;

    // create order with one item
    const orderRes = await request(app)
      .post('/api/orders')
      .send({ userId, items: [{ productId: product.id, quantity: 2, price: product.price }] });
    expect(orderRes.statusCode).toBe(201);
    const order = orderRes.body;

    expect(order).toHaveProperty('id');
    expect(Array.isArray(order.items)).toBe(true);
    expect(order.items.length).toBe(1);

    const total = order.items.reduce((s, it) => s + (it.price || 0) * (it.quantity || 0), 0);
    expect(total).toBeCloseTo(85.0);
  });
});
