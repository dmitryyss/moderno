const {src, dest, parallel} = require('gulp')
const imagemin     = require('gulp-imagemin')
const autoPrefixer = require('gulp-autoprefixer')
const rename       = require('gulp-rename')
const sass         = require('gulp-sass')


function imageMinification() {
    src('app/images/src/*')
        .pipe(imagemin({
            cascade: false
        }))
        .pipe(dest('app/images/dist/'))
}

function autoprefixer() {
    src('app/scss/style.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(autoPrefixer())
        .pipe(dest('app/scss/'))
}

function minCss() {
    src('app/scss/style.min.css')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest('app/scss/'))
}

exports.imageMinification = imageMinification
exports.autoprefixer      = autoprefixer
exports.minCss            = minCss
exports.default = parallel(autoprefixer, imageMinification, minCss)