var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src('app/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});