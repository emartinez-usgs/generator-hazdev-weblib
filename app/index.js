'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var _ = require('underscore.string');


var HazdevWebappGenerator = module.exports = function HazdevWebappGenerator (
		args, options/*, config*/) {
	yeoman.generators.Base.apply(this, arguments);

	this.on('end', function () {
		this.installDependencies({ skipInstall: options['skip-install'] });
	});

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname,
			'../package.json')));
};

util.inherits(HazdevWebappGenerator, yeoman.generators.Base);

HazdevWebappGenerator.prototype.askFor = function askFor () {
	var cb = this.async();

	// have Yeoman greet the user.
	console.log(this.yeoman);


	var prompts = [
		{
			name: 'appName',
			message: 'What is the name of this web application?',
			default: require('path').basename((require('process').cwd()))
		},
		{
			name: 'appDesc',
			message: 'Briefly describe this web application.',
			default: 'An awesome web app.'
		},
		{
			type: 'confirm',
			name: 'appHasGit',
			message: 'Will this application be in Git?',
			default: true
		}
	];

	this.prompt(prompts, function (props) {
		this.appName = props.appName;
		this.appDesc = props.appDesc;
		this.appHasGit = props.appHasGit;

		cb();
	}.bind(this));
};

/**
 * More prompts based on first round of prompts.
 */
HazdevWebappGenerator.prototype.askForMore = function askForMore () {
	var prompts = [];

	// Only prompt for GitHub URL if user said this was on GitHub
	if (this.appHasGit) {
		prompts.push({
			name: 'appRepo',
			message: 'Application Git repository URL?',
			default: 'https://github.com/usgs/' + _.slugify(this.appName) + '.git'
		});
	} else {
		this.appRepoInfo = '';
	}

	if (prompts.length > 0) {
		var cb = this.async();
		this.prompt(prompts, function (props) {

			var appRepo = {
				type: 'git',
				url: '' + props.appRepo
			};
			this.appRepoInfo = "\n\t\"repository\": " +
					JSON.stringify(appRepo) + ',';

			cb();
		}.bind(this));
	}
};

HazdevWebappGenerator.prototype.directories = function directories () {
	this.mkdir('src');

	this.mkdir('test');
	this.mkdir('test/spec');
};

HazdevWebappGenerator.prototype.templatefiles = function templatefiles () {

	// Templates for project setup
	this.template('_package.json', 'package.json');
	this.template('_README.md', 'README.md');
	this.template('_projectfile.sublime-project', 
			_.slugify(this.appName) + '.sublime-project');

};

HazdevWebappGenerator.prototype.staticfiles = function staticfiles () {

	// Files for project setup
	this.copy('editorconfig', '.editorconfig');
	this.copy('gitattributes', '.gitattributes');
	this.copy('gitignore', '.gitignore');
	this.copy('jshintrc', '.jshintrc');
	this.copy('travis.yml', '.travis.yml');
	this.copy('Gruntfile.js', 'Gruntfile.js');
	this.copy('LICENSE.md', 'LICENSE.md');

	// Files for testing
	this.copy('test/index.html', 'test/index.html');
	this.copy('test/index.js', 'test/index.js');
};
