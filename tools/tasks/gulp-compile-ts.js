const gulp = require('gulp');
const ts = require('gulp-typescript');
const config = require('../config.js');

gulp.task('compile:ts', () => {
  const tsProject = ts.createProject('tsconfig.json');

  const tsResult = tsProject.src([
      `${config.SRC}**/*.ts`,
      `!${config.ASSETS}`
    ])
    .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest(config.DIST));
});

gulp.task('watch:ts', () => {
  gulp.watch(`${config.APP}**/*.ts`, ['compile:ts']);
});
