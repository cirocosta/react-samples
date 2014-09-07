/**
 * @jsx React.DOM
 */

var React = require('react');
var HelloWorld = require('./components/HelloWorld.jsx');
var LikeButton = require('./components/LikeButton.jsx');
var TodoApp = require('./components/TodoApp.jsx');

var BasicsApp = React.createClass({
  render: function () {
    return (
      <div>
        <HelloWorld />
        <LikeButton />
        <TodoApp />
      </div>
    );
  }
});

module.exports = BasicsApp;

