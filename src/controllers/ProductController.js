const ProductService = require('../services/ProductService');

function create(req, res) {
  const { name, price } = req.body;
  const product = ProductService.createProduct({ name, price });
  res.status(201).json(product);
}

function list(req, res) {
  res.json(ProductService.listProducts());
}

function get(req, res) {
  const p = ProductService.getProductById(req.params.id);
  if (!p) return res.status(404).json({ message: 'Product not found' });
  res.json(p);
}

function update(req, res) {
  const p = ProductService.updateProduct(req.params.id, req.body);
  if (!p) return res.status(404).json({ message: 'Product not found' });
  res.json(p);
}

function remove(req, res) {
  const ok = ProductService.deleteProduct(req.params.id);
  if (!ok) return res.status(404).json({ message: 'Product not found' });
  res.status(204).send();
}

module.exports = { create, list, get, update, remove };
