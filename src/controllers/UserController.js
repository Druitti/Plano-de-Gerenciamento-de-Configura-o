const UserService = require('../services/UserService');

function create(req, res) {
  const { name, email } = req.body;
  const user = UserService.createUser({ name, email });
  res.status(201).json(user);
}

function list(req, res) {
  res.json(UserService.listUsers());
}

function get(req, res) {
  const user = UserService.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
}

function update(req, res) {
  const user = UserService.updateUser(req.params.id, req.body);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
}

function remove(req, res) {
  const ok = UserService.deleteUser(req.params.id);
  if (!ok) return res.status(404).json({ message: 'User not found' });
  res.status(204).send();
}

module.exports = { create, list, get, update, remove };
