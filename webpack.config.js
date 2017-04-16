var path = require('path');
//新加的这个变量，webpack 自带了一个压缩插件 UglifyJsPlugin，只需要在配置文件中引入即可。加入了这个插件之后，编译的速度会明显变慢，所以一般只在生产环境启用。
//压缩之前是839k 压缩以后是159k
var webpack = require('webpack');
module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
//通过设置这个属性值引入 UglifyJsPlugin
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,  // remove all comments
      },
      compress: {
        warnings: false
      }
    })
  ]
};
