var clean = require('gulp-clean');

module.exports = function (gulp, config) {
  return gulp.src(config.output, {
    read: false
  }).pipe(clean());
};
