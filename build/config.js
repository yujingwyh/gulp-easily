var rootInput = './src/';
var rootOutput = './dist/';

module.exports = {
  /*编译到的路径*/
  'output': rootOutput,
  /*是否压缩*/
  'isCompress': false,
  'port': 8088,
  /*在public-fns中替换对应的字符*/
  'replace': {
    'output': rootOutput
  },
  'html': {
    'input': [rootInput + 'index.html'],
    'watch': [rootInput + '**/*.html']
  },
  'style': {
    'input': [rootInput + '**/main.scss'],
    'watch': [rootInput + '**/*+(scss|css)']
  },
  'script': {
    'repairPath': './script/',
    'libInput': [rootInput + 'script/lib.js'],
    'mainInput': [rootInput + 'script/main.js'],
    'watch': [rootInput + '**/*.js']
  },
  'image': {
    'input': [rootInput + '**/*.{png,jpg,gif,ico}'],
    'watch': [rootInput + '**/*.+(jpeg|jpg|png|ico)']
  },
  'rev': {
    'input': [rootOutput + 'index.html'],
    /*替换后的路径前缀*/
    'realityPath': './'
  }
};
