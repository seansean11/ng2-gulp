const gulp = require('gulp');
const del = require('del');
const SystemBuilder = require('systemjs-builder');
const config = require('../config');

const builder = new SystemBuilder();

gulp.task('bundle', () =>
  builder
    .loadConfig('systemjs.config.js')
    .then(() => builder.buildStatic(`${config.TMP}main.js`, `${config.DIST}js/bundle.js`))
    .then(() => del('tmp'))
);
