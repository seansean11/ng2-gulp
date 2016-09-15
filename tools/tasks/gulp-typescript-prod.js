var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var tsConfig = require(`../../tsconfig.json`);
var Config = require('../config');


gulp.task('typescript:prod', () =>
  gulp
    .src([
      `${Config.APP}**/*.ts`,
      `${Config.APP}**/*.spec.ts`,
    ])
    .pipe(sourcemaps.init())
    .pipe(ts(tsConfig.compilerOptions))
    .pipe(gulp.dest(Config.DIST))
);

