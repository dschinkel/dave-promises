"use strict";
require('babel-core/register');

var gulp = require('gulp'),
    mocha = require('gulp-mocha');

var config = {
    test:{
        unit:'test/unit/**/*-test.js',
        mocha: {
            reporter: 'spec'
        }
    }
};

gulp.task('test', function() {
    process.env.PORT = 8000;
    return gulp.src([config.test.unit], { read: false })
        .pipe(mocha({
            reporter: config.test.mocha.reporter,
            ui: 'bdd'
        }))
});
