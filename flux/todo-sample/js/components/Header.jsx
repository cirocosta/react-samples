/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var TodoActions = require('../actions/TodoActions');
var TodoTextInput = require('./TodoTextInput.jsx');

var Header = React.createClass({

  // handler for the 'save' performed in the
  // TodoTextInput.
  handleSave (text) {
    TodoActions.create(text);
  },

  render () {
    return (
      <header id="header">
        <h1>TODOS</h1>
        <TodoTextInput id="new-todo"
                       placeholder="What needs to be done?"
                       onSave={this.handleSave}
        />
      </header>
    );
  }
});

module.exports = Header;
