'use strict';

// Require
var del = require('del'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    gif = require('gulp-if'),
    jsdoc = require('gulp-jsdoc3'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    uglify = require('gulp-uglify'),
    stylish = require('jshint-stylish'),
    config = require('./gulpconfig.js'),
    functions = require('./gulpfunctions.js');

// Default task
gulp.task('default', ['build']);

// Build master-task
gulp.task('build', ['clean', 'build-library', 'readme']);

// Clean super-task
gulp.task('clean', function() {
    del(config.v74.output + '/**/*.js');
    del('./readme.md');
});

// Readme super-task
gulp.task('readme', function() {
    return gulp.src('./src/src-readme.md')
        .pipe(replace(/\{\{random-query\}\}/g, functions.randomQuery))
        .pipe(replace(/\{\{date-string\}\}/g, functions.dateString))
        .pipe(rename('readme.md'))
        .pipe(gulp.dest('./'));
});

// Build library super-task
gulp.task('build-library', ['library-exp', 'library-min', 'library-doc']);

// Build library (expanded) task
gulp.task('library-exp', ['library-lint'], function() {
    return gulp.src(config.v74.input)
        .pipe(concat(config.v74.filename.expanded))
        .pipe(replace(/\{\{date-string\}\}/g, functions.dateString))
        .pipe(gulp.dest(config.v74.output));
});

// Build library (minified) task
gulp.task('library-min', ['library-lint'], function() {
    return gulp.src(config.v74.input)
        .pipe(concat(config.v74.filename.minified))
        .pipe(replace(/\{\{date-string\}\}/g, functions.dateString))
        .pipe(uglify())
        .pipe(gulp.dest(config.v74.output));
});

// Document library task
gulp.task('library-doc', ['library-lint'], function(doc) {
    gulp.src(config.v74.input, {read: false})
        .pipe(jsdoc(doc));
});

// Lint library task
gulp.task('library-lint', function() {
    return gulp.src(config.v74.input)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish, {verbose: true}))
        .pipe(jshint.reporter('fail'));
});
