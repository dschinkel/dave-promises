'use strict';

var gulp = require('gulp'),
    mocha = require('gulp-mocha');

var config = {
    core: {
        src: '*.js'
    },
    test:{
        src: {
            unit:'test/unit/**/*-test.js'
        },
        mocha: {
            reporter: 'spec'
        }
    }
};

gulp.task('default', ['local'], function(){
});

gulp.task('local',['mocha-unit'], function() {
    gulp.watch('**/*.js', ['mocha-unit']);
});

gulp.task('test', function() {
    process.env.PORT = 8000;
    return gulp.src([config.test.src.unit], { read: false })
        .pipe(mocha({
            reporter: config.test.mocha.reporter,
            ui: 'bdd'
        }))
});
