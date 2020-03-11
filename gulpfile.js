"use strict";
const gulp = require('gulp');

const clean = require('./build/clean');
const html = require('./build/html');
const script = require('./build/script');
const style = require('./build/style');
const image = require('./build/image');
const version = require('./build/version');

const service = require('./build/service');

exports.build = gulp.series(
 function advance(cb) {
    cb();
  },
  clean,
  gulp.parallel(
    html.build,
    script.build,
    style.build,
    image.build
  ),
  version
);
exports.start = gulp.series(
  exports.build,
  gulp.parallel(
    html.watch,
    script.watch,
    style.watch,
    image.watch,
    service
  )
);
//设置默认任务
exports.default = exports.start;
