/**
 * @jsx React.DOM
 */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var Link = Router.Link;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="helloworld">HelloWorld</Link></li>
          </ul>
        </header>

        <this.props.activeRouteHandler />
      </div>
    );
  }
});

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div><h1>HelloWorld!</h1></div>
    );
  }
});

var routes = (
  <Routes location="history">
    <Route name="home" path="/" handler={App}>
      <Route name="helloworld" handler={HelloWorld}>
      </Route>
    </Route>
  </Routes>
);

React.renderComponent(
  routes,
  document.body
);
