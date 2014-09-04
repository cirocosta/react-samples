var gulp = require('gulp')
  , sass = require('gulp-sass')
  , uglify = require('gulp-uglify')
  , livereload = require('gulp-livereload')
  , rename = require('gulp-rename')
  , source = require('vinyl-source-stream')
  , buffer = require('vinyl-buffer')
  , browserify = require('browserify')
  , reactify = require('reactify')
  , glob = require('glob')
  , del = require('del');


gulp.task('clean', function (done) {
  del(['./dist/'], done);
});

gulp.task('build-js', ['clean'], function () {
  browserify(glob.sync('./src/app.jsx'))
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(buffer())
    .pipe(uglify({mangle: true}))
    .pipe(rename(function (path) {
      path.extname = ".min.js";
    }))
    .pipe(gulp.dest('./dist/'));
});

// gulp.task('build-css', function () {
//   gulp.src('./')
// });

gulp.task('livereload', function () {
  livereload.listen();

  gulp.watch(['./dist/'])
    .on('change', livereload.changed);
});
