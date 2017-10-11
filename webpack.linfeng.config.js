const path = require('path');
const ROOT_PATH = path.join(__dirname); // 项目根目录
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    linfeng: './src/js/linfeng.js',
    linfeng2: './src/js/async.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(ROOT_PATH, 'linfeng_build')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ["babel-loader"],
        query: {
          presets: ["es2015"]
        }
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new CleanPlugin(path.resolve(ROOT_PATH, 'linfeng_build'), {
      root: ROOT_PATH,
      verbose: true
    }),
    new HtmlWebpackPlugin({
      filename: 'linfeng.html',
      template: 'src/linfeng.html',
      chunks: ['linfeng','linfeng2']
    })
  ],
  debug: true,
  displayErrorDetails: true,
  outputPathinfo: true,
  devtool: "cheap-module-eval-source-map"
};
