/**
 * @jsx React.DOM
 */

var React = require('react');
var NavigationItem = require('./NavigationItem.jsx');

var Navigation = React.createClass({
  setSelectedItem: function (item) {
    this.props.itemSelected(item);
  },

  render: function () {
    var scope = this;

    var items = this.props.items.map(function (item) {
      return (
        <NavigationItem key={item.data.id}
                        item={item}
                        itemSelected={scope.setSelectedItem}
                        selected={item.data.url === scope.props.activeUrl} />
      );
    });

    return (
      <div className="Navigation">
        <div className="header">Navigation</div>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
});

module.exports = Navigation;
