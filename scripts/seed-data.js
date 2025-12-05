// Script simples para popular dados de teste (placeholder)

const fs = require('fs');

const sampleData = {
  users: [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ],
  products: [
    { id: 1, name: 'Produto A', price: 10.0 },
    { id: 2, name: 'Produto B', price: 20.0 }
  ],
  orders: []
};

fs.writeFileSync('seed-data.json', JSON.stringify(sampleData, null, 2));
console.log('Arquivo seed-data.json criado com dados de exemplo.');
