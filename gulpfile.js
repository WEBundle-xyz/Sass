const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { src, dest, watch, series } = require('gulp');

function buildStyles() {
	return src('sass/**/*.scss').pipe(sass()).pipe(dest('css'));
}

function watchTask() {
	gulp.watch(['sass/**/*.scss'], buildStyles);
	gulp.watch('./js/**/*.js');
}

exports.default = series(buildstyles, watchTask);
