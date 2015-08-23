'use strict'

module.exports = function (log) {
  function ifLogThenLog (method, args) {
    if (log) {
      return log[method].apply(log, args);
    }
  }
  return {
    fatal: function () {return ifLogThenLog('fatal', arguments);},
    error: function () {return ifLogThenLog('error', arguments);},
    warn: function () {return ifLogThenLog('warn', arguments);},
    info: function () {return ifLogThenLog('info', arguments);},
    debug: function () {return ifLogThenLog('debug', arguments);},
    trace: function () {return ifLogThenLog('trace', arguments);},
    log: log
  }
}
