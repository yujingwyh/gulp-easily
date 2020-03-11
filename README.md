# gulp项目模板

> 支持文件include、replace、es6编译、版本控制等<br/>
> 依赖nodejs >= 10，另外请使用npm而不是cnpm

## 如何使用

### 本地开发

>会自动开启一个web服务，支持livereload

1. 安装依赖

`npm install`

2. 启动项目

`npm start`

3. 预览项目

打开浏览器输入`localhost:8000`


### 生产打包

1. 安装依赖

`npm install`

2. 编译代码

`npm run build`

3. nginx配置
* 指定网站路径到该项目`dist`目录
* 配置路由重写，如果没有找到`文件或者文件`,重写路由到`index.html`

示例：
```
location / {
    root /var/www/dist/;
    index index.html index.htm;
    try_files $uri $uri/ /index.html;
}
```

## 一些推荐

* gulp-rename

可以实现修改文件名和输出目录

```javascript
//修改输出目录
gulp.src("./src/**/hello.js")
    .pipe(rename(function (path) {
        path.dirname = './script/';
    }))
    .pipe(gulp.dest("./dist"));
```

* gulp-rollup

JavaScript模块打包工具

* blueimp-tmpl

JavaScript模板引擎

## 一点想法
第一个版本应该是在三年前搞的，当时gulp还是很流行。<br/>
最近时常浏览github，发现这个项目很长一段时间都没有更新了，于是抽了点时间去整理了下，并把一些包升级到最新版本。<br/>
不过看了下还是挺伤感的，曾经是一个很火热的东西，但我发现现在很多gulp的第三方插件都是更新于很久很久以前。<br/>
例如在调gulp-connect插件时发现有一点问题，但作者已经很少去维护了，所以不得不找了几个插件结合起来。<br/>
我已经很长的时间里都是写单页Web应用，都是在用webpack打包，主要是webpack这种模块打包很优秀。<br/>
主要是由于webpack全模块化，并且能处理模块依赖。<br/>
指不定那天会搞非单页应用，不过我还是不想去用gulp，我会尽可能的去用webpack实现。

## License
[MIT](http://opensource.org/licenses/MIT)
