'use strict';

/**
 *  General Configuration Settings
 */

const path = require('path');

// default port for development server
exports.servePort = 8080;

// library name
exports.libraryName = 'library';

// list of paths in project
exports.paths = {
  src: 'src',
  tests: 'tests',
  library: 'src/library',
  libraryDist: 'library',
  dist: 'dist',
  tmp: '.tmp',
  conf: 'conf'
};

// get absolute path
exports.absolutePath = (target) => path.resolve(target);

// create functions for each path to retrieve files in that path
exports.path = {};
for (const pathName of Object.keys(exports.paths)) {
  exports.path[pathName] = function pathJoin() {
    const pathValue = exports.paths[pathName];
    const funcArgs = Array.prototype.slice.call(arguments);
    const joinArgs = [pathValue].concat(funcArgs);
    return path.join.apply(this, joinArgs);
  };
}
