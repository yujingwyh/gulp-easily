const gulp = require('gulp');
const clean = require('gulp-clean');

const config = require('./config');


module.exports = function clear() {
  return gulp.src(config.rootOutput, {read: false})
    .pipe(clean())
    .pipe(gulp.dest(config.rootOutput));
};
