var gulp = require('gulp');
var ts = require('gulp-typescript');
var config = require('../config.js');

gulp.task('compile:ts', () => {
  var tsProject = ts.createProject('tsconfig.json');

  var tsResult = tsProject.src()
    .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest(config.DIST));
});

gulp.task('watch:ts', () => {
  gulp.watch(config.APP + '**/*.ts', ['compile:ts']);
});
