const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const gulpIf = require('gulp-if');

const config = require('./config');
const lib = require('./lib');
const imageGlob = [
  config.rootInput + '**/*.{png,gif,jpg,jpeg}'
];

module.exports = {
  build: buildImage,
  watch: watchImage
};

function buildImage() {
  const stream = lib.buildBefore(imageGlob, true);

  return stream
    .pipe(gulpIf(config.compress, imageMin()))
    .pipe(gulp.dest(config.rootOutput));
}

function watchImage() {
  const watcher = gulp.watch(imageGlob, buildImage);

  return lib.watchAfter(watcher);
}
