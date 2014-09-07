/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var TodoActions = require('../actions/TodoActions');

var Footer = React.createClass({
  propTypes: {
    allTodos: React.PropTypes.object.isRequired
  },

  handleClearCompletedClick () {
    TodoActions.destroyCompleted();
  },

  render () {
    var allTodos = this.props.allTodos;
    var total = Object.keys(allTodos).length;
    var completed = 0;

    if (!total)
      return null;

    for (var i in allTodos) {
      if (allTodos[i].complete)
        completed++;
    }

    var itemsLeft = total - completed;
    var itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
    itemsLeftPhrase += 'left';

    var clearCompletedButton;

    if (completed) {
      clearCompletedButton =
        <button id="clear-completed"
                onClick={this.handleClearCompletedClick} >
          Clear completed ({completed})
        </button>
    }

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>{itemsLeft}</strong>
          {itemsLeftPhrase}
        </span>
        {clearCompletedButton}
      </footer>
    );
  }
});

module.exports = Footer;
