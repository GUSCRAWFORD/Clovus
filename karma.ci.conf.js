// Karma configuration
// Generated on Sat Apr 15 2017 00:35:41 GMT-0400 (Eastern Daylight Time)
var webpackConfig = require('./webpack.config'),
  webpack = require("webpack");

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    webpack: {
        module:webpackConfig.module,
        resolve:webpackConfig.resolve,
        plugins:[
      new webpack.SourceMapDevToolPlugin({
        filename: null,
        test: /\.(ts|js)/i // to allow webpack to pass sourcemap if the file is ts or js.

      })]
    }, 

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon', 'karma-typescript'],


    // list of files / patterns to load in the browser
    files: [
      {pattern:'clovus-ui/**/*.ts'},
      {pattern:'test/**/*.ts'}
      ],


    // list of files to exclude
    exclude: [/* node is excluded by karma-typscript*/],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','karma-typescript'],

    plugins: ['karma-coverage',
              'karma-remap-coverage',
              'karma-mocha',
              'karma-chai',
              'karma-sinon',
              'karma-webpack',
              'karma-sourcemap-loader',
              'karma-phantomjs-launcher',
              'karma-chrome-launcher',
              'karma-typescript'],
    karmaTypescriptConfig: {
        reports:
        {
            "cobertura": {
                "directory": "coverage",
                "filename": "coverage.xml",
                "subdirectory": "cobertura"
            },
            "html": "coverage",
            "text-summary": "",
            "lcovonly":"coverage/lcov"
        }
    },
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
