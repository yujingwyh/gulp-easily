var revHandle = require('gulp-rev-handle');

module.exports = function (gulp, config) {
  /*版本替换*/
  return gulp.src(config.rev.input)
    .pipe(revHandle({
      handlePath(path){
        return config.output + path;
      },
      handleRev(path, md5){
        return path.replace(config.output, './') + '?version=' + md5;
      }
    }))
    .pipe(gulp.dest(config.output));
};
