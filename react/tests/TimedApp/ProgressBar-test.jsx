/**
 * @jsx React.DOM
 */

'use strict';


jest.dontMock('../src/TimedApp/ProgressBar.jsx');

describe('LikeButton', function() {
  var React;
  var TestUtils;
  var ProgressBar;

  beforeEach(function () {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    ProgressBar = require('../src/TimedApp/ProgressBar.jsx');
  });
});
