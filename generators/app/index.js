'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  initializing: function () {
    this.appnameSlugified = this.appname.replace(/ /g, '-');
  },

  prompting: function () {
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

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
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
        {
          props: this.props,
          appnameSlugified: this.appnameSlugified
        }
      );
      this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('README.md'),
        {
          props: this.props,
          appnameSlugified: this.appnameSlugified
        }
      );
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'),
        {
          props: this.props,
          appnameSlugified: this.appnameSlugified
        }
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
        {
          props: this.props,
          appnameSlugified: this.appnameSlugified
        }
      );
      this.fs.copyTpl(
        this.templatePath('config/.local_store'),
        this.destinationPath('config/.local_store'),
        {
          props: this.props,
          appnameSlugified: this.appnameSlugified
        }
      );
      this.fs.copyTpl(
        this.templatePath('app.sublime-project'),
        this.destinationPath(this.appnameSlugified + '.sublime-project'),
        {
          props: this.props,
          appnameSlugified: this.appnameSlugified
        }
      );
      this.fs.copyTpl(
        this.templatePath('app.sublime-settings'),
        this.destinationPath(this.appnameSlugified + '.sublime-settings'),
        {
          props: this.props,
          appnameSlugified: this.appnameSlugified
        }
      );
    },
  },

  install: function () {
    // this.installDependencies({bower: false});
  }
});
