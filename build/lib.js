const gulp = require('gulp');
const include = require('gulp-include');
const replace = require('gulp-replace');
const liveReload = require('gulp-livereload');

const config = require('./config');

function buildBefore(glob, isAssets = false) {
  let stream = gulp.src([
    ...glob,
    ...config.exclude
  ]);

  if (!isAssets) {
    stream = stream.pipe(include({
      includePaths: [config.rootInput]
    }))
      .on('error', console.log)
      .pipe(replace(/\s+href\s*=\s*(['"]).+?\.less\1/ig, function (word) {
        return word.replace('.less', '.css')
      }))
  }

  return stream.pipe(liveReload());
}


function watchAfter(watcher) {
  return watcher.on('change', function (path) {
    console.log('build for ' + path + ' was change');
  })
}

module.exports = {
  buildBefore,
  watchAfter
};
