'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../../package.json');
    this.name = this.appname.replace(/ /g, '-');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the beautiful ' + chalk.red('Forcedotcom') + ' generator!'
    ));

    var prompts = [{
      type: 'string',
      name: 'apiVersion',
      message: 'API Version',
      default: '34.0'
    }];

    this.prompt(prompts, function (props) {
      this.apiVersion = props.apiVersion;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('build.xml'),
        this.destinationPath('build.xml')
      );
      this.fs.copy(
        this.templatePath('env'),
        this.destinationPath('.env.example')
      );
      this.fs.copyTpl(
        this.templatePath('src/package.xml'),
        this.destinationPath('src/package.xml'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('README.md'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'),
        this
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('forceignore'),
        this.destinationPath('.forceignore')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copyTpl(
        this.templatePath('config/.settings'),
        this.destinationPath('config/.settings'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('config/.local_store'),
        this.destinationPath('config/.local_store'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('app.sublime-project'),
        this.destinationPath(this.name + '.sublime-project'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('app.sublime-settings'),
        this.destinationPath(this.name + '.sublime-settings'),
        this
      );
    }
  },

  install: function () {
    this.npmInstall();
  }
});
