var gulp = require('gulp');
var runSequence = require('run-sequence');
require('./tools/index.js');

gulp.task('serve:dev', (done) => {
  runSequence('clean',
    ['sass', 'compile:ts', 'build:html'],
    ['watch:sass', 'watch:ts', 'watch:html'],
    'browser-sync',
    done);
});
