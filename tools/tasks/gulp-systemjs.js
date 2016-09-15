var gulp = require('gulp');
var Config = require('../config');
SystemBuilder = require('systemjs-builder');

var builder = new SystemBuilder();

gulp.task('systemjs', () =>
  builder
    .loadConfig('systemjs.config.js')
    .then(() => builder.buildStatic('dist/main.js', `${Config.DIST}js/bundle.js`))
);
