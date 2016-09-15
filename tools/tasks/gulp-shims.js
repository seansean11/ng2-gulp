var gulp = require('gulp');
var concat = require('gulp-concat');
var Config = require('../config');

gulp.task('shims', () =>
  gulp
    .src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js'
    ])
    .pipe(concat('shims.js'))
    .pipe(gulp.dest(`${Config.DIST}js/`))
);
