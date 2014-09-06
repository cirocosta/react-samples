'use strict';

/**
 * Our first store. This is what is going to
 * hold the application state and logic. In
 * general Stores manage the state of many
 * objects, and not a particular instance of it.
 * It will manage app state for a DOMAIN (Todo
 * stuff) within the application.
 *
 * TodoStore will register itself with
 * AppDispatcher (which inherits from our base
 * Dispatcher) providing it with a callback,
 * which is going to receive action's painted
 * payload from the call of AppDispatcher's
 * `dispatch` method.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher')
  , EventEmitter = require('events').EventEmitter
  , TodoConstants = require('../constants/TodoConstants')
  , merge = require('react/lib/merge')

  , CHANGE_EVENT = 'change'
  // will persist our data while our application
  // lives. As it lives outside the class, but
  // within the closure of the module, it will
  // remain private.
  , _todos = {};

/**
 * Auxiliary Functions
 */

function create (text) {
  var id = Date.now();

  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

function destroy (id) {
  delete _todos[id];
}

/**
 * Definition of our Store. Notice that it
 * inherits from EventEmitter, which provides us
 * the basic functionality that we expect, i.e,
 * the possibility of emitting events and
 * letting others register with them.
 */
var TodoStore = merge(EventEmitter.prototype, {
  getAll () {
    return _todos;
  },

  emitChange () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener (cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  /**
   * The index of the Store's callback in the
   * Dispatcher registry. Here we are actually
   * registering the Store's callback function
   * with the Dispatcher and just storing the
   * index that the registry returns to us.
   *
   * Note that the callback receives a painted
   * payload, which comes from the action.
   * Within this callback is were we distinguish
   * between the types of action, do some
   * changes in the state of the application and
   * then finally emit the 'change' event for
   * those controller-views that are listening
   * to the 'change' event.
   */
  dispatcherIndex: AppDispatcher.register(payload => {
    var action = payload.action;
    var text;

    switch (action.actionType) {
      case TodoConstants.TODO_CREATE:
        text = action.text.trim();

        if (text) {
          create(text);
          TodoStore.emitChange();
        }

        break;

      case TodoConstants.TODO_DESTROY:
        destroy(action.id);
        TodoStore.emitChange();
        break;
    }

    // so that the promise is resolved, and not
    // rejected - as we expect :D
    return true;
  })
});

module.exports = TodoStore;
