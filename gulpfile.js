var gulp         =  require('gulp');
var gulpConcat   =  require('gulp-concat');
var gulpCssMin   =  require('gulp-cssmin');
var gulpJsMin    =  require('gulp-jsmin');
var gulpRename   =  require('gulp-rename');
var gulpImageMin =  require('gulp-imagemin');

gulp.task('default', ['jsMin', 'cssMin', 'imagesMin', 'logo']);

gulp.task('jsMin', function() {
  gulp.src(['dev/js/jquery/jquery-3.0.0.min.js', 'dev/js/bootstrap/bootstrap.min.js', 'dev/js/script.js'])
    .pipe(gulpConcat('app.js'))
    .pipe(gulpRename({suffix: '.min'}))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('cssMin', function() {
  gulp.src(['dev/css/bootstrap/bootstrap.min.css', 'dev/css/style.css'])
    .pipe(gulpConcat('style.css'))
    .pipe(gulpCssMin())
    .pipe(gulpRename({suffix: '.min'}))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('imagesMin', function() {
  gulp.src(['dev/images/*'])
    .pipe(gulpImageMin())
    .pipe(gulp.dest('public/images/'));
});

gulp.task('logo', function() {
  gulp.src(['dev/images/logo/*'])
    .pipe(gulpImageMin())
    .pipe(gulp.dest('public/images/logo/'));
});

gulp.task('observer', function() {
  gulp.watch(['dev/js/jquery/jquery-3.0.0.min.js', 'dev/js/bootstrap/bootstrap.min.js', 'dev/js/script.js'], ['jsMin']);
  gulp.watch(['dev/css/bootstrap/bootstrap.min.css', 'dev/css/style.css'], ['cssMin']);
  gulp.watch('dev/images/*', ['imagesMin']);
  gulp.watch('dev/images/logo/*', ['logo']);
});
