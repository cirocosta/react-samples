'use strict';

var gulp = require('gulp')
  , jshint = require('gulp-jshint')
  , livereload = require('gulp-livereload')
  , source = require('vinyl-source-stream')
  , browserify = require('browserify')
  , reactify = require('reactify')
  , exorcist = require('exorcist')
  , es6ify = require('es6ify')
  , path = require('path')
  , del = require('del')

  , mapfile = path.resolve(__dirname, './dist/bundle.js.map');


gulp.task('clean', function (done) {
  del(['./dist/'], done);
});

gulp.task('lint', function () {
  return gulp.src(['./js/**/*.js', './gulpfile.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build', ['lint', 'clean'], function () {
  return browserify({
      entries: './js/app.jsx',
      debug: true
    })
    .transform(reactify)
    .transform(es6ify.configure(/^(?!.*node_modules)+.+\.(js|jsx)$/))
    .bundle()
    .pipe(exorcist(mapfile))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
  if (process.argv[3] === '--livereload')
    livereload.listen();

  gulp.watch(['./js/**/*', './index.html'], ['build'])
    .on('change', livereload.changed);
});
