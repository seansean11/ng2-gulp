var gulp = require('gulp');
var runSequence = require('run-sequence');
var requireDir = require('require-dir');
requireDir('./tools/tasks');

gulp.task('serve:dev', (done) => {
  runSequence('build:dev',
    'browser-sync',
    done);
});

gulp.task('build:dev', (done) => {
  runSequence('clean',
    ['sass', 'compile:shims', 'compile:ts', 'build:html'],
    done);
});

gulp.task('build:prod', () => {

});
