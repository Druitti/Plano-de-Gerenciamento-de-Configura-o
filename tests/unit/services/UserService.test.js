const UserService = require('../../../src/services/UserService');

describe('UserService', () => {
  it('should create, get and delete a user', () => {
    const u = UserService.createUser({ name: 'Test', email: 't@example.com' });
    expect(u).toHaveProperty('id');
    const found = UserService.getUserById(u.id);
    expect(found.email).toBe('t@example.com');
    const deleted = UserService.deleteUser(u.id);
    expect(deleted).toBe(true);
  });
});
