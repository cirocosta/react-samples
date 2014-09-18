/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var PropertyValidationMixin = require('./PropertyValidationMixin.jsx');

var SwapCheckbox = React.createClass({
  init () {
    if (process.env.NODE_ENV !== 'developement')
      return this;

    this.mixins = [PropertyValidationMixin];

    this.propTypes = {
      labelOn: React.PropTypes.string.isRequired,
      labelOff: React.PropTypes.string.isRequired
    };

    return this;
  },

  propTypes: {
    labelOn: React.PropTypes.string.isRequired,
    // labelOff: React.PropTypes.string.isRequired   // will make the test fail
  },

  getInitialState () {
    return {
      isChecked: false
    };
  },

  // we culd keep with a notation like this, or
  // create a helper function ... i think the init
  // method is more intereseting, though, as we
  // are able to define more stuff under a certain
  // constraint.

  // mixins: (() => {
  //   return process.env.NODE_ENV === 'development' ?
  //     [PropertyValidationMixin] :
  //     [];
  // })(),

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
}.init());

module.exports = SwapCheckbox;
