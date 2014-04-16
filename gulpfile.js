var gulp = require('gulp'),
    gutil = require('gulp-util'),
    notify = require('gulp-notify'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    shell = require('gulp-shell'),
    stylish = require('jshint-stylish');

// gulp.task('browser-sync', function() {
//     browserSync.init(['../docs/*'], {
//       proxy: 'localhost'
//     });
// });

gulp.task('hologram', function () {
  gulp.src('./')
    .pipe(shell('echo <%= file.path %>/../'))
})

gulp.task('default', ['watch', 'hologram']);

gulp.task('watch', function() {
  // gulp.watch('./assets/sass/*.scss', ['styles']);
  // gulp.watch('./assets/js/*.js', ['scripts']);
  gulp.watch('./_header.html', ['hologram']);
});