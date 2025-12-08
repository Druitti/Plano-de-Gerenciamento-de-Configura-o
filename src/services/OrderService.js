const orders = [];
let nextId = 1;

function createOrder({ userId, items = [] }) {
  const order = { id: nextId++, userId, items, status: 'pending', createdAt: new Date() };
  orders.push(order);
  return order;
}

function listOrders() {
  return orders;
}

function getOrderById(id) {
  return orders.find(o => o.id === Number(id)) || null;
}

function updateOrderStatus(id, status) {
  const order = getOrderById(id);
  if (!order) return null;
  order.status = status;
  return order;
}

function addItemToOrder(id, item) {
  const order = getOrderById(id);
  if (!order) return null;
  order.items.push(item);
  return order;
}

module.exports = {
  createOrder,
  listOrders,
  getOrderById,
  updateOrderStatus,
  addItemToOrder
};
