
var gulp = require('gulp');
var sass = require('gulp-sass');

//compile
gulp.task('sass', function(done){
    gulp.src('app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
    done();
    });

    //compile and watch
 gulp.task('watch', function(done) {
    gulp.watch('app/scss/*.scss', gulp.series('sass'));
    done();
   });

   gulp.task('build', gulp.parallel('sass', 'watch'));