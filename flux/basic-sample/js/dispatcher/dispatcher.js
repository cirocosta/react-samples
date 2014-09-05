'use strict';

var Promise = require('es6-promise').Promise;
// will provide us ES6's Object.assign method,
// which is just like the old _.extend(dest,
// *sources).
var merge = require('react/lib/merge');

var _callbacks = [];
var _promises = [];

var Dispatcher = function () {};

// This is what we'd do in ES6 with
// Object.assign(ClassName.prototype, {stuff}).
Dispatcher.prototype = merge(Dispatcher.prototype, {

});
