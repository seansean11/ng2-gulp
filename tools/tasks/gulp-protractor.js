var gulp = require('gulp');
var path = require('path');
var child_process = require('child_process');

function getProtractorBinary(binaryName){
    var winExt = /^win/.test(process.platform)? '.cmd' : '';
    var pkgPath = require.resolve('protractor');
    var protractorDir = path.resolve(path.join(path.dirname(pkgPath), '..', 'bin'));
    return path.join(protractorDir, '/'+binaryName+winExt);
}

gulp.task('protractor-install', function(done){
    child_process.spawn(getProtractorBinary('webdriver-manager'), ['update'], {
        stdio: 'inherit'
    }).once('close', () => { done(); });
});

gulp.task('protractor', ['protractor-install'], function (done) {
    var argv = process.argv.slice(3); // forward args to protractor
    child_process.spawn(getProtractorBinary('protractor'), argv, {
        stdio: 'inherit'
    }).once('close', () => { done(); });
});
