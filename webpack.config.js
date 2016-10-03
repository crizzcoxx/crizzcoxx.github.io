const path = require('path')

module.exports = {
  context: __dirname,
  entry:
    './src/app.js',
    html: './index.html',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
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
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel-loader"],
        query:
          {
            presets:['es2015', 'react']
          }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      }
    ]
  }
}