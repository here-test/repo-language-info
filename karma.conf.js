module.exports = function (config) {
    config.set({
        basePath: '/',
        frameworks: ['jasmine'],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-babel-preprocessor'
        ],
        files: [
            './**/*.spec.js',
            './node_modules/vue/dist/vue.js'
        ],
        exclude: [],
        preprocessors: {
            './tests/**/*.spec.js': ['babel']
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity
    })
};
