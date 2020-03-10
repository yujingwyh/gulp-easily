const path = require('path');
const serve = require('gulp-serve');
const liveReload = require('gulp-livereload');
const liveReloadMiddleware = require("connect-livereload");

const config = require('./config');

module.exports = function service() {
  liveReload.listen({
    quiet:true
  });
  serve({
    root: path.resolve(config.rootOutput),
    port: config.port,
    middleware: liveReloadMiddleware()
  })();
};

