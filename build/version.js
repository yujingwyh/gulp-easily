const gulp = require('gulp');
const regularVersion = require('gulp-regular-version');

const config = require('./config');

const revGlob = [
  config.rootOutput + '**/*.{html,js,css}'
];
module.exports = function version() {
  return gulp.src(revGlob)
    .pipe(regularVersion({
      addVersion(path, getFileHash) {
        return path + '?v=' + getFileHash('./dist')
      }
    }))
    .pipe(gulp.dest(config.rootOutput));
};
