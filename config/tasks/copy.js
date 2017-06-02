(function() {
    'use strict';
    const gulp = require('gulp');


    gulp.task('copy', function() {
        return gulp.src([
                // './src/**/*.{htm,html}',
                // './src/**/*.js',
                // './src/**/*.css',
                // './src/**/*.{jpg,gif,png}',
                './src/manifest.json'
            ])
            .pipe(gulp.dest('./www', { overwrite: true }));
    });

    gulp.task('copyDeps', function() {
        return gulp.src([
                './src/manifest.json'
            ])
            .pipe(gulp.dest('./www', { overwrite: true }));
    });



}());