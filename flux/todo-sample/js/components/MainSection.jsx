/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var TodoActions = require('../actions/TodoActions');
var TodoItem = require('./TodoItem.jsx');

var MainSection = React.createClass({
  propTypes: {
    allTodos: React.PropTypes.object.isRequired,
    areAllComplete: React.PropTypes.bool.isRequired
  },

  handleToggleCompleteAll () {
    TodoActions.toggleCompleteAll();
  },

  render () {
    if (!Object.keys(this.props.allTodos).length)
      return null;

    var allTodos = this.props.allTodos;
    var todos = [];

    for (var key in allTodos)
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);

    return (
      <section id="main">
        <input id="toggle-all"
               type="checkbox"
               onChange={this.handleToggleCompleteAll}
               checked={this.props.areAllComplete ? 'checked' : ''}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">
          {todos}
        </ul>
      </section>
    );
  }
});

module.exports = MainSection;
