const webpack = require('webpack');
// webpack configuration object
const webpackConfig = require('./webpack.config.js');
// webpack development server
const WebpackDevServer = require('webpack-dev-server');

// load project's configurations
const conf = require('./conf/conf');

// Set the event based on the npm script that is running (start, build, test, etc.)
const npmEvent = process.env.npm_lifecycle_event;

// decide which method to run based on the event
switch (npmEvent) {
  case 'serve':
    startDevelopmentServer();
    break;
  case 'build':
    buildDistFolder();
    break;
  case 'library':
    buildLibrary();
    break;
  default:
    console.info('tasks.js must run via "npm run ...". you tired running it directly, or ');
    break;
}

// method to create and run development server
function startDevelopmentServer() {
  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, {
    hot: true,
    stats: 'minimal'
  });

  server.listen('8080', 'localhost', () => console.log(`WebpackDevServer running on port 8080`));
}

// method to build static webapp
function buildDistFolder() {
  const compiler = webpack(webpackConfig);

  compiler.run((err, stats) => {
    if (err || stats.hasErrors()) {
      console.info(err);
    }
    console.info('dist build finished');
  });
}

// method to build stand-alone library
function buildLibrary() {
  const compiler = webpack(webpackConfig);

  compiler.run((err, stats) => {
    if (err || stats.hasErrors()) {
      console.info('oops, library build failed!');
    }
    console.info('library build finished');
  });
}


