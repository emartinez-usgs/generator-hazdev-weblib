'use strict';


var concurrent = {
  dev: [
    'browserify:source',
    'compass',
    'copy:src'
  ],
  test: [
    'browserify:test',
    'copy:test'
  ],
  build: [
    'cssmin',
    'uglify',
    'imagemin'
  ]
};

module.exports = concurrent;
