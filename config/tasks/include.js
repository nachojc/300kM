(function() {
    'use strict';
    const gulp = require('gulp');
    const replace = require('gulp-replace');


    gulp.task('includeCordova', ['returnToWeb'], function(cb) {
        const txtToFind = '</main-app>';
        const txtToReplace = '</main-app><script type="text/javascript" src="cordova.js"></script>';

        gulp.src('./www/index.html')
            .pipe(replace(txtToFind, txtToReplace))
            .pipe(gulp.dest('./www'))

    });

    gulp.task('returnToWeb', function(cb) {
        const txtToFind = '{provide: LocationStrategy, useClass: HashLocationStrategy},';
        const txtToReplace = '//ios';

        gulp.src('./src/app/app.module.ts')
            .pipe(replace(txtToFind, txtToReplace))
            .pipe(gulp.dest('./src/app'))

    });

    gulp.task('prepareCordova', function(cb) {
        const txtToFind = '//ios';
        const txtToReplace = '{provide: LocationStrategy, useClass: HashLocationStrategy},';

        gulp.src('./src/app/app.module.ts')
            .pipe(replace(txtToFind, txtToReplace))
            .pipe(gulp.dest('./src/app'))

    });



}());