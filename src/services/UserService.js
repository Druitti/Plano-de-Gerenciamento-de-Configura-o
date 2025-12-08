const users = [];
let nextId = 1;

function createUser({ name, email }) {
  const user = { id: nextId++, name, email };
  users.push(user);
  return user;
}

function listUsers() {
  return users;
}

function getUserById(id) {
  return users.find(u => u.id === Number(id)) || null;
}

function updateUser(id, data) {
  const user = getUserById(id);
  if (!user) return null;
  user.name = data.name ?? user.name;
  user.email = data.email ?? user.email;
  return user;
}

function deleteUser(id) {
  const idx = users.findIndex(u => u.id === Number(id));
  if (idx === -1) return false;
  users.splice(idx, 1);
  return true;
}

module.exports = {
  createUser,
  listUsers,
  getUserById,
  updateUser,
  deleteUser
};
