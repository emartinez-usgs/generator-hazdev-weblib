'use strict';

var config = require('./config');

// Modules defined by this package
var EXPORTS = [
  // Comma-separated list of each class to export/alias
];


var browserify = {
  options: {
    browserifyOptions: {
      debug: true,
      paths: [
        process.cwd() + '/' + config.src
      ]
    }
  },

  // source bundle
  source: {
    src: [],
    dest: config.build + '/' + config.src + '/' + config.appName + '.js',
    options: {
      alias: EXPORTS.map(function (path) {
        return './' + config.src + '/' + path + '.js:' + path;
      })
    }
  },

  // test bundle
  test: {
    src: config.test + '/test.js',
    dest: config.build + '/' + config.test + '/test.js',
    options: {
      external: EXPORTS
    }
  }
};

module.exports = browserify;
