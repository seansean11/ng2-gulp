var gulp = require('gulp');
var runSequence = require('run-sequence');
var requireDir = require('require-dir');
requireDir('./tools/tasks');

gulp.task('serve:dev', (done) => {
  runSequence('clean',
    ['sass', 'compile:ts', 'build:html'],
    ['watch:sass', 'watch:ts', 'watch:html'],
    'browser-sync',
    done);
});

gulp.task('build:dev', () => {

});

gulp.task('build:prod', () => {

});
