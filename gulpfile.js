"use strict";
const gulp = require('gulp');

const clean = require('./build/clean');
const html = require('./build/html');
const script = require('./build/script');
const style = require('./build/style');
const image = require('./build/image');
const rev = require('./build/rev');

const config = require('./build/config');
const service = require('./build/service');

exports.build = gulp.series(
  function advance(cb) {
    config.compress = true;
    cb();
  },
  clean,
  gulp.parallel(
    html.build,
    script.build,
    style.build,
    image.build
  ),
  rev
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
