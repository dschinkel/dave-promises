"use strict";
require('babel-core/register');

var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    path = require('path'),
    gutil = require('gulp-util');

var config = {
    test:{
        unit:'build/*-test.js',
        mocha: {
            reporter: 'spec'
        }
    }
};

gulp.task("build", function () {
    return gulp.src(['./src/*.js', './test/unit/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('.', {
            includeContent: false,
            sourceRoot: function(file) {
                return path.relative(file.path, __dirname);
            }
        }))
        .pipe(gulp.dest('build'));
});


gulp.task('test', function() {
    process.env.PORT = 8000;
    return gulp.src(['test/unit/*-test.js'], { read: false })
        .pipe(mocha({
            timeout: 10000,
            reporter: config.test.mocha.reporter,
            ui: 'bdd'
        }))
});
