/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var SwapCheckbox = React.createClass({
  propTypes: {
    labelOn: React.PropTypes.string.isRequired,
    labelOff: React.PropTypes.string.isRequired
  },

  getInitialState () {
    return {
      isChecked: false
    };
  },

  handleChange () {
    this.setState({
      isChecked: !this.state.isChecked
    });
  },

  render () {
    return (
      <label>
        <input type="checkbox"
               checked={this.state.isChecked}
               onChange={this.handleChange} />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff }
      </label>
    );
  }
});

module.exports = SwapCheckbox;
