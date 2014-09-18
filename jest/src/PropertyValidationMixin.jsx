'use strict';

require('harmony-reflect');

/**
 * Here we should not use 'harmony-reflect', but
 * es6 proxies directly from a harmony
 * implementation. Traceur-compiler /
 * react-tools es6 transform dont provide
 * proxies as the implementation would affect
 * other things performance.
 *
 * Another point is that in the 'get' method we
 * should not be returning undefined to indicate
 * error, but a process.exit(1) to terminate
 * after directing the message do stdout with
 * console.error. Jest seems to be facing an
 * issue with process.exit() so i'm currently
 * returning undefined as this will make the
 * test fail and, by consequence, notify us that
 * there is a propType that wasn't defined.
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
          return (console.error('Shouldn\'t be defining props for ', prop),
                  undefined);

        if (!(prop in propTypes))
          return (console.error(prop, ' not specified in propTypes.'),
                  undefined);

        return Reflect.get(obj, prop, receiver);
      }
    });

    return {};
  }
};

module.exports = PropertyValidationMixin;
