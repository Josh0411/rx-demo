const path = require('path');
const ROOT_PATH = path.join(__dirname); // 项目根目录
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')


module.exports = {
    entry: {
        linfeng: './src/js/linfeng.js',
        asyncjs: './src/js/async.js',
        a: './src/js/a.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(ROOT_PATH, 'linfeng_build')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: ["babel-loader"],
            query: {
                presets: ["es2015"]
            }
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', "css-loader!postcss-loader!sass-loader")
        }]

    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    postcss: [autoprefixer()],
    plugins: [
        new CleanPlugin(path.resolve(ROOT_PATH, 'linfeng_build'), {
            root: ROOT_PATH,
            verbose: true
        }),
        new webpack.optimize.CommonsChunkPlugin({name: "commons", filename: "commons.js",chunks: ['asyncjs', 'a']}),
        new ExtractTextPlugin('[name]-[contenthash]-min.css', { allChunks: true, disable: false }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'linfeng.html',
            template: 'src/linfeng.html',
            chunks: ['linfeng', 'asyncjs']
        }),
        new HtmlWebpackPlugin({
            filename: 'a.html',
            template: 'src/a.html',
            chunks: ['a']
        })

    ],
    debug: true,
    displayErrorDetails: true,
    outputPathinfo: true,
    devtool: "cheap-module-eval-source-map"
};
