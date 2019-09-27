var gulp = require('gulp');
var load = require('gulp-load-plugins')();
// var browser = require('browser-sync').creat();
gulp.task('css',function(done){
    // gulp.src('./src/css/**')
    // .pipe(load.minifyCss())
    // .pipe(gulp.dest('./dist/css/'));
     
    gulp.src('./src/*.scss')
    .pipe(load.sass())
    .pipe(gulp.dest('./dist/css/'));

    done()
})
