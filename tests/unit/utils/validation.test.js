const { validateEmail, validateProductPayload } = require('../../../src/utils/validation');

describe('validation utils', () => {
  test('validateEmail returns true for valid email', () => {
    expect(validateEmail('a@b.com')).toBe(true);
    expect(validateEmail('not-an-email')).toBe(false);
  });

  test('validateProductPayload checks required fields', () => {
    expect(validateProductPayload({ name: 'P', price: 1.2 })).toBe(true);
    expect(validateProductPayload({ name: 'P' })).toBe(false);
    expect(validateProductPayload(null)).toBe(false);
  });
});
