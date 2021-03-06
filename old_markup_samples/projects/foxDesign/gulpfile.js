'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const eslint = require('gulp-eslint');
const concat = require('gulp-concat');

gulp.task('sass', function() {
  return gulp.src('css/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'));
});

gulp.task('js', function() {
  return gulp.src('js/**.js')
    .pipe(sourcemaps.init())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(concat('build.js'))
     .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function() {
  return del('build');
});

// сборка проекта
gulp.task('build', gulp.series('clean', 'sass'));

// вотчер
gulp.task('watch', function() {
  gulp.watch('css/*.scss', gulp.series('sass'));
});

// девелоперская задача - сначала собирает проект,
// потом вотчера ставит сразу
gulp.task('dev', gulp.series('build', 'watch'));
