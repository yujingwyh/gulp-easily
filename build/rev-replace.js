var fs = require('fs');
var crypto = require('crypto');

var path = require('path');
var Buffer = require('buffer').Buffer;
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var map = require('event-stream').map;

var FILE_DECL = /\@\{rev\-([^\s>"'\?]+?)\}/gi;

var revPlugin = function revPlugin(sourcePath, realityPath) {
  var md5FileList = {};

  return map(function (file, cb) {

    var contents;

    if (!file) {
      throw new PluginError('rev-append', 'Missing file option for gulp-rev-append.');
    }

    if (!file.contents) {
      throw new PluginError('rev-append', 'Missing file.contents required for modifying files using gulp-rev-append.');
    }

    contents = file.contents.toString();
    contents = contents.replace(FILE_DECL, function (word) {

      var key = word.substring(word.indexOf('-') + 1, word.lastIndexOf('}'));
      try {
        if (!md5FileList[key]) {
          var data = fs.readFileSync(sourcePath + key);
          var hash = crypto.createHash('md5');
          hash.update(data.toString(), 'utf8');

          md5FileList[key] = hash.digest('hex');
        }

        word = realityPath + key + '?rev=' + md5FileList[key];
      }
      catch (e) {
        // fail silently.
        console.log('不能解决版本控制-' + key);
      }
      return word;
    });

    file.contents = new Buffer(contents);
    cb(null, file);
  });

};

module.exports = revPlugin;
