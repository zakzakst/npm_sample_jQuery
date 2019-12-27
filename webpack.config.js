
const glob = require("glob");
const common = glob.sync("./src/common/*/js/*.js", {
  ignore: './src/common/*/js/_*.js'
});
const pageIndex = glob.sync("./src/pageIndex/js/*.js", {
  ignore: './src/pageIndex/js/_*.js'
});

module.exports = {
  mode: 'production', // 'production' か 'development' を指定
  entry: {
    common: common,
    index: pageIndex
  },
  output: {
    path: `${__dirname}/dist/js`,
    filename: '[name].bundle.js'
  }
}
