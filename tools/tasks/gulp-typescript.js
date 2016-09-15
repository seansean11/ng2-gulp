var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var tsConfig = require(`../../tsconfig.json`);
var Config = require('../config');


gulp.task('typescript:dev', () =>
  gulp
    .src([
      `${Config.SRC}**/*.ts`,
      `!${Config.ASSETS}`
    ])
    .pipe(sourcemaps.init())
    .pipe(ts(tsConfig.compilerOptions))
    .pipe(gulp.dest(Config.DIST))
);

