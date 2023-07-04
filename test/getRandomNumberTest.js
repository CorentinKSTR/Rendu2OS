var assert = require('assert');
const getRandomNumber = require('../index')
describe('getRandomNumber', function() {
    it('should return a random number between 0 and 100', function() {
      const randomNumber = getRandomNumber();
      assert.strictEqual(typeof randomNumber, 'number');
      assert.ok(randomNumber >= 0 && randomNumber <= 100);
    });
  });