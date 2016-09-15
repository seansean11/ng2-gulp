process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
process.env.PORT = process.env.PORT ? process.env.PORT : '8080';

function Config() {
  this.ENV = process.env.NODE_ENV;
  this.PORT = process.env.PORT;
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
