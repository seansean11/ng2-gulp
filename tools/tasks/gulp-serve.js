var gulp = require('gulp');
var browsersync = require('browser-sync').create();
var config = require('../config.js');

gulp.task('browser-sync', () => {
  browsersync.init({
    server: {
      baseDir: ['./dist/', './']
    },
    port: config.PORT,
    logLevel: "info",
    injectChanges: true,
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: false
    },
    files: ["dist/**/*.*", "node_modules/**/*.*"]
  });
});
