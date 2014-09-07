'use strict';

var PluginError = require('gulp-util').PluginError;
var jestCli = require('jest-cli');

function jest (opts) {
  if (!(this instanceof jest))
    return new jest(opts);

  return through.obj(function (f, e, cb) {
    try {
      jest.runCLI({
        config: opts
      }, opts.rootDir, cb);
    } catch (err) {
      this.emit('error', new PluginError('jest', err));
      cb();
    }
  });
}

module.exports = jest;
