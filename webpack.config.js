const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const combineLoaders = require('webpack-combine-loaders');


module.exports = {
  context: __dirname,
  entry: [
      'webpack-dev-server/client?http://127.0.0.1:8080/',
      'webpack/hot/only-dev-server',
      './src/app.js'
    ],
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
            query: {
                presets:['es2015', 'react']
            }
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ])
      },
    ]
  },
  plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}