var gulp = require('gulp');
var gUtil = require('gulp-util');
var tslint = require('gulp-tslint');
var config = require('../config.js');
var tslintRules = require('../../tslint.json');

gulp.task('lint:ts', () => {
  gUtil.log(gUtil.colors.bgMagenta('RUNNING TSLINT ON CODE'));
  gUtil.log(gUtil.colors.cyan('======================================'));

  return gulp.src(config.APP + '**/*.ts')
    .pipe(tslint({
      formatter: "prose",
      rulesDirectory: tslintRules.rulesDirectory
    }))
    .pipe(tslint.report({
      emitError: false
    }));
});
