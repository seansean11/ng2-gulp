var gulp = require('gulp');
var config = require('../config.js');

gulp.task('build:html',['build:index'], () => {
  gulp.src(config.APP + '**/*.html')
    .pipe(gulp.dest(config.DIST + 'app/'));
});

gulp.task('build:index', () => {
  gulp.src(config.INDEX)
    .pipe(gulp.dest(config.DIST));
});

gulp.task('watch:html', () => {
  gulp.watch([config.INDEX, config.APP + '**/*.html'], ['build:html']);
});
