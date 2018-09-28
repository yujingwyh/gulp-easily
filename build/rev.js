var regularHandle = require('gulp-regular-version');

module.exports = function (gulp, config) {
  /*版本替换*/
  return gulp.src(config.rev.input)
    .pipe(regularHandle({
      handlePath(path){
        return config.output + path;
      },
      handleRev(path, md5){
        return path.replace(config.output, './') + '?version=' + md5;
      }
    }))
    .pipe(gulp.dest(config.output));
};
