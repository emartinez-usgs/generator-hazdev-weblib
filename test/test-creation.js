/*global describe, beforeEach, it*/
'use strict';

var path = require('path'),
    helpers = require('yeoman-generator').test;


describe('hazdev-weblib generator', function () {
	beforeEach(function (done) {
		helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
			if (err) {
				return done(err);
			}

			this.app = helpers.createGenerator('hazdev-weblib:app', [
				'../../app'
			]);
			done();
		}.bind(this));
	});

	it('creates expected files', function (done) {
		var expected = [
			'example/example.html',
			'example/css/example.css',
			'example/js/example.js',

			'gruntconfig/browserify.js',
			'gruntconfig/clean.js',
			'gruntconfig/compass.js',
			'gruntconfig/concurrent.js',
			'gruntconfig/config.js',
			'gruntconfig/connect.js',
			'gruntconfig/copy.js',
			'gruntconfig/cssmin.js',
			'gruntconfig/imagemin.js',
			'gruntconfig/index.js',
			'gruntconfig/jshint.js',
			'gruntconfig/mocha_phantomjs.js',
			'gruntconfig/uglify.js',
			'gruntconfig/watch.js',

			'src/test-app.scss',

			'test/test.html',
			'test/test.js',

			'package.json',
			'README.md',
			'test-app.sublime-project',
			'.editorconfig',
			'.gitattributes',
			'.gitignore',
			'.jshintrc',
			'Gruntfile.js',

		];

		helpers.mockPrompt(this.app, {
			'appName': 'test-app',
			'appDesc': 'A cool test app.',
			'appHasGit': true,
			'appRepo': 'https://github.com/usgs/test-app.git'
		});
		this.app.options['skip-install'] = true;
		this.app.run({}, function () {
			helpers.assertFiles(expected);
			done();
		});
	});
});
