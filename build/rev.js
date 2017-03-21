var revReplace = require('./rev-replace.js');

module.exports = function (gulp, config) {
    /*版本替换*/
    return gulp.src(config.rev.input)
        .pipe(revReplace(config.output, config.rev.realityPath))
        .pipe(gulp.dest(config.output));
};