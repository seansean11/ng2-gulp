const gulp = require('gulp');
const ts = require('gulp-typescript');
const config = require('../config.js');

const distDir = (config.ENV === 'production') ? config.TMP : config.DIST;

gulp.task('compile:ts', () => {
  const tsProject = ts.createProject('tsconfig.json');

  const tsResult = tsProject.src([
      `${config.SRC}**/*.ts`,
      `!${config.ASSETS}`
    ])
    .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest(distDir));
});

gulp.task('watch:ts', () => {
  gulp.watch(`${config.APP}**/*.ts`, ['compile:ts']);
});
