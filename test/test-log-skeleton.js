var skeleton = require('../lib/log-skeleton');
var assert = require('assert');
var should = require('should');

var obj = {
  info: function () {return 1;}
}
var log = skeleton(obj);
describe('log-skeleton', function () {
  describe('working on a mock object', function () {
    it('should return 1 when called on obj', function () {
      var val = log.info('help');
      assert.equal(val, 1);
    });
  });
  describe('working on a undefined property', function () {
    it('should not throw when called', function () {
      var mock = skeleton(undefined);
      (function () {mock.info('help')}).should.not.throw();
    });
  });
  describe('should set the log property', function () {
    it('log property should be the same object', function () {
      var log = skeleton(obj);
      assert.equal(log.log, obj);
    });
  });
});
