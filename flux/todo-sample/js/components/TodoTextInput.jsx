/**
 * @jsx React.DOM
 */

'use strict';

/**
 * Here we are going to represent what is the
 * input of text to the user. This is a bit more
 * complicated as we are going to expose
 * different kinds of state. There'll be the
 * Application state (which contains the state
 * of the TodoList) and the ComponentState -
 * which will contain the state of what the user
 * is actually doing with the component.
 *
 * This is a very important separation as we
 * don't want to, for example, send a bunch of
 * stuff to our server (e.g, for every user
 * input send data).
 */

var React = require('react');
var ENTER_KEY_CODE = 13;

var TodoTextInput = React.createClass({
  // validation stuff. This also makes it clear
  // what are the props that the component
  // accepts.
  propTypes: {
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onSave: React.PropTypes.func.isRequired,
    value: React.PropTypes.string
  },

  // retrieving the component's initial state
  getInitialState () {
    return {
      value: this.props.value || ''
    };
  },

  // call's the callback passed as `onSave` to
  // this component, allowing it to be used in
  // different ways. In our application `onSave`
  // will be passed by our Header component.
  save () {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  },

  // for every change in the input set's the state
  // of the component (not the application)
  handleChange () {
    this.setState({
      value: event.target.value
    });
  },

  handleKeyDown () {
    if (event.keyCode === ENTER_KEY_CODE)
      this.save();
  },

  render () {
    return (
      <input className={this.props.className}
             id={this.props.id}
             placeholder={this.props.placeholder}
             onBlur={this.save}
             onChange={this.handleChange}
             onKeyDown={this.handleKeyDown}
             value={this.state.value}
             autoFocus={true}
      />
    );
  },
});

module.exports = TodoTextInput;
