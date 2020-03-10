const gulp = require('gulp');
const less = require('gulp-less');
const nano = require('gulp-cssnano');
const gulpIf = require('gulp-if');
const plumber = require('gulp-plumber');

const config = require('./config');
const lib = require('./lib');
const styleGlobal = [config.rootInput + '**/*.{less,css}'];

module.exports = {
  build: buildStyle,
  watch: watchStyle
};

function buildStyle() {
  const stream = lib.buildBefore(styleGlobal);

  return stream
    .pipe(plumber())
    .pipe(less({
      paths: [config.rootInput]
    }))
    .on('error', console.log)
    .pipe(gulpIf(config.compress, nano({zindex: false})))
    .pipe(gulp.dest(config.rootOutput));
}

function watchStyle() {
  const watcher = gulp.watch(styleGlobal, buildStyle);

  return lib.watchAfter(watcher);
}
