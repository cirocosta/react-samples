/**
 * @jsx React.DOM
 */

// TODO(ciro) rewrite this in terms of only
// TodoList, and not TodoApp so that this keeps as
// a component only, not an App ;)

var React = require('React');

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

		var scope = this;

		slice(e.target.parentNode.childNodes)
			.some(function (elem, i) {
				return elem === e.target
					? (scope.props.onTodoDelete(i), true)
					: false;
			});
	},

	render: function () {
		var createItem = function (itemText, i) {
			return <li key={i}>{itemText}</li>
		};

		return <ul onClick={this.handleClick}>{this.props.items.map(createItem)}</ul>
	}
});


/**
 * Formulário que permite inserção de conteúdo
 * no app. Observa o evento de 'change' em seu
 * Input e avisa a aplicação quando o usuário
 * submeter.
 */
var TodoForm = React.createClass({
	getInitialState: function () {
		return {text: ''}
	},

	handleSubmit: function (e) {
		e.preventDefault();
		this.props.onTodoSubmit(this.state.text);
		this.setState({text: ''});
	},

	handleChange: function (e) {
		this.setState({text: e.target.value});
	},

	render: function () {
		return (
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.handleChange} type="text"
							 placeholder="Text ... "      value={this.state.text} />

				<input type="submit" value={"add #" + this.props.number} />
			</form>
		);
	}
});

/**
 * Aplicação em si. Mantém o estado mínimo
 * (ítems da lista).
 */
var TodoApp = React.createClass({
	getInitialState: function () {
		return {items: ["dahora"]};
	},

	handleTodoSubmit: function (todo) {
		this.setState({items: this.state.items.concat([todo])});
	},

	handleTodoDelete: function (index) {
		var newItems = slice(this.state.items);
		newItems.splice(index, 1);

		this.setState({items: newItems});
	},

	render: function () {
		return (
			<div>
				<h3>Todo List!</h3>
				<TodoList onTodoDelete={this.handleTodoDelete} items={this.state.items} />
				<TodoForm onTodoSubmit={this.handleTodoSubmit} number={this.state.items.length + 1}/>
			</div>
		);
	}
});

React.renderComponent(
	<TodoApp />,
	document.getElementById('example-todolist')
);

module.exports = TodoApp;
