const gulp = require('gulp');
const concat = require('gulp-concat');
const config = require('../config');

gulp.task('compile:shims', () =>
  gulp
    .src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js'
    ])
    .pipe(concat('shims.js'))
    .pipe(gulp.dest(`${config.DIST}js/`))
);
