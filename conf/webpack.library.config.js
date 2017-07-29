const WebpackConfig = require('webpack-config').default;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const conf = require('./conf');

module.exports = new WebpackConfig()
  .extend({
    'conf/webpack.base.config.js': config => {
      delete config.entry;

      return config;
    }
  })
  .merge({
    entry: {
      app: `./${conf.path.src('library/library.module')}`
    },
    output: {
      path: conf.absolutePath(conf.paths.library),
      filename: conf.libraryName + '.js',
      library: conf.libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    plugins: [
      new ExtractTextPlugin(conf.libraryName + '.css'),
      new WebpackCleanupPlugin()
      // new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
  });
