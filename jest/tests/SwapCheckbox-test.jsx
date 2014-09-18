/**
 * @jsx React.DOM
 */

'use strict';
jest.dontMock('../src/SwapCheckbox.jsx')

var React;
var SwapCheckbox;
var TestUtils;

describe('SwapCheckbox', () => {
  beforeEach(() => {
    React = require('react/addons');
    SwapCheckbox = require('../src/SwapCheckbox.jsx');
    TestUtils = React.addons.TestUtils;
  });

  it('should have implemented all propTypes',() => {
    var instance = TestUtils.renderIntoDocument(
      <SwapCheckbox labelOn="On"
                    labelOff="Off" />
    );

    var propTypes = Object.keys(instance.constructor.propTypes);
    var not = Object.keys(instance.props).filter((elem) =>
      !~propTypes.indexOf(elem));

    expect(not.length).toEqual(0);
  });

  it('should change the text after click', () => {
    var checkbox = TestUtils.renderIntoDocument(
      <SwapCheckbox labelOn="On"
                    labelOff="Off" />
    );

    var label = TestUtils.findRenderedDOMComponentWithTag(
      checkbox,
      'label'
    );

    expect(label.getDOMNode().textContent).toEqual('Off');
  });
});
