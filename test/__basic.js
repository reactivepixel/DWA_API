const server = require('../server.js');
const calc = require('../calc.js');
const expect = require('chai').expect;

describe('Label: I am a test suite', () => {
  it('Did we run on the correct port.', () => {
    const targetPort = server.app.settings.port;
    const actualPort = server.instance.address().port;

    expect(targetPort).to.be.equal(9999);
  })
});
