'use strict';

var config = require('./config');

var compass = {
  dev: {
    options: {
      cssDir: config.build + '/' + config.src,
      environment: 'development',
      sassDir: config.src,
      specify: [
        config.src + '/' + config.appName + '.scss'
      ],
      importPath: [
        // Additional paths to find @imported SCSS modules
      ]
    }
  }
};

module.exports = compass;
