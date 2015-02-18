'use strict';

var gruntfile = function (grunt) {
	var gruntConfig = require('./gruntconfig');

	gruntConfig.tasks.forEach(grunt.loadNpmTasks);
	grunt.initConfig(gruntConfig);

	grunt.registerTask('build', [
		'dev',
		'concurrent:build'
	]);

	grunt.registerTask('default', [
		'clean',

		'dev',
		'connect:dev',

		'concurrent:test',
		'connect:test',
		'mocha_phantomjs',

		'watch'
	]);

	grunt.registerTask('dev', [
		'concurrent:dev'
	]);

	grunt.registerTask('dist', [
		'build',
		'connect:dist'
	]);

	grunt.registerTask('test', [
		'dev',

		'concurrent:test',
		'connect:test',
		'mocha_phantomjs'
	]);
};

module.exports = gruntfile;
