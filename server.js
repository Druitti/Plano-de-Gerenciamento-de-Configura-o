const app = require('./src/app');
const config = require('./src/config/config');

const port = config.port || process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
