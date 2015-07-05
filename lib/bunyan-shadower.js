module.exports = function (log) {
  function ifLog (method, args) {
    if (log) {
      log[method](args);
    }
  }
  return {
    fatal: function () {ifLog('fatal', arguments)},
    error: function () {ifLog('error', arguments)},
    warn: function () {ifLog('warn', arguments)},
    info: function () {ifLog('info', arguments)},
    debug: function () {ifLog('debug', arguments)},
    trace: function () {ifLog('trace', arguments)}
  }
}
