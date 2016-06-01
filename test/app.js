'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-forcedotcom:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ apiVersion: '34.0' })
      .toPromise();
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
      // this.appnameSlugified + '.sublime-project',
      // this.appnameSlugified + '.sublime-settings',
      'config/.settings',
      'config/.local_store',
      'package.json'
    ]);
  });
});
