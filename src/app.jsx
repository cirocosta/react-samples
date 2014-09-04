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
						<li><Link to="home">Home</Link> </li>
						<li><Link to="helloworld">Hello World</Link></li>
					</ul>
				</header>

				<this.props.activeRouteHandler />
			</div>
		);
	}
});

var router = (
	<Routes location="history">
		<Route name="home" path="/" handler={App}>
		</Route>
	</Routes>
);

React.renderComponent(
	routes,
	document.body
);
