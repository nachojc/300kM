(function() {
    'use strict';
    const gulp = require('gulp');
    require('./config/tasks')


    gulp.task('default', ['copy'], function() {});
    gulp.task('cordova', ['includeCordova', 'copyDeps'])
}());