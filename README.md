# generator-forcedotcom

> [Yeoman](http://yeoman.io) generator for creating a Force.com project

[![Build Status](https://travis-ci.org/amtrack/generator-forcedotcom.svg?branch=master)](https://travis-ci.org/amtrack/generator-forcedotcom)

## Features
The generated project files include

 * `.editorconfig` for enforcing standard file formatting rules
 * project files necessary for using the MavensMate IDE
 * `.gitignore`
 * a default `src/package.xml` if not already present
 * `build.xml` *Ant* file for retrieving and deploying metadata using the official Force.com Migration Tool
 * `.forceignore` for ignoring specific metadata to be retrieved using `force-dev-tool`

## Getting Started
To install generator-forcedotcom from npm, run:

```console
$ npm install -g generator-forcedotcom
```

Finally, initiate the generator:

```console
$ yo forcedotcom
? API Version: 34.0
  create build.xml
  create .env.example
  create src/package.xml
  create README.md
  create .editorconfig
  create .forceignore
  create .gitignore
  create config/.settings
  create config/.local_store
  create test.sublime-project
  create test.sublime-settings
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License
MIT © [Matthias Rolke](mailto:mr.amtrack@gmail.com)
