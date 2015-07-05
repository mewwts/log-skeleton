var shadower = require('../lib/bunyan-shadower');
var assert = require('assert');
var should = require('should');

var obj = {
  info: function () {return 1;}
}
var log = shadower(obj);
describe('bunyan-shadower', function () {
  describe('working on a mock object', function () {
    it('should return 1 when called on obj', function () {
      var val = log.info('help');
      assert.equal(val, 1);
    });
  });
  describe('working on a undefined property', function () {
    it('should not throw when called', function () {
      var mock = shadower(undefined);
      (function () {mock.info('help')}).should.not.throw();
    });
  });
});
