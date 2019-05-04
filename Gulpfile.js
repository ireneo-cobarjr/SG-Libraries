'use strict';

const del = require('del');
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const rename = require("gulp-rename");
const browserSnyc = require('browser-sync').create();
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');

var ServerRunning = false;

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
        .pipe(browserSnyc.stream())
});

gulp.task('minify-snake-border-js', function() {
    return gulp.src('snake-border/snake-border.js')
      .pipe(terser())
      .pipe(rename("snake-border.min.js"))
      .pipe(gulp.dest('dist/snake-border'))
});

    gulp.task('snake-border',
        gulp.parallel(
            'minify-snake-border-js',
            gulp.series(
                'minify-snake-border-css'
            )
        )
    );
        function snakeBorderSetDev() {
            // SnakeBorderDev = true;
        }

///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// Browser integration

gulp.task('serve', function () {
    if (!ServerRunning) {
        browserSnyc.init({
            server: {
                baseDir: './'
            }
        });
        ServerRunning = true;
        gulp.watch('./*.html').on('change', browserSnyc.reload);
        gulp.watch('snake-border/snake-border.scss', gulp.series('minify-snake-border-css'));
        gulp.watch('snake-border/snake-border.js', gulp.series('minify-snake-border-js', 'server-reload'));
    }
});

gulp.task('server-reload', browserSnyc.reload);

///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// Development Build
    gulp.task('snake-border-dev',
        gulp.series(
            'snake-border-clean',
            'minify-snake-border-js',
            'minify-snake-border-css',
            'serve'
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
            ),
            'serve'
        )
    );
///////////////////////////////////////////////////////
