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
		var text = this.state.liked ? 'like' : 'unlike';

		return (
			<p onClick={this.handleClick}>
				You {text} this. Click to toggle.
			</p>
		);
	}
});

module.exports = LikeButton;
