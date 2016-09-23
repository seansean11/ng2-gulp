const gulp = require('gulp');
const ts = require('gulp-typescript');
const plumber = require('gulp-plumber');
const config = require('../config.js');

const distDir = (config.ENV === 'production') ? config.TMP : config.DIST;
const tsProject = ts.createProject('tsconfig.json');

gulp.task('compile:ts', () => {
  tsProject.src([
      `${config.SRC}*.ts`,
      `${config.APP}**/*.ts`
    ])
    .pipe(plumber())
    .pipe(tsProject()).js
    .pipe(gulp.dest(distDir));
});

gulp.task('watch:ts', () => {
  gulp.watch(`${config.APP}**/*.ts`, ['compile:ts']);
});
