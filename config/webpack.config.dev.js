const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../src/www.ts'),
  target: "node", // node js environment
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'dev.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint-loader',
        options: {
            failOnHint: true,
            configuration: require('../tslint.json')
          }
        },
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
  ]
};