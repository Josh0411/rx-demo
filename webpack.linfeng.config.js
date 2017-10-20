const path = require('path');
const ROOT_PATH = path.join(__dirname); // 项目根目录
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const production = process.env.NODE_ENV == 'production';
const HtmlCriticalPlugin = require("html-critical-webpack-plugin");

console.log('production', production);

module.exports = {
    entry: {
        linfeng: './src/js/linfeng.js',
        josh: './src/js/josh.js',
        person: './src/js/person.js'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '../js/chunkfile.[hash].js',
        path: path.resolve(ROOT_PATH, 'linfeng_build/js'),
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
            loader: ExtractTextPlugin.extract('style-loader', "css-loader!postcss-loader")
        }, {
            test: /\.(jpg|png|jpg|gif)$/,
            loader: "url?limit=10000&name=[name].[ext]"
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


        new webpack.BannerPlugin('版权所有，翻版必究'),

        new ExtractTextPlugin('[name].css', { allChunks: true, disable: false }),
        new webpack.optimize.CommonsChunkPlugin({ name: "commons", filename: "commons.[hash:8].js", chunks: ['linfeng', 'josh'] }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new HtmlWebpackPlugin({
            filename: __dirname + '/linfeng_build/html/linfeng.html',
            template: 'src/linfeng.html',
            chunks: ['linfeng', 'person','commons'],
            hash: true
        }),
        new HtmlWebpackPlugin({
            filename:   __dirname + '/linfeng_build/html/josh.html',
            template: 'src/josh.html',
            chunks: ['josh', 'person'],
            hash: true
        }),


        /*new HtmlCriticalPlugin({
            base: path.join(path.resolve(__dirname), 'linfeng_build/'),
            src: 'linfeng.html',
            dest: 'linfeng.html',
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            penthouse: {
                blockJSRequests: false,
            }
        })*/
    ],
    debug: true,
    displayErrorDetails: true,
    outputPathinfo: true,
    devtool: "cheap-module-eval-source-map"
};
