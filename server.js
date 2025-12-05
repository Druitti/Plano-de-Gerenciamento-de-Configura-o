const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Projeto GC - API rodando');
});

// Rotas placeholder
app.use('/api/users', (req, res) => res.status(200).json({ message: 'Users route placeholder' }));
app.use('/api/products', (req, res) => res.status(200).json({ message: 'Products route placeholder' }));
app.use('/api/orders', (req, res) => res.status(200).json({ message: 'Orders route placeholder' }));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
