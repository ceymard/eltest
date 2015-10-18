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
	 * NOTE there are two way to add a child ; either by appending, or by inserting before
	 * a node (case of if or repeat, so that they know what to destroy ? maybe handling children
	 * ought to be enough ?)
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _eltObservable = __webpack_require__(1);
	
	var _eltComponent = __webpack_require__(2);
	
	var _eltMiddleware = __webpack_require__(4);
	
	var _fastclick = __webpack_require__(9);
	
	var _fastclick2 = _interopRequireDefault(_fastclick);
	
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
	        )
	      );
	    }
	
	    // <span><input type='text' name='toto2' $$={Bind(data.obs.a)}/> {data.obs.a} !!!!</span><br/>
	    //
	    // <Repeat data={data.array} view={(data) => {
	    //
	    // }}></Repeat>
	
	    // <%Repeat key, elt in meindata>
	    //  <content></content>
	    // <%/Repeat>
	    // =>
	    // <Repeat $$scope={(key, elt) => <content></content>} ???
	
	  }, {
	    key: 'test',
	    value: function test(event) {
	      this.data.txt = 'was clicked';
	    }
	  }]);
	
	  return MyApp;
	})(_eltComponent.Component);
	
	_fastclick2['default'].attach(document.body);
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
	
	  BaseComponent.prototype.mount = function mount(domnode) {
	    this.compile();
	    domnode.appendChild(this.node);
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
	
	      child.compile(); // Components need to be compiled before being appended.
	      if (child.node) node.appendChild(child.node);
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
	    this.child.onunbind(this.unbind.bind(this));
	    this.child.onunmount(this.unmount.bind(this));
	    this.children = null;
	
	    if (this.child) this.child.compile(); // Need to create everything in the children, since they're about to be mounted as well.
	
	    this.node = this.child.node;
	
	    // We leave a comment to identify the controller in the DOM for debugging.
	    // NOTE maybe should guard this statement inside some debug instruction.
	    var cpts = this.node.getAttribute('elt');
	    this.node.setAttribute('elt', this.constructor.name + (cpts ? ', ' + cpts : ''));
	
	    this.onbind.emit(this);
	  };
	
	  Component.prototype.view = function view() {
	    // A component may not have a view, as it just may be talking to a parent
	    // component.
	    return null;
	  };
	
	  Component.prototype.toString = function toString() {
	    return this.constructor.name;
	  };
	
	  Component.prototype.unmount = (function (_unmount) {
	    function unmount() {
	      return _unmount.apply(this, arguments);
	    }
	
	    unmount.toString = function () {
	      return _unmount.toString();
	    };
	
	    return unmount;
	  })(function () {
	    this.child.unmount();
	    _BaseComponent2.prototype.unmount.call(this, unmount);
	  });
	
	  return Component;
	})(BaseComponent);
	
	exports.Component = Component;
	
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
	// data as .props

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


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
		'use strict';
	
		/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */
	
		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/
	
	
		/**
		 * Instantiate fast-clicking listeners on the specified layer.
		 *
		 * @constructor
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		function FastClick(layer, options) {
			var oldOnClick;
	
			options = options || {};
	
			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			this.trackingClick = false;
	
	
			/**
			 * Timestamp for when click tracking started.
			 *
			 * @type number
			 */
			this.trackingClickStart = 0;
	
	
			/**
			 * The element being tracked for a click.
			 *
			 * @type EventTarget
			 */
			this.targetElement = null;
	
	
			/**
			 * X-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartX = 0;
	
	
			/**
			 * Y-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartY = 0;
	
	
			/**
			 * ID of the last touch, retrieved from Touch.identifier.
			 *
			 * @type number
			 */
			this.lastTouchIdentifier = 0;
	
	
			/**
			 * Touchmove boundary, beyond which a click will be cancelled.
			 *
			 * @type number
			 */
			this.touchBoundary = options.touchBoundary || 10;
	
	
			/**
			 * The FastClick layer.
			 *
			 * @type Element
			 */
			this.layer = layer;
	
			/**
			 * The minimum time between tap(touchstart and touchend) events
			 *
			 * @type number
			 */
			this.tapDelay = options.tapDelay || 200;
	
			/**
			 * The maximum time for a tap
			 *
			 * @type number
			 */
			this.tapTimeout = options.tapTimeout || 700;
	
			if (FastClick.notNeeded(layer)) {
				return;
			}
	
			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function() { return method.apply(context, arguments); };
			}
	
	
			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}
	
			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}
	
			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);
	
			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function(type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};
	
				layer.addEventListener = function(type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}
	
			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {
	
				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function(event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}
	
		/**
		* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
		*
		* @type boolean
		*/
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
	
		/**
		 * Android requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;
	
	
		/**
		 * iOS requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
	
	
		/**
		 * iOS 4 requires an exception for select elements.
		 *
		 * @type boolean
		 */
		var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);
	
	
		/**
		 * iOS 6.0-7.* requires the target element to be manually derived
		 *
		 * @type boolean
		 */
		var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);
	
		/**
		 * BlackBerry requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;
	
		/**
		 * Determine whether a given element requires a native click.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element needs a native click
		 */
		FastClick.prototype.needsClick = function(target) {
			switch (target.nodeName.toLowerCase()) {
	
			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}
	
				break;
			case 'input':
	
				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}
	
				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
			}
	
			return (/\bneedsclick\b/).test(target.className);
		};
	
	
		/**
		 * Determine whether a given element requires a call to focus to simulate click into element.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
		 */
		FastClick.prototype.needsFocus = function(target) {
			switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
				case 'button':
				case 'checkbox':
				case 'file':
				case 'image':
				case 'radio':
				case 'submit':
					return false;
				}
	
				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
			}
		};
	
	
		/**
		 * Send a click event to the specified element.
		 *
		 * @param {EventTarget|Element} targetElement
		 * @param {Event} event
		 */
		FastClick.prototype.sendClick = function(targetElement, event) {
			var clickEvent, touch;
	
			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}
	
			touch = event.changedTouches[0];
	
			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};
	
		FastClick.prototype.determineEventType = function(targetElement) {
	
			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}
	
			return 'click';
		};
	
	
		/**
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.focus = function(targetElement) {
			var length;
	
			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};
	
	
		/**
		 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
		 *
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.updateScrollParent = function(targetElement) {
			var scrollParent, parentElement;
	
			scrollParent = targetElement.fastClickScrollParent;
	
			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}
	
					parentElement = parentElement.parentElement;
				} while (parentElement);
			}
	
			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};
	
	
		/**
		 * @param {EventTarget} targetElement
		 * @returns {Element|EventTarget}
		 */
		FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
	
			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}
	
			return eventTarget;
		};
	
	
		/**
		 * On touch start, record the position and scroll offset.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchStart = function(event) {
			var targetElement, touch, selection;
	
			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}
	
			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];
	
			if (deviceIsIOS) {
	
				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}
	
				if (!deviceIsIOS4) {
	
					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}
	
					this.lastTouchIdentifier = touch.identifier;
	
					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}
	
			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;
	
			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;
	
			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				event.preventDefault();
			}
	
			return true;
		};
	
	
		/**
		 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.touchHasMoved = function(event) {
			var touch = event.changedTouches[0], boundary = this.touchBoundary;
	
			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}
	
			return false;
		};
	
	
		/**
		 * Update the last position.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchMove = function(event) {
			if (!this.trackingClick) {
				return true;
			}
	
			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}
	
			return true;
		};
	
	
		/**
		 * Attempt to find the labelled control for the given label element.
		 *
		 * @param {EventTarget|HTMLLabelElement} labelElement
		 * @returns {Element|null}
		 */
		FastClick.prototype.findControl = function(labelElement) {
	
			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}
	
			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}
	
			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};
	
	
		/**
		 * On touch end, determine whether to send a click event at once.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchEnd = function(event) {
			var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;
	
			if (!this.trackingClick) {
				return true;
			}
	
			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}
	
			if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
				return true;
			}
	
			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;
	
			this.lastClickTime = event.timeStamp;
	
			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;
	
			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];
	
				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}
	
			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}
	
					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {
	
				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
					this.targetElement = null;
					return false;
				}
	
				this.focus(targetElement);
				this.sendClick(targetElement, event);
	
				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}
	
				return false;
			}
	
			if (deviceIsIOS && !deviceIsIOS4) {
	
				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}
	
			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}
	
			return false;
		};
	
	
		/**
		 * On touch cancel, stop tracking the click.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.onTouchCancel = function() {
			this.trackingClick = false;
			this.targetElement = null;
		};
	
	
		/**
		 * Determine mouse events which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onMouse = function(event) {
	
			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}
	
			if (event.forwardedTouchEvent) {
				return true;
			}
	
			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}
	
			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
	
				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {
	
					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}
	
				// Cancel the event
				event.stopPropagation();
				event.preventDefault();
	
				return false;
			}
	
			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};
	
	
		/**
		 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
		 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
		 * an actual click which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onClick = function(event) {
			var permitted;
	
			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}
	
			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}
	
			permitted = this.onMouse(event);
	
			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}
	
			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};
	
	
		/**
		 * Remove all FastClick's event listeners.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.destroy = function() {
			var layer = this.layer;
	
			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}
	
			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};
	
	
		/**
		 * Check whether FastClick is needed.
		 *
		 * @param {Element} layer The layer to listen on
		 */
		FastClick.notNeeded = function(layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;
	
			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}
	
			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];
	
			if (chromeVersion) {
	
				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');
	
					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
	
				// Chrome desktop doesn't need FastClick (issue #15)
				} else {
					return true;
				}
			}
	
			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
	
				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');
	
					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}
	
			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}
	
			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];
	
			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896
	
				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}
	
			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}
	
			return false;
		};
	
	
		/**
		 * Factory method for creating a FastClick object
		 *
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		FastClick.attach = function(layer, options) {
			return new FastClick(layer, options);
		};
	
	
		if (true) {
	
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return FastClick;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	}());


/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map