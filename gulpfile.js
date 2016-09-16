var gulp = require('gulp');
var Server = require('karma').Server;
var runSequence = require('run-sequence');
var requireDir = require('require-dir');
var config = require('./tools/config.js');
requireDir('./tools/tasks');

gulp.task('serve:dev', (done) => {
  runSequence('build:dev',
    ['watch:sass', 'watch:ts', 'watch:html'],
    'lint:ts',
    'browser-sync',
    done);
});

gulp.task('build:dev', (done) => {
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

gulp.task('build:prod', () => {
  runSequence('clean',
  ['sass', 'compile:shims', 'compile:ts']
  )
});
