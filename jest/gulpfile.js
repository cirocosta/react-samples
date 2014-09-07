/**
 * Although i really likes gulp, maybe using it
 * with jest is not all that necessary. Maybe
 * only a cli stuff is enough (we can pass also
 * preprocessor script).
 */


'use strict';

var gulp = require('gulp');
var jest = require('./utils/gulp-jest');


// gulp.task('test', function () {
//   return gulp.src('__tests__').pipe(jest({

//   }))
// });
