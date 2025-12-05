class Order {
  constructor({ id, userId, items = [], status = 'pending' }) {
    this.id = id;
    this.userId = userId;
    this.items = items; // [{ productId, quantity }]
    this.status = status;
    this.createdAt = new Date();
  }

  totalAmount() {
    return this.items.reduce((sum, it) => sum + (it.price || 0) * (it.quantity || 0), 0);
  }

  addItem(item) {
    this.items.push(item);
  }

  toJSON() {
    return { id: this.id, userId: this.userId, items: this.items, status: this.status, createdAt: this.createdAt };
  }
}

module.exports = Order;
