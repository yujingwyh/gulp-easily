var htmlmin = require('gulp-htmlmin');
var gulpif = require('gulp-if');

module.exports = {
  build: buildHtml,
  watch: watchHtml
};
function buildHtml(gulp, config, fns) {
  return fns.prevBuild(gulp.src(config.html.input))
  /*设置html压缩，具体参数见gulp-htmlmin*/
    .pipe(gulpif(config.isCompress, htmlmin({
      removeComments: true,
      collapseWhitespace: false,
      minifyJS: true,
      minifyCSS: true
    })))
    .pipe(gulp.dest(config.output));
}
function watchHtml(gulp, config, fns) {
  fns.changeEvent(gulp.watch(config.html.watch, function () {
    buildHtml(gulp, config, fns)
      .on('end', function () {
        gulp.start('rev')
      });
  }));
}
