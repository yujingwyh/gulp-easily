var path = require('path');
var connect = require('gulp-connect');

module.exports = function (gulp, config) {
  connect.server({
    port: config.port,
    root: path.resolve(config.output),
    livereload: true,
    fallback: path.resolve(config.output, 'index.html')
  });
};

