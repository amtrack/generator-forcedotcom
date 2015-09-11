'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('forcedotcom:app', function () {
  var runContext;
  before(function (done) {
    runContext = helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      // .withPrompts({ someOption: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'src/package.xml',
      'build.xml',
      '.env.example',
      'README.md',
      '.editorconfig',
      '.forceignore',
      '.gitignore',
      runContext.generator.name + '.sublime-project',
      runContext.generator.name + '.sublime-settings',
      'config/.settings',
      'config/.local_store',
      'package.json'
    ]);
  });
});
