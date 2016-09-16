const gulp = require('gulp');
const preprocess = require('gulp-preprocess');
const plumber = require('gulp-plumber');
const argv = require('yargs').argv;
const config = require('../config.js');

const distDir = (config.ENV === 'production') ? config.TMP : config.DIST;

gulp.task('build:html',['build:index'], () =>
  gulp
    .src(config.APP + '**/*.html')
    .pipe(gulp.dest(`${distDir}app/`))
);

gulp.task('build:index', () => {
  console.log(config.ENV);

  return gulp
    .src(config.INDEX)
    .pipe(plumber())
    .pipe(preprocess({context: { ENV: config.ENV }}))
    .pipe(gulp.dest(distDir))
}

);

gulp.task('watch:html', () =>
  gulp.watch([config.INDEX, config.APP + '**/*.html'], ['build:html'])
);
