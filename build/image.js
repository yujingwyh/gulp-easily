var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

module.exports = {
  build: buildImage,
  watch: watchImage
};
function buildImage(gulp, config) {
  return gulp.src(config.image.input)
  /*设置图片压缩，具体参数见imagemin*/
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.output));
}
function watchImage(gulp, config, fns) {
  fns.changeEvent(gulp.watch(config.image.watch, function () {
    buildImage(gulp, config, fns);
  }));
}
