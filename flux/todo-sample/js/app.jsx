/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var TodoApp = require('./components/TodoApp.jsx');

var obj = {
  render () {
    console.log('dahora');
  }
};

/*jshint ignore:start */
React.renderComponent(
  <TodoApp />,
  document.getElementById('todoapp')
);
/*jshint ignore:end */
