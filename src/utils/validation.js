function validateEmail(email) {
  return typeof email === 'string' && /\S+@\S+\.\S+/.test(email);
}

function validateProductPayload(payload) {
  if (!payload) return false;
  return typeof payload.name === 'string' && typeof payload.price === 'number';
}

module.exports = { validateEmail, validateProductPayload };
