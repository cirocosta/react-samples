var gulp = require('gulp')
  , exorcist = require('exorcist')
  , path = require('path')
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

var mapfile = path.join(__dirname, '/dist/bundle.js.map')
var minmapfile = path.join(__dirname, '/dist/bundle.min.js.map')


gulp.task('clean', function (done) {
  del(['./dist/'], done);
});

gulp.task('build-js', ['clean'], function () {
  browserify({
      entries: glob.sync('./src/app.jsx'),
      debug: true
    })
    .transform(reactify)
    .bundle()
    .pipe(exorcist(mapfile))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(buffer())
    .pipe(uglify({mangle: true}))
    .pipe(rename(function (path) {
      path.extname = ".min.js";
    }))
    .pipe(gulp.dest('./dist/'));
});

// TODO (ciro) don't forget to configure the
// proper source-maps generation
gulp.task('build-css', function () {
  gulp.src('./src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build', ['build-css', 'build-js']);

gulp.task('watch', function () {
  livereload.listen();

  gulp.watch(['./src/**/*', './index.html'], ['build-js'])
    .on('change', livereload.changed);
});
