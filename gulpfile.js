var gulp  = require('gulp'),
    sass = require ('gulp-sass'),
    uglify = require('gulp-uglify'),
    prefix = require('gulp-autoprefixer');
//    watch = require('gulp-watch');


gulp.task('sass', function () {
    return gulp.src('./dist/css/*.scss')
        .pipe(sass({style: 'expanded'})
        .on('error', sass.logError))
        .pipe(prefix({ browsers: ['> 1%', 'last 2 versions'] }))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('uglify',function() {
    return gulp.src('./dist/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./src/js'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./dist/css/*.scss', ['sass']);
});
gulp.task('default', ['sass', 'uglify', 'sass:watch']);