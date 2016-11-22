var webpack = require('webpack')
var path = require('path')
var pkg = require('./package.json')
var env = require('yargs').argv.mode
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

let plugins = [], libName, outputFile
const {name} = pkg

if (env === 'build') {
  outputFile = 'index.js'
} else {
}

module.exports = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules)/
      },
      {
        test: /(\.jsx|.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins
}
