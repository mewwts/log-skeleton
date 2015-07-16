# log-skeleton
[![build Status](https://travis-ci.org/mewwts/log-skeleton.svg?branch=master)](https://travis-ci.org/mewwts/log-skeleton)

log-skeleton is a simple object with methods `.fatal`, `.error`, `.warn`, `.info`, `.debug` and `.trace`. It is initalized with you favorite log instance, or nothing at all.

I.e. you can do either
```Javascript
var real_log = require('bunyan').createLogger({name: 'example'});
var log = require('log-skeleton')(real_log);
```
or 
```Javascript
var log = require('log-skeleton')();
```

In the first case any simple API call to `log` will be forwarded to `real_log`, while in the latter case, every simple log API call will be silently ignored. It's meant to be a drop in tool for you module when you want to outsource the responsibility of creating a logger, but don't want to have a bunch of `if (log) {}` lying around.

## Usage

```Javascript
var skeleton = require('log-skeleton');

module.exports = function (options) {
  var log = skeleton((options) ? options.log : undefined);
  ...
  log.info("Doesn't matter if options.log is undefined");
};
```

If `options.log` is undefined, the call to `log.info` does nothing. If it's a log object, the logger will log at the appropriate level.

The original log object is exposed at `log.log` in the above example, as to give you an access point to the real log object.

## License

MIT
