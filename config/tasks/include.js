(function() {
    'use strict';
    const gulp = require('gulp');
    const replace = require('gulp-replace');

    const txtToFind = '</main-app>';
    const txtToReplace = '</main-app><script type="text/javascript" src="cordova.js"></script>';

    gulp.task('includeCordova', function(cb) {
        gulp.src('./www/index.html')
            .pipe(replace(txtToFind, txtToReplace))
            .pipe(gulp.dest('./www'))

    });




}());