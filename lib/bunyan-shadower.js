module.exports = function (log) {
  function ifLog (method, args) {
    if (log) {
      return log[method](args);
    }
  }
  return {
    fatal: function () {return ifLog('fatal', arguments)},
    error: function () {return ifLog('error', arguments)},
    warn: function () {return ifLog('warn', arguments)},
    info: function () {return ifLog('info', arguments)},
    debug: function () {return ifLog('debug', arguments)},
    trace: function () {return ifLog('trace', arguments)}
  }
}
