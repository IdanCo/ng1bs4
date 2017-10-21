const WebpackConfig = require('webpack-config').default;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = new WebpackConfig().extend('conf/webpack.base.config.js').merge({
  plugins: [
    new ExtractTextPlugin({ // No need for separate css files in tests
      disable: true
    })
  ],
});
