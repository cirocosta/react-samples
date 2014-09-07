/**
 * @jsx React.DOM
 */

var React = require('react');
var slice = Function.prototype.call.bind(Array.prototype.slice);

/**
 * Componente que representa uma Lista de Todos.
 * Permite que o usuário clique sobre um item e
 * então avisa ao App para deletar.
 */
var TodoList = React.createClass({

	handleClick: function (e) {
		if (!(e.target && e.target.nodeName === 'LI'))
			return;

		slice(e.target.parentNode.childNodes)
			.some((function (elem, i) {
				return elem === e.target
					? (this.props.onTodoDelete(i), true)
					: false;
			}).bind(this));
	},

	render: function () {
    var items = this.props.items.map(function (text, i) {
      return <li key={i}>{text}</li>
    });

		return (
      <ul onClick={this.handleClick}>
        {items}
      </ul>
    );
	}
});

module.exports = TodoList;
