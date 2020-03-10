const gulp = require('gulp');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const babel = require("gulp-babel");

const config = require('./config');
const lib = require('./lib');
const scriptGlob = [config.rootInput + '**/*.js'];

module.exports = {
  'build': buildScript,
  'watch': watchScript
};

function buildScript() {
  const stream = lib.buildBefore(scriptGlob);

  return stream
    .pipe(babel())
    .pipe(gulpIf(config.compress, uglify()))
    .pipe(gulp.dest(config.rootOutput));
}

function watchScript() {
  const watcher = gulp.watch(scriptGlob, buildScript);

  return lib.watchAfter(watcher);
}
