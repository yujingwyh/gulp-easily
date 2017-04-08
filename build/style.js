var sass = require('gulp-sass');
var nano = require('gulp-cssnano');
var gulpif = require('gulp-if');

module.exports = {
  build: buildStyle,
  watch: watchStyle
};

function buildStyle(gulp, config, fns) {
  return fns.prevBuild(gulp.src(config.style.input))
  /*首先编译sass并监听错误*/
    .pipe(sass().on('error', sass.logError))
    /*压缩css*/
    .pipe(gulpif(config.isCompress, nano({zindex: false})))
    .pipe(gulp.dest(config.output));
}
function watchStyle(gulp, config, fns) {
  fns.changeEvent(gulp.watch(config.style.watch, function () {
    buildStyle(gulp, config, fns)
      .on('end', function () {
        gulp.start('rev')
      });
  }));
}
