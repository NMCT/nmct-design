// ---
// SCSS TASK
// ---

// plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    filesize = require('gulp-filesize'),
    browserSync = require('browser-sync'),
    sourcemaps  = require('gulp-sourcemaps'),
    gulpCopy = require('gulp-copy');

// configfile
var config = require('../config').scss;

// Postcss processors
var processors = [
    autoprefixer(config.prefix)
];

// task
gulp.task('scss', ['dependencies'], function () {
    gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(sass.sync(config.settings)
        .on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(filesize())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.jekyllCssDes))
        .pipe(browserSync.stream({match: '**/*.css'}))
        .pipe(gulp.dest(config.cssDest))
        .pipe(gulpCopy('/Users/martijnloth/Sites/nmct-website/wp-content/themes/nmct/dist/style/', {
            prefix: 1
        }))
});
