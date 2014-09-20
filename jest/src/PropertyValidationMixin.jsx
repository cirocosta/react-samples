'use strict';

require('harmony-reflect');

/**
 * Here we should not use 'harmony-reflect', but
 * es6 proxies directly from a harmony
 * implementation. Traceur-compiler /
 * react-tools es6 transform dont provide
 * proxies as the implementation would affect
 * other things performance.
 */

var PropertyValidationMixin = {
  getInitialState () {
    if (typeof Proxy === 'undefined')
      return (console.warn('Proxy not available'));

    var propTypes = this._descriptor.type.propTypes;
    var rawProps = this.props;
    var component = this;

    this.props = new Proxy(rawProps, {
      get: (obj, prop, receiver) => {
        if (prop === 'ref' || prop === 'key')
          throw new Error('Shouldn\'t be defining props for ' + prop);

        if (!(prop in propTypes))
          throw new Error(prop + ' not specified in propTypes.');

        return Reflect.get(obj, prop, receiver);
      }
    });

    return {};
  }
};

module.exports = PropertyValidationMixin;
