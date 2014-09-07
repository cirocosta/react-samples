/**
 * @jsx React.DOM
 */

var React = require('react');

var LikeButton = React.createClass({
	getInitialState: function () {
		return {liked: false};
	},

	handleClick: function (e) {
		this.setState({liked: !this.state.liked});
	},

	render: function () {
		var text = this.state.liked ? 'unlike' : 'like';

		return (
			<p onClick={this.handleClick}>
				{text}
			</p>
		);
	}
});

module.exports = LikeButton;
