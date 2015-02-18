'use strict';

var config = require('./config');

var uglify = {
  options: {
  },
  dist: {
    src: config.build + '/' + config.src + '/' + config.appName + '.js',
    dest: config.dist + '/' + config.appName + '.js'
  }
};

module.exports = uglify;
