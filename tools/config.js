const gutil = require('gulp-util');

function Config() {
  this.ENV = gutil.env.env || 'development';;
  this.PORT = '8080';;
  this.SRC = './src/';
  this.DIST = './dist/';
  this.TMP = './.tmp/';
  this.APP = `${this.SRC}app/`;
  this.ASSETS = `${this.SRC}assets/`;
  this.INDEX = `${this.SRC}index.html`;
  this.SCSS = `${this.ASSETS}scss/`;
  this.FONTS = `${this.ASSETS}fonts/`;
  this.IMG = `${this.ASSETS}img/`;
}

module.exports = new Config();
