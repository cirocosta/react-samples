var gulp = require('gulp')
  , sass = require('gulp-sass')
  , uglify = require('gulp-uglify')
  , concat = require('gulp-concat')
  , sourcemaps = require('gulp-sourcemaps')
  , livereload = require('gulp-livereload')
  , rename = require('gulp-rename')
  , csso = require('gulp-csso')

  , browserify = require('browserify')
  , reactify = require('reactify')
  , exorcist = require('exorcist')
  , runSequence = require('run-sequence')

  , path = require('path')
  , glob = require('glob')
  , del = require('del')

  , source = require('vinyl-source-stream')
  , buffer = require('vinyl-buffer');


var mapfile = path.join(__dirname, '/dist/js/bundle.js.map')


gulp.task('clean', function (done) {
  del(['./dist/js/', './dist/jcss/'], done);
});

gulp.task('build-js', function () {
  return browserify({
      entries: glob.sync('./src/app.jsx'),
      debug: true
    })
    .transform(reactify)
    .bundle()
    .pipe(exorcist(mapfile))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(buffer())
    .pipe(uglify({mangle: true}))
    .pipe(rename(function (path) {
      path.extname = ".min.js";
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('build-css', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(csso())
      .pipe(concat('main.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('build', function (cb) {
  runSequence('clean', 'build-css', 'build-js', cb);
});

gulp.task('watch', function () {
  livereload.listen();

  gulp.watch(['./dist/**/*', './index.html'], ['build'])
    .on('change', livereload.changed);
});
