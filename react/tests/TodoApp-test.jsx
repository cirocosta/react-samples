/**
 * @jsx React.DOM
 */

'use strict';

jest.dontMock('../src/basicsApp/components/TodoApp.jsx');

describe('TodoApp', function() {
  var React;
  var TestUtils;
  var TodoApp;

  beforeEach(function () {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    TodoApp = require('../src/basicsApp/components/TodoApp.jsx');
  });

  it('should start with no to-dos', function() {
    var todoapp = TestUtils.renderIntoDocument(
      <TodoApp />
    );

    var ul = TestUtils.findRenderedDOMComponentWithTag(
      todoapp,
      'ul'
    );

    expect(ul.getDOMNode().children.length).toBe(0);
  });

  it('should add a todo properly', function() {
    var todoapp = TestUtils.renderIntoDocument(
      <TodoApp />
    );

    var ul = TestUtils.findRenderedDOMComponentWithTag(
      todoapp,
      'ul'
    );

    var form = TestUtils.findRenderedDOMComponentWithTag(
      todoapp,
      'form'
    );

    var input = form.getDOMNode().childNodes[0];

    TestUtils.Simulate.change(input, {target: {value: 'A' }});
    TestUtils.Simulate.change(input, {target: {value: 'AB' }});
    TestUtils.Simulate.change(input, {target: {value: 'ABC' }});

    TestUtils.Simulate.submit(form);

    expect(ul.getDOMNode().children.length)
      .toBeGreaterThan(0);
    expect(ul.getDOMNode().children[0].innerHTML)
      .toEqual('ABC');
  });

});
