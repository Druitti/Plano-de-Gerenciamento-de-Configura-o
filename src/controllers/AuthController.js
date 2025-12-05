const UserService = require('../services/UserService');

function login(req, res) {
  const { email } = req.body;
  // Placeholder: no password handling, apenas busca por email
  const user = UserService.listUsers().find(u => u.email === email);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  // Em app real, gerar JWT. Aqui retornamos token placeholder
  return res.json({ token: 'test-token', user });
}

module.exports = { login };
