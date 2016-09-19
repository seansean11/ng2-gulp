const gulp = require('gulp');
const preprocess = require('gulp-preprocess');
const plumber = require('gulp-plumber');
const config = require('../config.js');

gulp.task('build:html',['build:index'], () =>
  gulp
    .src(config.APP + '**/*.html')
    .pipe(gulp.dest(`${config.DIST}app/`))
);

gulp.task('build:index', () => {

  return gulp
    .src(config.INDEX)
    .pipe(plumber())
    .pipe(preprocess({context: { ENV: config.ENV }}))
    .pipe(gulp.dest(config.DIST))
}

);

gulp.task('watch:html', () =>
  gulp.watch([config.INDEX, config.APP + '**/*.html'], ['build:html'])
);
