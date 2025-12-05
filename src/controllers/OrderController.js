const OrderService = require('../services/OrderService');

function create(req, res) {
  const { userId, items } = req.body;
  const order = OrderService.createOrder({ userId, items });
  res.status(201).json(order);
}

function list(req, res) {
  res.json(OrderService.listOrders());
}

function get(req, res) {
  const o = OrderService.getOrderById(req.params.id);
  if (!o) return res.status(404).json({ message: 'Order not found' });
  res.json(o);
}

function updateStatus(req, res) {
  const { status } = req.body;
  const o = OrderService.updateOrderStatus(req.params.id, status);
  if (!o) return res.status(404).json({ message: 'Order not found' });
  res.json(o);
}

function addItem(req, res) {
  const { productId, quantity, price } = req.body;
  const o = OrderService.addItemToOrder(req.params.id, { productId, quantity, price });
  if (!o) return res.status(404).json({ message: 'Order not found' });
  res.json(o);
}

module.exports = { create, list, get, updateStatus, addItem };
