'use strict';

var $ = require('jquery');

function parseUserJson (data) {
  return {
    loggedIn: true,
    fullName: data.firstName + ' ' + data.lastName
  };
}

function fetchCurrentUser (cb) {
  return $.ajax({
    type: 'GET',
    url: 'someurl',
    success: function (data) {
      cb(parseUserJson(data));
    }
  });
}

module.exports = fetchCurrentUser;
