/**
 * @jsx React.DOM
 */

'use strict';


jest.dontMock('../src/basicsApp/components/LikeButton.jsx');

describe('LikeButton', function() {
  var React;
  var TestUtils;

  beforeEach(function () {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
  });

  it('should be sane', function() {
    var LikeButton = require('../src/basicsApp/components/LikeButton.jsx');
    var likebutton = TestUtils.renderIntoDocument(
      <LikeButton />
    );

    expect(TestUtils.isCompositeComponent(likebutton)).toBe(true);
  });

  it('should initialize with \'like\' as text', function() {
    var LikeButton = require('../src/basicsApp/components/LikeButton.jsx');

    var likebutton = TestUtils.renderIntoDocument(
      <LikeButton />
    );
    var p = TestUtils.findRenderedDOMComponentWithTag(
      likebutton,
      'p'
    );

    expect(p.getDOMNode().textContent).toEqual('like');
  });

  it('should change text to \'unlike\' when clicked', function() {
    var LikeButton = require('../src/basicsApp/components/LikeButton.jsx');
    var likebutton = TestUtils.renderIntoDocument(
      <LikeButton />
    );
    var p = TestUtils.findRenderedDOMComponentWithTag(
      likebutton,
      'p'
    );

    TestUtils.Simulate.click(p);

    expect(p.getDOMNode().textContent).toEqual('unlike');
  });
});
