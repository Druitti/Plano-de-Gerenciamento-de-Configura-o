function formatCurrency(v) {
  return `R$ ${Number(v).toFixed(2)}`;
}

function nowISO() {
  return new Date().toISOString();
}

module.exports = { formatCurrency, nowISO };
