var gulp = require('gulp'),
    sass = require('gulp-sass');




gulp.task('sass', function () {
  return gulp.src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});


 
gulp.task('default',function() {
    gulp.watch('styles/*.scss',['sass']);
});