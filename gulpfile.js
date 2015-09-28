/*!
 * CJ Audit Tool V 1.0.4 (beta)
 * A JavaScript based utility to perform Web Accessibility and HTML Validation Audit.
 * https://github.com/nxame/site-audit
 * Author: Adrian Noel (@theadriannoel)
 * 
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 CSS Junction
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/

'use strict';

var gulp = require("gulp"),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    webserver = require('gulp-webserver');

/*
 * @task: sass
 * Compile all SCSS files to CSS, put in DIST folder.
 */
gulp.task('sass', function () {
    return gulp.src(['./scss/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});

/*
 * @task: scripts
 * Concatenates all javascripts file provided into src and puts them into DIST file.
 */
gulp.task('scripts', function () {
    return gulp.src(['./src/*.js'])
        .pipe(concat('cj-audit.js'))
        .pipe(gulp.dest('./dist/'));
});


/*
 * @task: watchAll
 * Triggers the watcher for keeping an eye on JS, CSS ad .MD files and runs respective tasks.
 */
gulp.task('watchAll', ['sass', 'scripts'], function () {
    gulp.watch(['scss/*.scss'], ['sass']);
    gulp.watch(['src/*.js'],    ['scripts']);
});

/*
 * @task: serve
 * Open an Web Server to browse demo.
 * URL: http://localhost:4003/
 */
gulp.task('serve', function() {
    gulp.watch(['scss/*.scss'], ['sass']);
    gulp.watch(['src/*.js'],    ['scripts']);

    gulp.src('./')
        .pipe(webserver({
            port: 4003,
            livereload: false,
            directoryListing: false,
            open: true
        }));
});

gulp.task('default', ['sass', 'scripts']);