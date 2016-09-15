module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [{ pattern: './config/karma-test-shim.js', watched: false }],
    preprocessors: { './config/karma-test-shim.js': ['coverage', 'sourcemap'] },
    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json' },
        { type: 'html' }
      ]
    },
    reporters: [ 'mocha', 'coverage' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  });
};
