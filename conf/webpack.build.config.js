const webpack = require('webpack');
const WebpackConfig = require('webpack-config').default;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const conf = require('./conf');

module.exports = new WebpackConfig()
  .extend('conf/webpack.base.config.js')
  .merge({
    output: {
      path: conf.absolutePath(conf.paths.dist),
      filename: '[name]-[hash].js'
    },
    plugins: [
      new ExtractTextPlugin('app-[hash].css'),
      new WebpackCleanupPlugin(),
      new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
  });
