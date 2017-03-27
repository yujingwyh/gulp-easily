"use strict";
var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

var config = require('./build/config');
var publicFns = require('./build/public-fns')(config);
var clean = require('./build/clean');
var service = require('./build/service');

var buildHtml = require('./build/html');
var buildStyle = require('./build/style');
var buildImage = require('./build/image');
var buildScript = require('./build/script');

var rev = require('./build/rev');
/**
 * 设置default任务，命令gulp会执行gulp default
 */
gulp.task("default", ['build']);
/**
 * 编译该项目
 */
gulp.task("build", gulpSequence('clean', ['_script', '_html', '_style','_image'], 'rev'));
gulp.task('dev',['watch'],function () {
  gulp.start('webserver');
});
/**
 * 监视有文件改动会自动编译对应的文件
 */
gulp.task('watch', function () {
    buildHtml.watch(gulp, config, publicFns);
    buildStyle.watch(gulp, config, publicFns);
    buildScript.watch(gulp, config, publicFns);
    buildImage.watch(gulp, config, publicFns);
});
gulp.task('webserver',function () {
  service(gulp, config, publicFns);
});
/**
 * 清除生产的目录
 */
gulp.task("clean", function () {
    return clean(gulp, config, publicFns);
});

gulp.task("_html", function () {
    return buildHtml.build(gulp, config, publicFns);
});
gulp.task("_style", function () {
    return buildStyle.build(gulp, config, publicFns);
});
gulp.task("_image", function () {
    return buildImage.build(gulp, config, publicFns);
});
gulp.task("_script", function () {
    return buildScript.build(gulp, config, publicFns);
});
/**
 * 替换 @{rev=文件路径} 为 config.rev.realityPath + 文件路径?rev=该文件md5
 */
gulp.task('rev', function () {
    return rev(gulp, config);
});
