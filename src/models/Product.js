class Product {
  constructor({ id, name, price }) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  isAvailable() {
    return this.price > 0;
  }

  toJSON() {
    return { id: this.id, name: this.name, price: this.price };
  }
}

module.exports = Product;
