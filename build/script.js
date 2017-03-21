var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var babel = require("gulp-babel");
var rollup = require("gulp-rollup");

module.exports = {
    'build': buildScript,
    'watch': watchScript
};
function buildScript(gulp, config, fns) {
    /*输出到指定目录*/
    function outputScript(fs) {
        var directory = fs.base.replace(/\\/g, '/');
        var prevLast = directory.lastIndexOf('/', directory.length - 2);

        return config.output + directory.substring(prevLast + 1);
    }
    /*虽然目前的需求一条是可以满足，但此处是为了演示多个编译条件整一个任务*/
    return fns.deferTask(() => {
        //libScript
        return fns.prevBuild(gulp.src(config.script.libInput))
            .pipe(babel())
            .pipe(gulpif(config.isCompress, uglify()))
            .pipe(gulp.dest(outputScript));
    }, () => {
        //mainScript
        return fns.prevBuild(gulp.src(config.script.mainInput))
            .pipe(babel())
            .pipe(gulpif(config.isCompress, uglify()))
            .pipe(gulp.dest(outputScript));
    });
}
function watchScript(gulp, config, fns) {
    fns.changeEvent(gulp.watch(config.script.watch, function () {
        buildScript(gulp, config, fns)
            .on('end', function () {
                gulp.start('rev')
            });
    }));
}