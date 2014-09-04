/**
 * @jsx React.DOM
 */

var HelloWorld = React.createClass({
	render: function () {
		return (
			<p>
				Hello, <input type="text" placeholder="Your Name Here" />!
				Is is {this.props.data.toTimeString()}
			</p>
		);
	}
});

setInterval(function () {
	React.renderComponent(
		<HelloWorld data={new Date()} />,
		document.getElementById('example-time')
	);
}, 500);


module.exports = HelloWorld;
