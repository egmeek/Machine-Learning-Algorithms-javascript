/* eslint-env node */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: false,
      template: './src/index.html',
    }),
    new CleanWebpackPlugin('./dist', {
      dry: false,
      root: __dirname,
      verbose: true,
    }),
  ],
};
