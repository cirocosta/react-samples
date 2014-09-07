/**
 * @jsx React.DOM
 */

'use strict';

/**
 * Here we describe what is going to be our
 * 'controller-view', which listens for events
 * broadcasted by the stores that it depends on
 */

var React = require('react');
var TodoStore = require('../stores/TodoStore');

// other components that we are going to use
var Footer = require('./Footer.jsx');
var Header = require('./Header.jsx')
var MainSection = require('./MainSection.jsx');

/**
 * Fetches the current state of the Store
 */
function getTodoState () {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: !TodoStore.areNotAllComplete
  };
}

/**
 * For every Component we are going to invoke
 * `React.createClass` method and provide a
 * specification object containing at least a
 * `render` method which can optionally contain
 * other lifecycle methods.
 */


/**
 * As this is going to be the top component in
 * our hierachy, this will be holding the entire
 * state of the Store and then passing it to its
 * descendants, maintaining them as functionally
 * pure as possible.
 */
var TodoApp = React.createClass({
  // Our initial state is what the store has in
  // its initial state ([]).
  getInitialState () {
    return getTodoState();
  },

  // Will be invoked immediately after rendering
  // occurs on the client, when the component
  // already has a DOM representation (being
  // accessible through `this.getDOMNode()`
  // method).
  componentDidMount () {
    TodoStore.addChangeListener(this.handleChange)
  },

  // Invoked before the component is unmounted
  // from the DOM. Here is where we perform
  // cleanup, such as invalidating times or
  // cleaning DOM elements created in
  // componentDidMount.
  componentDidUnmount () {
    TodoStore.removeChangeListener(this.handleChange)
  },

  /**
   * Whenever there's a changeEvent this will be
   * setting the state of our component to the
   * new state that the store contains. By
   * calling setState the building process of
   * our component will get fired :)
   */
  handleChange (e) {
    this.setState(getTodoState())
  },

  /**
   * Should return a single child component -
   * virtual representation of a native DOM
   * component or another composite component
   * that we've defined earlier - based on state
   * and properties. This must remain pure (i.e,
   * not modify component state and return the
   * same result each time invoked; it does not
   * read from or write to the dom or interact
   * with the browser) so that server rendering
   * gets facilitaded.
   */
  render () {
    return (
      <div>
        <Header />
        <MainSection allTodos={this.state.allTodos}
                     areAllComplete={this.state.areAllComplete}
        />
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  }
});

module.exports = TodoApp;
