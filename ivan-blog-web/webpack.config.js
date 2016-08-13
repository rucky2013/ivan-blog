
var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src/main/js');
var BUILD_PATH = path.resolve(ROOT_PATH, 'src/main/resources/static');

var babelSettings = {
    presets: [
        'es2015',
        'stage-1',
        'react'
    ]
};
module.exports = {
    context: APP_PATH,
    entry: {
        app:[
            'webpack-dev-server/client?http://localhost:8888',
            'webpack/hot/only-dev-server',
            "./app.js"
        ],
    },
    output: {
        path: BUILD_PATH,
        publicPath: 'http://localhost:8888/assets/',
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel?' + JSON.stringify(babelSettings)],
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },{
                test: /\.less$/,
                loader: 'style!css!less'
            },{
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: APP_PATH
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            }, {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    devServer: {
        hot: true,
        inline: true
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename:"common.js",
            minChunks: Infinity
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};