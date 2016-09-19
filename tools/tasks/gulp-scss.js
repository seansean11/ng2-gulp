var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config.js');

gulp.task('compile:sass', () => {
  return gulp.src(`${config.APP}**/*.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${config.DIST}app/`));
});

gulp.task('watch:sass', () => {
  gulp.watch(`${config.APP}**/*.scss`, ['sass']);
});
