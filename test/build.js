/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * First, we call elt() that setups all the components.
	 * At this point, the component hierarchy has been established,
	 * and right after that, middlewares and components can actually
	 * start to talk to each other. However, the DOM has not been initialized at all.
	 * This is when view() is called, to ready the component hierachy.
	 * Also, this is when parent is set up.
	 *
	 * Then we want to mount the component somewhere. This is where the nodes
	 * are created, and all the associations with the observables are done.
	 * When link() is done executing (and mount()), the DOM is in place with all events
	 * at the ready.
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _eltObservable = __webpack_require__(1);
	
	var _eltComponent = __webpack_require__(2);
	
	var _eltMiddleware = __webpack_require__(4);
	
	window.assert = function (b) {
	  if (!b) console.error(new Error('assert failed'));
	};
	
	var It = (function (_Component) {
	  _inherits(It, _Component);
	
	  function It() {
	    _classCallCheck(this, It);
	
	    _get(Object.getPrototypeOf(It.prototype), 'constructor', this).apply(this, arguments);
	
	    this.props = ['obs', 'type'];
	  }
	
	  _createClass(It, [{
	    key: 'view',
	    value: function view(data, content) {
	      if (!data.obs) data.obs = (0, _eltObservable.o)(null);
	      data.type = data.type || 'text';
	
	      return (0, _eltComponent.elt)(
	        'li',
	        null,
	        (0, _eltComponent.elt)(
	          'span',
	          { 'class': 'title' },
	          data.type || 'text'
	        ),
	        ' ',
	        (0, _eltComponent.elt)(
	          'code',
	          { 'class': 'result' },
	          data.obs
	        ),
	        content.length ? content : (0, _eltComponent.elt)('input', { type: data.type, $$: (0, _eltMiddleware.Bind)(data.obs) }),
	        (0, _eltComponent.elt)(
	          'a',
	          { href: 'javascript://', $$: (0, _eltMiddleware.Click)(this.bye.bind(this)) },
	          'X'
	        )
	      );
	    }
	  }, {
	    key: 'bye',
	    value: function bye() {
	      console.log('????');
	      this.unmount();
	    }
	  }]);
	
	  return It;
	})(_eltComponent.Component);
	
	var MyApp = (function (_Component2) {
	  _inherits(MyApp, _Component2);
	
	  function MyApp() {
	    _classCallCheck(this, MyApp);
	
	    _get(Object.getPrototypeOf(MyApp.prototype), 'constructor', this).apply(this, arguments);
	
	    this.data_defaults = {
	      txt: 'some text.',
	      pass: 'hunter2',
	      obj: { a: 1, b: 2 },
	      // obs: o({a: 5, b: 6}),
	      val: 200,
	      bool: true,
	      radio: 'one',
	      search: 'search...',
	      number: 4,
	      date: '2015-10-21',
	      month: '2015-10',
	      week: '2015-W24',
	      time: '12:23',
	      datetime_local: '2015-10-06T12:23',
	      tel: '+33652738543',
	      email: 'admin@domain.com',
	      color: '#f45947',
	      array: ['a', 'b', 'c']
	    };
	    this.props = ['txt'];
	  }
	
	  _createClass(MyApp, [{
	    key: 'view',
	
	    // Il faudra probablement rajouter un ', content' en argument et lui donner la liste des children.
	    // NOTE : il faudra donc revoir la mécanique d'appendChild et d'insertion des nodes dans le DOM.
	    value: function view(data, content) {
	
	      return (0, _eltComponent.elt)(
	        'div',
	        null,
	        (0, _eltComponent.elt)(
	          'h2',
	          null,
	          'HTML5 Input Tests'
	        ),
	        (0, _eltComponent.elt)(
	          'ul',
	          null,
	          (0, _eltComponent.elt)(It, { type: 'text', obs: data.txt }),
	          (0, _eltComponent.elt)(It, { type: 'password', obs: data.pass }),
	          (0, _eltComponent.elt)(It, { type: 'checkbox', obs: data.bool }),
	          (0, _eltComponent.elt)(It, { type: 'search', obs: data.search }),
	          (0, _eltComponent.elt)(It, { type: 'email', obs: data.email }),
	          (0, _eltComponent.elt)(It, { type: 'number', obs: data.number }),
	          (0, _eltComponent.elt)(It, { type: 'tel', obs: data.tel }),
	          (0, _eltComponent.elt)(
	            It,
	            { type: 'radio', obs: data.radio },
	            (0, _eltComponent.elt)(
	              'label',
	              null,
	              (0, _eltComponent.elt)('input', { type: 'radio', value: 'one', $$: (0, _eltMiddleware.Bind)(data.radio) }),
	              'One'
	            ),
	            (0, _eltComponent.elt)(
	              'label',
	              null,
	              (0, _eltComponent.elt)('input', { type: 'radio', value: 'two', $$: (0, _eltMiddleware.Bind)(data.radio) }),
	              'Two'
	            )
	          ),
	          (0, _eltComponent.elt)(It, { type: 'color', obs: data.color }),
	          (0, _eltComponent.elt)(It, { type: 'range', obs: data.val }),
	          (0, _eltComponent.elt)(It, { type: 'date', obs: data.date }),
	          (0, _eltComponent.elt)(It, { type: 'month', obs: data.month }),
	          (0, _eltComponent.elt)(It, { type: 'week', obs: data.week }),
	          (0, _eltComponent.elt)(It, { type: 'time', obs: data.time }),
	          (0, _eltComponent.elt)(It, { type: 'datetime-local', obs: data.datetime_local })
	        ),
	        (0, _eltComponent.elt)(
	          'h2',
	          null,
	          'Some Random Listeners'
	        ),
	        (0, _eltComponent.elt)(
	          'span',
	          { 'class': 'pouet' },
	          false,
	          ' ',
	          new Date()
	        ),
	        ' ',
	        (0, _eltComponent.elt)(
	          'button',
	          { $$: (0, _eltMiddleware.Click)(this.test.bind(this)) },
	          'Click me !'
	        ),
	        (0, _eltComponent.elt)('br', null),
	        (0, _eltComponent.elt)(
	          'span',
	          null,
	          data.obj
	        ),
	        (0, _eltComponent.elt)('br', null),
	        (0, _eltComponent.elt)(
	          'span',
	          null,
	          data.txt,
	          ' !!!!'
	        ),
	        (0, _eltComponent.elt)('br', null),
	        (0, _eltComponent.elt)(
	          'span',
	          null,
	          data.bool,
	          ' !!!!'
	        ),
	        (0, _eltComponent.elt)('br', null),
	        (0, _eltComponent.elt)(
	          'h2',
	          null,
	          'Array Test'
	        ),
	        (0, _eltComponent.elt)(_eltComponent.Repeat, { data: data.array, view: function (data) {
	            return (0, _eltComponent.elt)(
	              'span',
	              null,
	              data.$index,
	              ' : ',
	              data.$value,
	              !data.$last ? ', ' : ''
	            );
	          } })
	      );
	    }
	  }, {
	    key: 'test',
	    value: function test(event) {
	      this.data.txt = 'was clicked';
	
	      var arr = this.data.array.get();
	      arr = arr.concat([String.fromCharCode(arr[0].charCodeAt(0) + arr.length)]);
	      this.data.array = arr;
	    }
	  }]);
	
	  return MyApp;
	})(_eltComponent.Component);
	
	(0, _eltComponent.elt)(MyApp, { txt: 'pouet !' }).mount(document.body);
	
	// NOTE Array peut recevoir
	//    - un iterable, auquel cas la génération ne se fait qu'une fois sans observation.
	//      un .map serait mieux si on peut rajouter des arrays dans les children comme des boeufs.
	//    - un observable avec juste une valeur iterable, au quel cas
	//      on tente de faire du tracking à la track-by.
	//    - un array-observable fait pour overrider les push(), length et compagnie, et qui dissuade
	//      d'utiliser l'accesseur [].

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.oo = oo;
	exports.o = o;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var OBJ_PROTO = Object.getPrototypeOf({});
	
	var Observable = (function () {
	  function Observable(value) {
	    _classCallCheck(this, Observable);
	
	    this._listeners = [];
	    this._destroyed = false;
	    this._waiting_promise = null;
	
	    assert(arguments.length > 0); // an observable *must* have a value
	    this.set(value);
	  }
	
	  /**
	   * Get the value of the observable.
	   */
	
	  Observable.prototype.get = function get() {
	    return this._value;
	  };
	
	  Observable.prototype.set = function set(value) {
	    var _this = this;
	
	    // FIXME need to check if the value is a promise or an observable.
	
	    if (value instanceof Observable) value = value.get();
	
	    if (value && value.then) {
	      // This is a promise, so we're going to bind the set on its then.
	      value.then(function (val) {
	        return _this.set(val);
	      });
	      return this;
	    }
	
	    // No need to change.
	    if (this._value === value) return;
	
	    this._value = value;
	
	    // No need to trigger if no one is listening to us.
	    if (this._listeners.length === 0) return;
	
	    for (var _iterator = this._listeners, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	      var _ref;
	
	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }
	
	      var l = _ref;
	
	      l(value);
	    }
	
	    return this;
	  };
	
	  Observable.prototype.onchange = function onchange(fn) {
	    var _this2 = this;
	
	    // listeners are always given the current value if it is available upon subscribing.
	    if (this.hasOwnProperty('_value')) fn(this._value);
	
	    if (this._destroyed) return;
	
	    this._listeners.push(fn);
	
	    return function () {
	      var idx = _this2._listeners.indexOf(fn);
	      _this2._listeners.splice(idx, 1);
	    };
	  };
	
	  // This Observable will never update anyone again.
	
	  Observable.prototype.destroy = function destroy() {
	    this._destroyed = true;
	    this._listeners = [];
	  };
	
	  /**
	   * Optionally two-way transformer.
	   * @param  {function} fnset The function that transforms the value.
	   * @param  {function} fnget The function that gets the value back into the current observable.
	   * @return {[type]}       [description]
	   */
	
	  Observable.prototype.transform = function transform(fnset, fnget) {
	    var _this3 = this;
	
	    var o = new Observable(fnset(this._value));
	
	    var unset = this.onchange(function (val) {
	      return o.set(fn(val));
	    });
	    var unset_get = null;
	    if (fnget) {
	      unset_get = o.onchange(function (val) {
	        return _this3.set(fnget(val));
	      });
	    }
	
	    // Unset both of them.
	    return function () {
	      unset();unset_get && unset_get();
	    };
	  };
	
	  return Observable;
	})();
	
	exports.Observable = Observable;
	
	var ArrayObservable = (function () {
	  function ArrayObservable(a) {
	    _classCallCheck(this, ArrayObservable);
	
	    this.length = new Observable();
	
	    this.length = new Observable(0);
	    this.update(a);
	  }
	
	  /**
	   * Update this array with another array.
	   * Performs optimisation ?
	   * @param  {Array} arr The array with the newer values.
	   */
	
	  ArrayObservable.prototype.update = function update(arr) {
	    assert(a instanceof Array);
	
	    // the array hasn't changed.
	    if (arr === this._value) ;
	
	    // empty the array ?
	    for (var _iterator2 = arr, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	      var _ref2;
	
	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }
	
	      var _a = _ref2;
	    }
	
	    // update the length.
	    this.length.set(this._value.length);
	  };
	
	  // Get observable on position i
	  // or set the object at the given position.
	
	  ArrayObservable.prototype.at = function at(i, v) {};
	
	  ArrayObservable.prototype.destroy = function destroy() {
	    for (var _iterator3 = this.items, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	      var _ref3;
	
	      if (_isArray3) {
	        if (_i3 >= _iterator3.length) break;
	        _ref3 = _iterator3[_i3++];
	      } else {
	        _i3 = _iterator3.next();
	        if (_i3.done) break;
	        _ref3 = _i3.value;
	      }
	
	      var i = _ref3;
	
	      i.destroy();
	    }
	  };
	
	  return ArrayObservable;
	})();
	
	exports.ArrayObservable = ArrayObservable;
	
	var ObservableObject = (function () {
	  function ObservableObject(o) {
	    _classCallCheck(this, ObservableObject);
	
	    for (var _iterator4 = Object.getOwnPropertyNames(o), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
	      var _ref4;
	
	      if (_isArray4) {
	        if (_i4 >= _iterator4.length) break;
	        _ref4 = _iterator4[_i4++];
	      } else {
	        _i4 = _iterator4.next();
	        if (_i4.done) break;
	        _ref4 = _i4.value;
	      }
	
	      var _name = _ref4;
	
	      // For now, we don't check for recursion.
	      this.define(_name, o[_name]);
	    }
	  }
	
	  ObservableObject.prototype.define = function define(name, value) {
	    var o = value instanceof Observable ? value : new Observable(value);
	    Object.defineProperty(this, name, {
	      enumerable: true,
	      set: function set(value) {
	        return o.set(value);
	      },
	      get: function get() {
	        return o;
	      }
	    });
	  };
	
	  /**
	   * Bulk update of a datascope.
	   */
	
	  ObservableObject.prototype.set = function set(o) {
	    for (var _name2 in o) {
	      if (_name2 in this) this.define(_name2, o[_name2]);else this[_name2] = o[_name2];
	    }
	  };
	
	  ObservableObject.prototype.get = function get(o) {
	    // rebuild this object and return it.
	  };
	
	  return ObservableObject;
	})();
	
	exports.ObservableObject = ObservableObject;
	
	function oo(obj) {
	  return new ObservableObject(obj);
	}
	
	function o() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var l = args.length;
	  var fn = args[args.length - 1];
	
	  // Just creating an observable.
	  if (l === 1) {
	    var _a2 = args[0];
	    if (_a2 && Object.getPrototypeOf(_a2) === OBJ_PROTO) return new ObservableObject(_a2);
	    return new Observable(_a2);
	  }
	
	  var deps = [];
	  var res = new Observable();
	
	  var not_resolved = 0;
	
	  // We only get the observable objects.
	  var observables = Array.prototype.slice.call(arguments, 0, arguments.length - 2);
	  observables.forEach(function (o, i) {
	    resolved = false;
	    deps.push(null);
	
	    o.onchange(function (v) {
	      if (!resolved) not_resolved -= 1;
	      resolved = true;
	      deps[i] = v;
	      if (not_resolved === 0) res.set(fn.apply(null, deps));
	    });
	  });
	
	  return res;
	}
	
	/**
	 * Get the current value of the observable, or the value itself if the
	 * provided parameter was not an observable.
	 * @param  {[type]} v [description]
	 * @return {[type]}   [description]
	 */
	o.get = function get(v) {
	  if (v instanceof Observable) return v.get();
	  return v;
	};
	
	/**
	 * Setup an onchange event on the observable, or just call the
	 * onchange value once if the provided o is not an observable.
	 * @param  {[type]}   o  [description]
	 * @param  {Function} fn [description]
	 * @return {[type]}      [description]
	 */
	o.onchange = function onchange(o, fn) {
	  if (o instanceof Observable) return o.onchange(fn);
	  // the object is not observable, so the onchange value is immediately called.
	  fn(o);
	  // return a function that does nothing, since nothing is being registered.
	  return function () {};
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lifecycle of components.
	 *
	 * 1. elt instanciates them, and by doing so sets up the links between them.
	 * 		Also, the middleware are initialized.
	 *
	 * 2. At some point, a component may be mounted onto a DOM node.
	 * 		This triggers the creation of all DOM nodes that are to be created.
	 *
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports.elt = elt;
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _observable = __webpack_require__(1);
	
	var _events = __webpack_require__(3);
	
	function forceString(val) {
	  if (val === undefined || val === null) val = '';else if (typeof val === 'object') val = JSON.stringify(val);
	  return val.toString();
	}
	
	var BaseComponent = (function () {
	  function BaseComponent() {
	    var _this = this;
	
	    var attrs = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var children = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	    _classCallCheck(this, BaseComponent);
	
	    this._parent = null;
	    this.node = null;
	    this.middleware = [];
	    this.onbind = (0, _events.Event)();
	    this.onunbind = (0, _events.Event)();
	    this.onmount = (0, _events.Event)();
	    this.onunmount = (0, _events.Event)();
	
	    attrs = attrs || {};
	
	    // Handle middleware.
	    if (attrs.$$) {
	      var middle = attrs.$$;
	      delete attrs.$$;
	      this.middleware = (middle instanceof Array ? middle : [middle]).map(function (mc) {
	        return mc(_this);
	      }).filter(function (e) {
	        return e != null;
	      });
	    }
	
	    this.attrs = attrs;
	    this.children = children;
	  }
	
	  /**
	   *
	   */
	
	  BaseComponent.prototype.mount = function mount(domnode, before) {
	    // by default, we do nothing with the DOM.
	    this.compile();
	  };
	
	  BaseComponent.prototype.unbind = function unbind() {
	    this.onunbind.emit(this);
	    this.onunbind.removeListeners();
	  };
	
	  BaseComponent.prototype.unmount = function unmount() {
	    this.unbind();
	    this.onunmount.emit(this);
	    this.onunmount.removeListeners();
	    this.node = null;
	  };
	
	  _createClass(BaseComponent, [{
	    key: 'parent',
	    get: function get() {
	      return this._parent;
	    },
	    set: function set(p) {
	      assert(!this._parent, 'a component can only have one parent');
	
	      this._parent = p;
	      this._parent.onunbind(this.unbind.bind(this));
	      this._parent.onunmount(this.unmount.bind(this));
	    }
	  }]);
	
	  return BaseComponent;
	})();
	
	exports.BaseComponent = BaseComponent;
	
	var HtmlComponent = (function (_BaseComponent) {
	  _inherits(HtmlComponent, _BaseComponent);
	
	  function HtmlComponent(elt) {
	    var attrs = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var children = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	
	    _classCallCheck(this, HtmlComponent);
	
	    _BaseComponent.call(this, attrs, children);
	
	    assert('string' === typeof elt);
	    this.elt = elt;
	
	    // We establish the hierarchy here.
	    for (var _iterator = this.children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	      var _ref;
	
	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }
	
	      var c = _ref;
	
	      if (c instanceof BaseComponent) c.parent = this;
	    }
	  }
	
	  /**
	   * A Component is actually a special kind of component, as it holds no elements of its own.
	   * Instead, it relies on the fact that /at some point/, there will be an HtmlComponent to
	   * render things on the DOM.
	   *
	   * As such, it can only have *one* child.
	   */
	
	  HtmlComponent.prototype.toString = function toString() {
	    return '<' + this.elt + '>';
	  };
	
	  /**
	   * Create the html node.
	   */
	
	  HtmlComponent.prototype.compile = function compile() {
	    var _this2 = this;
	
	    // Create the DOM node that will be represented by this element.
	    var e = document.createElement(this.elt);
	
	    // Set up its attribute, especially if they're observable.
	
	    var _loop = function (attribute_name) {
	      if (attribute_name === '$$') return 'continue';
	
	      var att = _this2.attrs[attribute_name];
	
	      if (att instanceof _observable.Observable) {
	        // FIXME need to transform val in case it was an object or something that
	        // isn't a string.
	        _this2.onunbind(att.onchange(function (val) {
	          return e.setAttribute(attribute_name, forceString(val));
	        }));
	      } else {
	        e.setAttribute(attribute_name, forceString(att));
	      }
	    };
	
	    for (var attribute_name in this.attrs) {
	      var _ret = _loop(attribute_name);
	
	      if (_ret === 'continue') continue;
	    }
	
	    this.node = e;
	
	    for (var _iterator2 = this.children, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	      var _ref2;
	
	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }
	
	      var c = _ref2;
	
	      this.append(c);
	    }
	
	    this.onbind.emit(this);
	  };
	
	  HtmlComponent.prototype.mount = function mount(parent, before) {
	    this.compile();
	    parent.insertBefore(this.node, before);
	  };
	
	  HtmlComponent.prototype.unmount = function unmount() {
	    // remove from the parent DOM node if it is mounted
	    if (!this.node.parentNode) throw new Error('this node was not mounted');
	    this.node.parentNode.removeChild(this.node);
	
	    _BaseComponent.prototype.unmount.call(this);
	  };
	
	  /**
	   *
	   * This method is bound to
	   * @param  {String|Number|Boolean|Node|Component} child
	   *         The child we want to add to the current component.
	   */
	
	  HtmlComponent.prototype.append = function append(child) {
	    var _this3 = this;
	
	    // content is a Node.
	    var node = this.node;
	
	    if (Array.isArray(child)) {
	
	      for (var _iterator3 = child, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	        var _ref3;
	
	        if (_isArray3) {
	          if (_i3 >= _iterator3.length) break;
	          _ref3 = _iterator3[_i3++];
	        } else {
	          _i3 = _iterator3.next();
	          if (_i3.done) break;
	          _ref3 = _i3.value;
	        }
	
	        var c = _ref3;
	
	        this.append(c);
	      }
	    } else if (child instanceof Node) {
	
	      node.appendChild(child);
	    } else if (child instanceof BaseComponent) {
	
	      child.mount(this.node, null);
	      // if (child.node) node.appendChild(child.node);
	      child.onunmount(this.removeChild.bind(this, child));
	    } else {
	      (function () {
	        // If the node is nothing mountable, then we shall try to render it
	        // on a text node.
	
	        var txt = document.createTextNode('');
	
	        // We use o.onchange to handle both observable and regular values.
	        if (child instanceof _observable.Observable) _this3.onunbind(child.onchange(function (val) {
	          txt.textContent = forceString(val);
	        }));else txt.textContent = forceString(child);
	
	        node.appendChild(txt);
	      })();
	    }
	  };
	
	  HtmlComponent.prototype.removeChild = function removeChild(child) {
	    var idx = this.children.indexOf(child);
	    if (idx > -1) {
	      this.children.splice(idx, 1);
	    }
	  };
	
	  return HtmlComponent;
	})(BaseComponent);
	
	exports.HtmlComponent = HtmlComponent;
	
	var Component = (function (_BaseComponent2) {
	  _inherits(Component, _BaseComponent2);
	
	  function Component() {
	    _classCallCheck(this, Component);
	
	    _BaseComponent2.apply(this, arguments);
	
	    this.props = [];
	    this.data_defaults = {};
	    this.child = null;
	  }
	
	  /**
	   * 	A repeater.
	   *
	   * 	By default, it will simply compile the provided views with custom data.
	   * 	If the array changes and is a simple observable, then all previously
	   * 	created elements are destroyed and are recreated on the fly.
	   *
	   * 	If a track-by was specified, then previously created elements are kept
	   * 	and their data just updated with the array value, if it was observable.
	   * 	Otherwise they're just kept but basically nothing changes.
	   *
	   * 	If the provided data is an object, then it automatically has a track-by.
	   *
	   * 	It has various strategies :
	   * 		- track-by
	   */
	
	  Component.prototype.compile = function compile() {
	
	    this.data = new _observable.ObservableObject(this.data_defaults);
	
	    // FIXME class, id, tabindex and style should be forwarded to the next component, until
	    // it reaches an HTML component where they can at last be applied.
	    for (var _iterator4 = this.props, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
	      var _ref4;
	
	      if (_isArray4) {
	        if (_i4 >= _iterator4.length) break;
	        _ref4 = _iterator4[_i4++];
	      } else {
	        _i4 = _iterator4.next();
	        if (_i4.done) break;
	        _ref4 = _i4.value;
	      }
	
	      var p = _ref4;
	
	      if (p in this.attrs) {
	        this.data[p] = this.attrs[p];
	      }
	    }
	
	    this.child = this.view(this.data, this.children);
	
	    if (this.child) {
	      this.child.onunbind(this.unbind.bind(this));
	      this.child.onunmount(this.unmount.bind(this));
	      this.children = null;
	      // if (this.child) this.child.compile(); // Need to create everything in the children, since they're about to be mounted as well.
	    }
	
	    this.onbind.emit(this);
	  };
	
	  Component.prototype.mount = function mount(node, before) {
	    this.compile();
	
	    if (this.child) {
	      this.child.mount(node, before);
	      this.node = this.child.node;
	
	      // We leave a comment to identify the controller in the DOM for debugging.
	      // NOTE maybe should guard this statement inside some debug instruction.
	      var cpts = this.node.getAttribute('elt');
	      this.node.setAttribute('elt', this.constructor.name + (cpts ? ', ' + cpts : ''));
	    }
	
	    this.onmount.emit(this);
	  };
	
	  Component.prototype.view = function view() {
	    // A component may not have a view, as it just may be talking to a parent
	    // component.
	    return null;
	  };
	
	  Component.prototype.toString = function toString() {
	    return this.constructor.name;
	  };
	
	  Component.prototype.unmount = function unmount() {
	    _BaseComponent2.prototype.unmount.call(this);
	    this.child.unmount();
	  };
	
	  return Component;
	})(BaseComponent);
	
	exports.Component = Component;
	
	var Repeat = (function (_BaseComponent3) {
	  _inherits(Repeat, _BaseComponent3);
	
	  function Repeat() {
	    _classCallCheck(this, Repeat);
	
	    _BaseComponent3.apply(this, arguments);
	  }
	
	  /**
	   *
	   * NOTE During the element instanciation, it is expected
	   * 		that the children are already instanciated components.
	   *
	   * @param  {Component|String} elt
	   *         A Component or the name of the html element to create.
	   * @param  {Object} attrs
	   *         The attributes that go onto the node. They can hold Observable
	   *         objects.
	   * @param  {Component|Node|Any} ...children
	   *         List of children to append to this component.
	   * @return {Component}
	   *         The resulting instanciated component, with a node property
	   *         ready to be inserted into the DOM.
	   */
	
	  Repeat.prototype.compile = function compile() {
	
	    if (this.children) {
	      // maybe throw an error, or append their result before repeating anything ?
	      // NOTE should probably throw, as it's not its intended use.
	    }
	
	    this.watched_children = [];
	
	    this.node_start = document.createComment('Repeat');
	    this.node_end = document.createComment('/Repeat');
	  };
	
	  Repeat.prototype.redraw = function redraw(arr) {
	
	    var parent = this.node_start.parentNode;
	    var iter = this.node_start.nextSibling;
	    var end = this.node_end;
	    var view = this.attrs.view;
	    var len = arr.length;
	    var trackby = this.attrs['track-by'];
	    var watched = [];
	
	    for (var _iterator5 = this.watched_children, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
	      var _ref5;
	
	      if (_isArray5) {
	        if (_i5 >= _iterator5.length) break;
	        _ref5 = _iterator5[_i5++];
	      } else {
	        _i5 = _iterator5.next();
	        if (_i5.done) break;
	        _ref5 = _i5.value;
	      }
	
	      var e = _ref5;
	
	      // FIXME track-by.
	      e.unmount();
	    }
	
	    // Remove all elements.
	    // NOTE should add a track-by 'round here.
	    // while (iter !== end) {
	    //   // FIXME should unmount children !!!!
	    //   let next = iter.nextSibling;
	    //   parent.removeChild(iter);
	    //   iter = next;
	    // }
	
	    for (var i = 0; i < len; i++) {
	      var e = view({
	        $index0: i,
	        $index: i + 1,
	        $first: i === 0,
	        $last: i === len - 1,
	        $value: arr[i]
	      });
	
	      // Whatever happens, the view *must* give us some HTML components.
	      assert(e instanceof BaseComponent);
	
	      watched.push(e);
	      e.mount(parent, end);
	    }
	
	    this.watched_children = watched;
	  };
	
	  Repeat.prototype.mount = function mount(parent, before) {
	    this.compile();
	    parent.insertBefore(this.node_start, before || null);
	    parent.insertBefore(this.node_end, before || null);
	    // Generate on array changes.
	    _observable.o.onchange(this.attrs.data, this.redraw.bind(this));
	
	    // super(parent, before);
	  };
	
	  return Repeat;
	})(BaseComponent);
	
	exports.Repeat = Repeat;
	
	function elt(elt, attrs) {
	  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    children[_key - 2] = arguments[_key];
	  }
	
	  // assert(elt instanceof Component || typeof elt === 'string');
	
	  if (typeof elt === 'string') {
	    // Create a simple Html node.
	    elt = new HtmlComponent(elt, attrs, children);
	  } else if (elt instanceof Function) {
	    // instanceof Function because elt is a constructor at this stage, not
	    // an actual instance of a component.
	
	    // Create a component, as a constructor was given to us as first argument.
	    elt = new elt(attrs, children);
	  } else {}
	  // FIXME should trigger some kind of error here.
	
	  // for (let c of children) {
	  //   if (typeof c === 'undefined') continue;
	  //   elt.appendChild(c);
	  // }
	
	  // By this point, elt.node is ready for insertion into the DOM.
	  return elt;
	}
	
	// Called whenever the DOM has finished being created and is ready
	// to have event listeners set up, for instance.

	// Called whenever a component was mounted to another (or generally to
	// the DOM).

	// List of properties set in the attributes that will be pulled into
	// data

	// The data spec for this component. Note that it can be overriden
	// (although rarely, usually by Repeat)


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Very lightweight event.
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Event = Event;
	
	function Event() {
	  var listeners = [];
	
	  function E(fn) {
	    listeners.push(fn);
	    return function unregister() {
	      var idx = listeners.indexOf(fn);
	      if (idx > -1) listeners.splice(idx, 1);
	    };
	  }
	
	  E.emit = function emit() {
	    for (var _iterator = listeners, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	      var _ref;
	
	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }
	
	      var l = _ref;
	
	      l.apply(null, arguments);
	    }
	  };
	
	  E.removeListeners = function removeListeners() {
	    // this is to avoid memory leaks.
	    listeners = [];
	  };
	
	  return E;
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Core middleware for el.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Middleware = (function () {
	  function Middleware(cmp) {
	    _classCallCheck(this, Middleware);
	
	    this.component = null;
	
	    this.component = cmp;
	  }
	
	  Middleware.prototype.view = function view() {};
	
	  Middleware.prototype.link = function link() {};
	
	  return Middleware;
	})();
	
	exports.Middleware = Middleware;
	
	exports.Click = __webpack_require__(5);
	exports.Bind = __webpack_require__(6);
	exports.If = __webpack_require__(7);
	exports.Repeat = __webpack_require__(8);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _middleware = __webpack_require__(4);
	
	function Click(cbk) {
	
	  return function (component) {
	
	    component.onbind(function (cpt) {
	      // FIXME should do more processing.
	      // also should set up touch events.
	      cpt.node.addEventListener('click', cbk);
	    });
	
	    return null; // there will be no controller for this middleware.
	  };
	}
	
	module.exports = Click;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _middleware = __webpack_require__(4);
	
	var _observable = __webpack_require__(1);
	
	function Bind(observable, opts) {
	  if (!observable) return;
	
	  return function (component) {
	    return new BindMiddleware(component, observable, opts);
	  };
	};
	
	var BindMiddleware = (function (_Middleware) {
	  _inherits(BindMiddleware, _Middleware);
	
	  function BindMiddleware(component, observable, opts) {
	    _classCallCheck(this, BindMiddleware);
	
	    _Middleware.call(this, component);
	
	    this.$creator = Bind;
	    assert(observable instanceof _observable.Observable);
	
	    this.observable = observable;
	    this.opts = opts;
	
	    component.onbind(this.bind.bind(this));
	  }
	
	  BindMiddleware.prototype.bind = function bind() {
	
	    // We're calling bind on a classic HTML node.
	    var observable = this.observable;
	    var opts = this.opts;
	    var cpt = this.component;
	    var node = cpt.node;
	    var tag = node.tagName.toLowerCase();
	
	    // FIXME need to check if we're in editing mode of an HTML node (usually by checking its attributes)
	
	    if (tag === 'input') {
	
	      var cbk = function cbk(evt) {
	        var val = node.value;
	        // console.log(val);
	        observable.set(val);
	      };
	      var type = node.type.toLowerCase() || 'text';
	
	      switch (type) {
	        case 'color':
	        case 'range':
	        case 'date':
	        case 'datetime':
	        case 'week':
	        case 'month':
	        case 'datetime-local':
	          cpt.onunbind(observable.onchange(function (val) {
	            return node.value = val;
	          }));
	          node.addEventListener('input', cbk);
	          break;
	        case 'radio':
	          cpt.onunbind(observable.onchange(function (val) {
	            return node.checked = node.value === val;
	          }));
	          node.addEventListener('change', cbk);
	          break;
	        case 'checkbox':
	          cpt.onunbind(observable.onchange(function (val) {
	            return val ? node.checked = true : node.checked = false;
	          }));
	          node.addEventListener('change', function () {
	            return observable.set(node.checked);
	          });
	          break;
	        case 'number':
	        case 'text':
	        case 'password':
	        case 'search':
	        default:
	          cpt.onunbind(observable.onchange(function (val) {
	            return node.value = val;
	          }));
	          node.addEventListener('keyup', cbk);
	          node.addEventListener('input', cbk);
	          node.addEventListener('change', cbk);
	      }
	    } else if (tag === 'textarea') {} else if (tag === 'select') {}
	  };
	
	  return BindMiddleware;
	})(_middleware.Middleware);
	
	module.exports = Bind;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _middleware = __webpack_require__(4);
	
	function If(obs, cpt) {
	
	  return function (component) {
	    // ...
	  };
	};
	
	module.exports = If;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _component = __webpack_require__(2);
	
	var _middleware = __webpack_require__(4);
	
	var RepeaterComponent = (function (_Component) {
	  _inherits(RepeaterComponent, _Component);
	
	  function RepeaterComponent() {
	    _classCallCheck(this, RepeaterComponent);
	
	    _Component.apply(this, arguments);
	  }
	
	  /**
	   * Decorate the component so that
	   */
	  return RepeaterComponent;
	})(_component.Component);
	
	function Repeat(obs, opts, repeater) {
	
	  return function (component) {};
	};
	
	var RepeatMiddleware = (function (_Middleware) {
	  _inherits(RepeatMiddleware, _Middleware);
	
	  function RepeatMiddleware() {
	    _classCallCheck(this, RepeatMiddleware);
	
	    _Middleware.apply(this, arguments);
	  }
	
	  return RepeatMiddleware;
	})(_middleware.Middleware);
	
	module.exports = Repeat;


/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map