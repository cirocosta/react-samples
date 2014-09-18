/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var PropertyValidationMixin = require('./PropertyValidationMixin.jsx');

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

  mixins: (() => {
    return process.env.NODE_ENV === 'development' ?
      [PropertyValidationMixin] :
      [];
  })(),

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
