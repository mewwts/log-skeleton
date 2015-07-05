# bunyan-shadower

bunyan-shadower should perhaps be called log-shadower, as it is a simple
object with methods `.fatal`, `.error`, `.warn`, `.info`, `.debug` and `.trace`.

It's meant to be a drop in tool for you module when you want to outsource the responsibility of creating a logger, but don't want to have a bunch of `if (log) {}` lying around.

## Usage

```Javascript
var shadower = require('bunyan-shadower');

module.exports = function (options) {
  var log = shadower((options) ? options.log : undefined);
  ...
  log.info('Doesn't matter if options.log is undefined');
};
```

## License

MIT
