'use strict';

var gulp = require('gulp')
  , path = require('path')
  , del = require('del')
  , livereload = require('gulp-livereload')
  , browserify = require('browserify')
  , reactify = require('reactify')
  , es6ify = require('es6ify')
  , exorcist = require('exorcist')
  , buffer = require('vinyl-buffer')
  , source = require('vinyl-source-stream')
  , mapfile = path.resolve(__dirname, './dist/bundle.js.map');


gulp.task('clean', function (done) {
  del(['./dist/'], done);
});

gulp.task('build', ['clean'], function () {
  browserify({
      entries: './js/app.js',
      debug: true
    })
    .transform(reactify)
    .transform(es6ify.configure(/^(?!.*node_modules)+.+\.js$/))
    .bundle()
    .pipe(exorcist(mapfile))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function () {
  if (process.argv[3] === '--livereload')
    livereload.listen();

  gulp.watch(['./js/**/*', './index.html'], ['build'])
    .on('change', livereload.changed);
});
