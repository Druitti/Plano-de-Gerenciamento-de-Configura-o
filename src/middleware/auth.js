// Middleware simples de autenticação placeholder

function auth(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  // Placeholder: in real app, validar JWT
  if (token !== 'Bearer test-token') return res.status(403).json({ message: 'Invalid token' });
  next();
}

module.exports = auth;
