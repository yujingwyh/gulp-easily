var include = require('gulp-include');
var replace = require('gulp-replace');
var argv = require('minimist')(process.argv.slice(2));

var q = require('q');
var connect = require('gulp-connect');

module.exports = function (config) {
    /**
     * 编译之前处理函数（用于处理压缩,replace等）
     */
    function prevBuild(pipeArg) {
        config.isCompress = argv['compress'] === undefined ? !!argv['compress'] : config.isCompress;

        return pipeArg.pipe(include())
            .on('error', console.log)
            .pipe(replace(/@\{output\}/g, config.replace.output))
            .pipe(connect.reload());
    }

    /**
     * 多个延迟编译
     * @return {promise}
     */
    function deferTask() {
        var deferred = q.defer(),
            total = arguments.length,
            args = Array.prototype.slice.call(arguments);
        args.forEach(function (value) {
            value().on('end', finishFn);
        });
        function finishFn() {
            total -= 1;
            if (total < 1) {
                deferred.resolve();
            }
        }

        return deferred.promise;
    }

    function changeEvent(pipeArg) {
        pipeArg.on('change', function (event) {
            console.log('build for ' + event.path + ' was change');
        })
    }

    return {
        'prevBuild': prevBuild,
        'deferTask': deferTask,
        'changeEvent': changeEvent
    }
};
