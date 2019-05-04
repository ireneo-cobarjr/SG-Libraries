'use strict';

var del = require('del');
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const rename = require("gulp-rename");
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');

///////////////////////////////////////////////////////
// Cleaning utilities
gulp.task('clean', () => del(['dist']));
gulp.task('snake-border-clean', () => del(['dist/snake-border']));
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// Snake Border
gulp.task('minify-snake-border-css', () => {
    return gulp.src('snake-border/snake-border.scss')
        .pipe(sass().on('error', sass.logError))
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

gulp.task('watch-snake-border-scss', function () {
    return gulp.watch('snake-border/snake-border.scss', gulp.series('minify-snake-border-css'));
});
gulp.task('watch-snake-border-js', function () {
    return gulp.watch('snake-border/snake-border.js', gulp.series('minify-snake-border-js'));
});

    gulp.task('snake-border',
        gulp.parallel(
            'minify-snake-border-js',
            gulp.series(
                'minify-snake-border-css'
            )
        )
    );
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// Development Build
    gulp.task('snake-border-dev',
        gulp.series(
            'snake-border-clean',
            gulp.parallel(
                gulp.series(
                    'minify-snake-border-js',
                    'watch-snake-border-js'
                ),
                gulp.series(
                    'minify-snake-border-css',
                    'watch-snake-border-scss'
                )
            )
        )
    );

    gulp.task('dev',
        gulp.parallel(
            'snake-border-dev'
        )
    );
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// Release Build
    gulp.task('default',
        gulp.series(
            'clean',
            gulp.parallel(
                'snake-border'
            )
        )
    );
///////////////////////////////////////////////////////
