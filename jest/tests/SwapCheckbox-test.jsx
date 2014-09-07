/**
 * @jsx React.DOM
 */

'use strict';
jest.dontMock('../src/SwapCheckbox.jsx');

describe('SwapCheckbox', function() {
  it('should change the text after click', function() {
    var React = require('react/addons');
    var SwapCheckbox = require('../src/SwapCheckbox.jsx');
    var TestUtils = React.addons.TestUtils;

    var checkbox = TestUtils.renderIntoDocument(
      <SwapCheckbox labelOn="Ligado"
                    labelOff="Desligado" />
    );

    var label = TestUtils.findRenderedDOMComponentWithTag(
      checkbox,
      'label'
    );

    expect(label.getDOMNode().textContent).toEqual('Desligado');
  });
});
