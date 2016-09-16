const gulp = require('gulp');
const del = require('del');

const config = require('../config.js');

gulp.task('clean', () => del([config.DIST, 'coverage']));
