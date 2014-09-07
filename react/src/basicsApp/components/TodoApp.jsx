/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var TodoList = require('./TodoList.jsx');
var TodoForm = require('./TodoForm.jsx');

/**
 * Aplicação em si. Mantém o estado mínimo
 * (ítems da lista).
 */
var TodoApp = React.createClass({
  getInitialState: function () {
    return {items: []};
  },

  handleTodoSubmit: function (todo) {
    this.setState({items: this.state.items.concat([todo])});
  },

  handleTodoDelete: function (index) {
    var newItems = Array.prototype.slice.call(this.state.items);
    newItems.splice(index, 1);

    this.setState({items: newItems});
  },

  render: function () {
    return (
      <div>
        <h3>Todo List!</h3>
        <TodoList onTodoDelete={this.handleTodoDelete} items={this.state.items} />
        <TodoForm onTodoSubmit={this.handleTodoSubmit} number={this.state.items.length + 1}/>
      </div>
    );
  }
});

module.exports = TodoApp;
