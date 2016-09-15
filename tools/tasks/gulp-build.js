const gulp = require('gulp');
const config = require('../config.js');

const distDir = (config.ENV === 'production') ? config.TMP : config.DIST;

gulp.task('build:html',['build:index'], () =>
  gulp
    .src(config.APP + '**/*.html')
    .pipe(gulp.dest(`${distDir}app/`))
);

gulp.task('build:index', () =>
  gulp
    .src(config.INDEX)
    .pipe(gulp.dest(distDir))
);

gulp.task('watch:html', () =>
  gulp.watch([config.INDEX, config.APP + '**/*.html'], ['build:html'])
);
