'use strict';

var config = require('./config');

var copy = {
  src: {
    expand: true,
    cwd: config.src + '/' + config.appShortName,
    src: ['images/*'],
    dest: config.build + '/' + config.src
  },
  test: {
    expand: true,
    cwd: config.test,
    src: ['**/*.html'],
    dest: config.build + '/' + config.test
  }
};

module.exports = copy;
