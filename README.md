# gulp-easily
* 该项目仅仅是为了演示gulp的编译html,js,sass,image，主旨简单易懂的学习使用gulp。
* 涉及到文件include，replace，版本控制，es6编译等。

## 使用
* 默认是不压缩代码的
* 如果需要压缩修改build/config.js中isCompress=true或者编译时传参 例如:gulp build --compress
* 开发时会开启web服务，并且自带livereload（修改源代码后帮你自动刷新浏览器）
* 生产环境可将nginx等配置到dist目录即可

``` bash
$ npm install #插入依赖
$ npm run dev #编译并监视文件改动，同时开启web服务
$ npm run build #编译文件
```

## 版本控制
* 没有找到一个好的版本控制插件，所以写了一个很简单的，有好的请留言。
* 该版本替换会吧生成的文件去计算md5值，可以让include的内容也会计算

## License
[MIT](http://opensource.org/licenses/MIT)
