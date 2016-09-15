const gulp = require('gulp');
const del = require('del');
const SystemBuilder = require('systemjs-builder');
const Config = require('../config');

const builder = new SystemBuilder();

gulp.task('bundle', () =>
  builder
    .loadConfig('systemjs.config.js')
    .then(() => builder.buildStatic('${Config.TMP}main.js', `${Config.DIST}js/bundle.js`))
    .then(() => del('tmp'))
);
