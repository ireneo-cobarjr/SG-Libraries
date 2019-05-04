'use strict';

var del = require('del');
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const rename = require("gulp-rename");

gulp.task('clean', () => del(['dist']));
 
gulp.task('minify-snake-border-css', () => {
    return gulp.src('snake-border/snake-border.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: '*'}))
        .pipe(rename("snake-border.min.css"))
        .pipe(gulp.dest('dist/snake-border'))
});

gulp.task('minify-snake-border-js', function() {
    return gulp.src('snake-border/snake-border.js')
      .pipe(terser())
      .pipe(rename("snake-border.min.js"))
      .pipe(gulp.dest('dist/snake-border'))
});

  gulp.task('default',
    gulp.series(
        'clean',
        gulp.parallel(
            'minify-snake-border-css',
            'minify-snake-border-js'
        )
    )
  );
