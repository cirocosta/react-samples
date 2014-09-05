/**
 * @jsx React.DOM
 */

var React = require('react');

var NavigationItem = React.createClass({
  handleClick: function (e) {
    this.props.onItemSelected(this.props.item);
  },

  render: function () {
    return (
      <li onClick={this.handleClick} className={this.props.selected ? "selected" : ""}>
        {this.props.item.data.display_name}
      </li>
    );
  }
});

module.exports = NavigationItem;
