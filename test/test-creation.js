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
			'package.json',
			'README.md',
			'test-app.sublime-project',
			'.editorconfig',
			'.gitattributes',
			'.gitignore',
			'.jshintrc',
			'Gruntfile.js',

			'test/index.html',
			'test/index.js'
		];

		helpers.mockPrompt(this.app, {
			'appName': 'test-app',
			'appDesc': 'A cool test app.',
			'appHasGit': true,
			'appRepo': 'https://github.com/emartinez-usgs/generator-hazdev-weblib.git'
		});
		this.app.options['skip-install'] = true;
		this.app.run({}, function () {
			helpers.assertFiles(expected);
			done();
		});
	});
});
