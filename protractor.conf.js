exports.config = {
  baseUrl: 'http://localhost:8080/',
  specs: [
    './src/**/**.e2e.ts',
    './src/**/*.e2e.ts'
  ],
  framework: 'jasmine2',
  allScriptsTimeout: 110000,
  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter-true']
    }
  },
  onPrepare: function() {
    const SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: true }));

    browser.ignoreSynchronization = false;
  },
  useAllAngular2AppRoots: true
};
