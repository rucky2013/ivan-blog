var webpack = require('webpack');
var path = require('path');

var srcPath = path.resolve(__dirname, 'src/main/js');
var buildPath = path.resolve(__dirname, 'build/js');

var babelSettings = {
  presets: [
    'es2015',
    'stage-1',
    'react'
  ]
};

var config = {
  context: srcPath,

  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-bootstrap',
      'react-router',
    ],
    app: [
      './app.js'
    ]
  },

  output: {
    // 输出路径
    path: buildPath,
    // require模块时的输入路径
    publicPath: '/assets/javascripts/',
    filename: '[name].entry.js',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    root: [srcPath],
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel?' + JSON.stringify(babelSettings)],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
     "process.env" : {
        NODE_ENV: JSON .stringify( "production" )
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity // 防止其他代码打到这个块中
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      minChunks: 3
    }),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
    
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = config;