var skeleton = require('../lib/log-skeleton');
var test = require('tape');

var obj = {
  info: function () {return 1;}
}

test('log-skeleton should call the underlying object', function (t) {
  var expected = obj.info();
  var log = skeleton(obj); 
  var actual = log.info();
  t.equal(actual, expected);
  t.end();
});

test('log-skeleton should not throw when called without underlying obj', function (t) {
  var log = skeleton();
  t.doesNotThrow(log.info);
  t.end()
});

test('log-skeleton should expose the underlying object', function (t) {
  var log = skeleton(obj);
  t.deepEqual(log.log, obj);
  t.end();
});
