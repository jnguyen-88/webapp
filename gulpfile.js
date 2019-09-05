const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('prefix', function() {
    gulp.src('css/main.css')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'));
  });

gulp.task('default', function(done) { 
  gulp.series('prefix')
  done(); 
});
