const products = [];
let nextId = 1;

function createProduct({ name, price }) {
  const product = { id: nextId++, name, price };
  products.push(product);
  return product;
}

function listProducts() {
  return products;
}

function getProductById(id) {
  return products.find(p => p.id === Number(id)) || null;
}

function updateProduct(id, data) {
  const prod = getProductById(id);
  if (!prod) return null;
  prod.name = data.name ?? prod.name;
  prod.price = data.price ?? prod.price;
  return prod;
}

function deleteProduct(id) {
  const idx = products.findIndex(p => p.id === Number(id));
  if (idx === -1) return false;
  products.splice(idx, 1);
  return true;
}

module.exports = {
  createProduct,
  listProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
