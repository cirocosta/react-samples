/**
 * @jsx React.DOM
 */

'use strict';

/**
 * This component represents an item in the
 * to-do list.
 *
 * Whenever a user clicks in the button a
 * callback (handleDestroyClick) will be fired.
 * This will then call the destroy method of our
 * Action, which will then trigger dispatcher's
 * `dispatch` with the actions payload.
 */

var React = require('react');
var TodoActions = require('../actions/TodoActions');

var TodoItem = React.createClass({
  // PropTypes ensures that our React component
  // will be used correctly. Here we define some
  // validators that can be used to make sure that
  // the data we are receiving is valid. If
  // invalid, a warning will be shown in the
  // console (validation checked only in dev mode).
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  // The handler will be called whenever someone
  // clicks in the button. This callback will then
  // generate and Action, which will then send
  // payload to dispatcher.
  handleDestroyClick () {
    TodoActions.destroy(this.props.todo.id);
  },

  render () {
    var todo = this.props.todo;

    return (
      <li key={todo.id}>
        <label>
          {todo.text}
        </label>
        <button className="destroy"
                onClick={this.handleDestroyClick} />
      </li>
    );
  }
});

module.exports = TodoItem;
