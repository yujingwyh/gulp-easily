const rootInput = './src/';
const rootOutput = './dist/';

const config = {
    rootInput,
    rootOutput,
    //排除编译的glob
    exclude: [
        '!' + rootInput + 'inside/**/*'
    ],
    //压缩代码
    'compress': false,
    //本地服务端口
    'port': 8000,
};

module.exports = config;
