/**
 * @jsx React.DOM
 */

var React = require('react');

// TODO make this data change (it was being
// rendered with setTimeout)
var HelloWorld = React.createClass({
  render: function () {
    return (
      <p>
        Hello, <input type="text" placeholder="Your Name Here" />!
        Is is {new Date().toTimeString()}
      </p>
    );
  }
});

module.exports = HelloWorld;
