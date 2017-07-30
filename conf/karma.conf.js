const conf = require('./conf');
const webpackConfig = require('../webpack.config');

module.exports = function (config) {
  const configuration = {
    basePath: '../',
    singleRun: true,
    autoWatch: false,
    browsers: [
      'PhantomJS'
    ],
    frameworks: [
      'mocha',
      'chai'
    ],
    files: [
      conf.path.src('index.spec.js')
    ],
    preprocessors: {
      [conf.path.src('index.spec.js')]: [
        'webpack'
      ]
    },
    reporters: ['progress'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
      stats: {
        chunks: false,
      },
    }
  };

  config.set(configuration);
};
