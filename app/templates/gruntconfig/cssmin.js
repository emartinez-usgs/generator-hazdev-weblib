'use strict';

var config = require('./config');

var cssmin = {
  dist: {
    src: config.build + '/' + config.src + '/' + config.appName + '.css',
    dest: config.dist + '/' + config.appName + '.css'
  }
};

module.exports = cssmin;
