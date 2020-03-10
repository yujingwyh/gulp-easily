const gulp = require('gulp');
const htmlMin = require('gulp-htmlmin');
const gulpIf = require('gulp-if');

const config = require('./config');
const lib = require('./lib');
const htmlGlob = [
  config.rootInput + '**/*.html',
];

module.exports = {
  build: buildHtml,
  watch: watchHtml
};

function buildHtml() {
  const stream = lib.buildBefore(htmlGlob);

  return stream
    .pipe(gulpIf(config.compress, htmlMin({
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true,
      minifyCSS: true
    })))
    .pipe(gulp.dest(config.rootOutput));
}

function watchHtml() {
  const watcher = gulp.watch(htmlGlob, buildHtml);

  return lib.watchAfter(watcher);
}
