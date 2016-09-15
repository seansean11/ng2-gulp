var gulp = require('gulp');
var ts = require('gulp-typescript');
var helpers = require('../helpers');
var tsConfig = require(`${helpers.root()}/tsconfig.json`);

gulp.task('typescript', () =>
  gulp
    .src('src/app/**/*.ts')
    .pipe(ts(tsConfig))
);

