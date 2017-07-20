const WebpackConfig = require('webpack-config').default;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      new HtmlWebpackPlugin({ // inject styles and js to index.html
        template: conf.path.src('index.html')
      }),
      new WebpackCleanupPlugin()
    ]
  });
