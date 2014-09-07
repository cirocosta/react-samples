'use strict';

jest.dontMock('../src/fetchuser');

describe('fetchUser', function() {
  it('should call into $.ajax w/ right params', function() {
    var $ = require('jquery');
    var fetchuser = require('../src/fetchuser');

    fetchuser(Function.prototype.bind());

    expect($.ajax).toBeCalledWith({
      type: 'GET',
      url: 'someurl',
      success: jasmine.any(Function)
    });
  });

  it('should call the callback when requests are finished', function() {
    var $ = require('jquery');
    var fetchuser = require('../src/fetchuser');
    var callback = jest.genMockFunction();

    fetchuser(callback);

    $.ajax.mock.calls[0][0].success({
      firstName: 'boddy',
      lastName: 'wow'
    });

    expect(callback.mock.calls[0][0]).toEqual({
      loggedIn: true,
      fullName: 'boddy wow'
    });
  });
});

