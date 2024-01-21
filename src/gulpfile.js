const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css() {
    return src('./src/scss/*.scss') // Use a wildcard pattern to match all Sass files
        .pipe(sass())
        .pipe(dest('./dist/css/'));
}

exports.buildCss = css;