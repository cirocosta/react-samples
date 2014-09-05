/**
 * @jsx React.DOM
 */

var React = require('react');
var HelloWorld = require('./components/HelloWorld.jsx');
var LikeButton = require('./components/LikeButton.jsx');
var TodoList = require('./components/TodoList.jsx');

var BasicsApp = React.createClass({
  render: function () {
    return (
      <div>
        <HelloWorld />
        <LikeButton />
        <TodoList />
      </div>
    );
  }
});

module.exports = BasicsApp;

