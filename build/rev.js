const gulp = require('gulp');
const regularHandle = require('gulp-regular-version');

const config = require('./config');
//只对build有效
//替换 @{rev=文件路径} 为 config.rev.realityPath + 文件路径?rev=该文件md5
module.exports = function rev() {
  const revGlob = config.rootOutput + 'index.html';

  return gulp.src(revGlob)
    .pipe(regularHandle({
      handlePath(path) {
        return config.rootOutput + path;
      },
      handleRev(path, md5) {
        return path.replace(config.rootOutput, './') + '?version=' + md5;
      }
    }))
    .pipe(gulp.dest(config.rootOutput));
};
