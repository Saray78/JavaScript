/**
 * Created by Blue Butterfly on 12/09/2016.
 */
//declaraciones


const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

//Tasks de babel
gulp.task('es6',()=>
gulp.src('./assets/js/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('./js/'))
);

//tasks de sass
gulp.task('sass',()=>
gulp.src('./assets/css/*.css')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))

);

gulp.task('default',()=>{
    gulp.watch('./assets/js/*.js',['es6']);
gulp.watch('./assets/css/*.css',['sass']);
});