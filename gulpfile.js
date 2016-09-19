var gulp = require('gulp');
var argv = require('yargs').argv;
var gutil = require('gulp-util');
var Server = require('karma').Server;
var runSequence = require('run-sequence');
var requireDir = require('require-dir');
var config = require('./tools/config.js');
requireDir('./tools/tasks');

gulp.task('serve', (done) => {
  if (argv.env === 'production') {
    gutil.log('** Serving Production Build')

    runSequence('build:prod',
      ['watch:sass', 'watch:ts', 'watch:html'],
      'lint:ts',
      'browser-sync',
      done);
  } else {
    gutil.log('** Serving Development Build')

    runSequence('build',
      ['watch:sass', 'watch:ts', 'watch:html'],
      'lint:ts',
      'browser-sync',
      done);
  }
});

gulp.task('build', (done) => {
  runSequence('clean',
    ['compile:sass', 'compile:shims', 'compile:ts', 'build:html'],
    done);
});

gulp.task('watch:ts', () => {
  gulp.watch(`${config.APP}**/*.ts`, ['compile:ts', 'lint:ts']);
});

gulp.task('test', ['compile:ts'], (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, () => done()).start();
});

gulp.task('tdd', ['compile:ts'], (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, () => done(null)).start();
});

gulp.task('build:prod', (done) => {
  runSequence('clean',
    'build',
    'bundle',
    done);
});
