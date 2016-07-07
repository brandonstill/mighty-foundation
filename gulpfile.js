'use strict';

var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

// Lint, compile and minify javascript
gulp.task('js', function() {
  gulp.src('./src/scripts/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(browserify().on('error', showError))
    .pipe(uglify().on('error', showError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/dist/'));
});

// Compile and minify stylesheets
gulp.task('css', function() {
  gulp.src('./src/styles/*.scss')
    .pipe(sass({
      includePaths: [
        'src/styles/vendor/foundation/scss',
        'src/styles/vendor/motion-ui/src',
        'src/styles/vendor/font-awesome/scss'
      ]}
    ).on('error', showError))
    .pipe(prefix('last 2 versions'))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/dist/'));
});

// Lint, compile and minify javascript: on save
gulp.task('watch', function() {
  gulp.watch(['./src/scripts/*.js'], ['js']);
  gulp.watch(['./src/styles/**/*.scss'], ['css']);
});

// Lint, compile and minify javascript: run once
gulp.task('default', ['js', 'css']);

// Error function
function showError (error) {
  console.log(error.toString());
  this.emit('end');
}