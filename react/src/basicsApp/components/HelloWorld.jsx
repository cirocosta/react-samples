/**
 * @jsx React.DOM
 */

var React = require('react');

// TODO make this data change (it was being
// rendered with setTimeout)
var HelloWorld = React.createClass({
  getInitialState: function () {
    return {
      currentTime: new Date().toTimeString()
    };
  },

  componentDidMount: function () {
    setInterval(function () {
      this.setState({
        currentTime: new Date().toTimeString()
      });
    }.bind(this), 2000);
  },

  render: function () {
    return (
      <p>
        Hello, <input type="text" placeholder="Your Name Here" />!
        It is {this.state.currentTime}
      </p>
    );
  }
});

module.exports = HelloWorld;
