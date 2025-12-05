const config = require('../../../src/config/config');

describe('Database / config integration', () => {
  it('should expose config values for runtime', () => {
    expect(config).toHaveProperty('port');
    expect(config).toHaveProperty('jwtSecret');
  });
});
