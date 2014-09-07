/**
 * @jsx React.DOM
 */

'use strict';

/**
 * Formulário que permite inserção de conteúdo
 * no app. Observa o evento de 'change' em seu
 * Input e avisa a aplicação quando o usuário
 * submeter.
 */

var React = require('react');

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
        <input onChange={this.handleChange}
               type="text"
               placeholder="Text ... "
               value={this.state.text} />
        <input type="submit" value={"add #" + this.props.number} />
      </form>
    );
  }
});

module.exports = TodoForm;
