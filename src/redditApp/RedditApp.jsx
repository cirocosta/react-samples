/**
 * @jsx React.DOM
 */

var React = require('react');
var Navigation = require('./components/Navigation.jsx');
var StoryList = require('./components/StoryList.jsx');

/**
 * ReditApp contains the toplevel stuff that the
 * Redit section of our examples needs.
 *
 * It is what is going to store all of the state
 * of the application and then pass it to its
 * children components as immutable props that
 * they can render.
 *
 * This component will also provide some sort of
 * navigation by registering a callback function
 * into Navigation, which gets adivised of click
 * events by registering a handler with the
 * NavigationItem component.
 */
var ReditApp = React.createClass({
  // The representation of ReditApp on its initial
  // state is pretty clear. There's no current
  // activeNavigationUrl (the user has not
  // selected anything yet), there's no
  // navigationItems (we didn't fetch it from the
  // server) and there are no storyItems (the user
  // didn't select a section that would provide
  // those story items).
  getInitialState: function () {
    return ({
      activeNavigationUrl: "",
      navigationItems: [],
      storyItems: [],
      title: "Please select a sub"
    });
  },

  // After the mounting of the component we are
  // ready to fetch some stuff (the user is now
  // seeing something) as the basic stuff is done.
  componentDidMount: function () {
    var scope = this;
    var cbname = "fn" + Date.now();
    var script = document.createElement("script");
    script.src = "http://www.reddit.com/reddits.json?jsonp=" + cbname;

    window[cbname] = function (jsonData) {
      scope.setState({
        navigationItems: jsonData.data.children
      });

      delete window[cbname];
    };

    document.head.appendChild(script);
  },

  // Here we declare a callback function to be
  // executed each time that a user selects an
  // item. This is going to be called by Navigation
  setSelectedItem: function (item) {
    var scope = this;
    var cbname = "fn" + Date.now();
    var script = document.createElement("script");

    script.src = "http://www.reddit.com/" +
                 item.data.url +
                 ".json?sort=top&t=month&jsonp=" +
                 cbname;

    window[cbname] = function (jsonData) {
      scope.setState({storyItems: jsonData.data.children});
    };

    document.head.appendChild(script);

    this.setState({
      activeNavigationUrl: item.data.url,
      title: item.data.display_name
    });
  },

  // here we set what will be the function to be
  // called to actually render our component. As
  // you can see we are nesting other components.
  render: function () {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Navigation activeUrl={this.state.activeNavigationUrl}
                    items={this.state.navigationItems}
                    itemSelected={this.setSelectedItem} />
        <StoryList items={this.state.storyItems} />
      </div>
    );
  }
});

module.exports = ReditApp;
