/**
 * @jsx React.DOM
 */

var React = require('react')
  , Router = require('react-router')
  , Basics = require('./basicsApp/basicsApp.jsx')
  , RedditApp = require('./redditApp/RedditApp.jsx')

  , Route = Router.Route
  , Routes = Router.Routes
  , Link = Router.Link;


var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="basics">Basics</Link></li>
            <li><Link to="redditapp">RedditApp</Link></li>
          </ul>
        </header>

        <this.props.activeRouteHandler />
      </div>
    );
  }
});


var routes = (
  <Routes location="history">
    <Route name="home" path="/" handler={App}>
      <Route name="basics" handler={Basics}>
      </Route>
      <Route name="redditapp" handler={RedditApp}>
      </Route>
    </Route>
  </Routes>
);

React.renderComponent(
  routes,
  document.body
);
