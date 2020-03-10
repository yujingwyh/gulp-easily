const gulp = require('gulp');
const regularHandleee = require('gulp-regular-version');
const regularHandle = require('../../gulp-regular-version/index');

const config = require('./config');
const revGlob = [
  config.rootOutput + '**/*.html'
];

module.exports = function rev() {
  return gulp.src(revGlob)
    .pipe(regularHandle())
    .pipe(gulp.dest(config.rootOutput));
};
