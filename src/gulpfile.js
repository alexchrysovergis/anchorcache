const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function css() {
    return src('./src/scss/*.scss') //the src
        .pipe(sass())
        .pipe(concat('styles.min.css'))  // concat the scss into a single file
        .pipe(cleanCSS())  // minify it
        .pipe(dest('../htdocs/dist/css/')); //the compiled css destination
}

function js() {
    return src('./src/js/*.js') //the src
        .pipe(concat('scripts.min.js')) // concat the js into one file
        .pipe(uglify())  // minify it
        .pipe(dest('../htdocs/dist/js/')); //the compiled js destination
}

function watchFiles() {
    watch('./src/scss/*.scss', css); // Watch sass files and run the css task on save
    watch('./src/js/*.js', js); // Watch js files and run the js task on save
}

exports.css = css;
exports.js = js;
exports.watch = watchFiles;