const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function css() {
    return src('./src/scss/*.scss') //the src
        .pipe(sass())
        .pipe(concat('styles.min.css'))  // concat the scss into a single file
        .pipe(cleanCSS())  // minify it
        .pipe(dest('./dist/css/')); //the compiled css destination
}

exports.buildCss = css;

function js() {
    return src('./src/js/*.js') //the src
        .pipe(concat('scripts.min.js')) // concat the js into one file
        .pipe(uglify())  // minify it
        .pipe(dest('./dist/js/')); //the compiled js destination
}

exports.buildJs = js;