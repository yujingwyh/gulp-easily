# gulp-easily
* 该项目仅仅是为了演示gulp的编译html,js,sass,image，主旨简单易懂的学习使用gulp。
* 涉及到文件include，replace，版本控制，es6编译等。

## 如何使用
* 默认是不压缩代码的
* 如果需要压缩修改build/config.js中isCompress=true或者编译时传参 例如:gulp build --compress
* 开发时会开启web服务，并且自带livereload（修改源代码后帮你自动刷新浏览器）
* 生产环境可将nginx等配置到dist目录即可

``` bash
$ npm install #插入依赖
$ npm run dev #编译并监视文件改动，同时开启web服务
$ npm run build #编译文件
```

## 一些推荐

## 一点想法
gulp给我的感觉就是简单粗暴，编译也符合正常逻辑，从一个目录经过处理到另一个目录，
他的插件环境也是很庞大，所以编译起来得心应手，很灵活，这些使得能一直伫立在那儿，也让他只能这样，就是一个编译工具。

## License
[MIT](http://opensource.org/licenses/MIT)
