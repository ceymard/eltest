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

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _eltObservable = __webpack_require__(2);
	
	var _eltComponent = __webpack_require__(1);
	
	var _eltMiddleware = __webpack_require__(3);
	
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
	    value: function view(data) {
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
	        (0, _eltComponent.elt)(
	          'code',
	          { 'class': 'result' },
	          data.obs
	        ),
	        (0, _eltComponent.elt)('input', { type: data.type, $$: (0, _eltMiddleware.Bind)(data.obs) })
	      );
	    }
	  }]);
	
	  return It;
	})(_eltComponent.Component);
	
	var MyApp = (function (_Component2) {
	  _inherits(MyApp, _Component2);
	
	  function MyApp() {
	    _classCallCheck(this, MyApp);
	
	    _get(Object.getPrototypeOf(MyApp.prototype), 'constructor', this).apply(this, arguments);
	
	    this.initial_data = {
	      txt: 'some text.',
	      pass: 'hunter2',
	      obj: { a: 1, b: 2 },
	      // obs: o({a: 5, b: 6}),
	      val: 200,
	      bool: true,
	      radio: 'one',
	      search: '',
	      number: 4,
	      date: new Date(), // not working.
	      month: new Date(), // not working.
	      week: new Date(), // not working.
	      time: new Date(),
	      datetime: new Date(), // not working.
	      datetime_local: new Date(), // not working.
	      tel: '+33652738543',
	      email: 'admin@domain.com',
	      color: '#f45947'
	    };
	    this.props = ['txt'];
	  }
	
	  _createClass(MyApp, [{
	    key: 'view',
	    value: function view(data) {
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
	          (0, _eltComponent.elt)(It, { type: 'datetime', obs: data.datetime }),
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
	          ' ',
	          data.txt,
	          ' !!!!'
	        ),
	        (0, _eltComponent.elt)('br', null),
	        (0, _eltComponent.elt)(
	          'span',
	          null,
	          ' ',
	          data.bool,
	          ' !!!!'
	        ),
	        (0, _eltComponent.elt)('br', null)
	      );
	    }
	
	    // <span><input type='text' name='toto2' $$={Bind(data.obs.a)}/> {data.obs.a} !!!!</span><br/>
	
	  }, {
	    key: 'test',
	    value: function test() {
	      this.data.txt = 'was clicked';
	    }
	  }]);
	
	  return MyApp;
	})(_eltComponent.Component);
	
	(0, _eltComponent.elt)(MyApp, { txt: 'pouet !' }).mount(document.body);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.elt = elt;
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _observable = __webpack_require__(2);
	
	var Component = (function () {
	
	  // Should the view be built whenever a component is instanciated ?
	
	  function Component() {
	    var _this = this;
	
	    var attrs = arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Component);
	
	    this.$node = null;
	    this.$parentNode = null;
	    this.$content = null;
	    this.$parentComponent = null;
	    this.$middleware = [];
	    this.props = [];
	    this.initial_data = {};
	
	    this.setContentInsertion = function (component) {
	      return {
	        // Bound function because we want to access the this.
	        view: function view(data, next) {
	          var elt = next(data);
	          _this.$content = elt.$node;
	          return elt;
	        }
	      };
	    };
	
	    attrs = attrs || {};
	
	    // Handle middleware.
	    if (attrs.$$) {
	      this.$middleware = attrs.$$ instanceof Array ? attrs.$$ : [attrs.$$];
	      delete attrs.$$;
	    }
	
	    this.attrs = attrs;
	  }
	
	  Component.prototype.compile = function compile() {
	    var additional_data = arguments[0] === undefined ? {} : arguments[0];
	
	    var data = Object.assign({}, this.initial_data, additional_data);
	    this.data = new _observable.ObservableObject(data);
	
	    var attrs = this.attrs;
	
	    for (var _iterator = this.props, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	      var _ref;
	
	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }
	
	      var p = _ref;
	
	      if (p in attrs) {
	        this.data[p] = attrs[p];
	      }
	    }
	
	    this.$view = this.view(this.data);
	    this.$view.setParentComponent(this);
	    this.$content = this.$node = this.$view.$node;
	
	    for (var _iterator2 = this.$middleware, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	      var _ref2;
	
	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }
	
	      var m = _ref2;
	
	      var res = new m(this);
	      // should store them...
	    }
	  };
	
	  Component.prototype.view = function view() {
	    return null;
	  };
	
	  Component.prototype.setParentComponent = function setParentComponent(component) {
	    this.$parentComponent = component;
	  };
	
	  Component.prototype.getParentComponent = function getParentComponent(cls) {
	    var p = this.$parentComponent;
	    if (!p) return null;
	
	    if (p instanceof cls) return p;
	    return p.getParentComponent(cls);
	  };
	
	  /**
	   *
	   * This method is bound to
	   * @param  {String|Number|Boolean|Node|Component} child
	   *         The child we want to add to the current component.
	   */
	
	  Component.prototype.appendChild = function appendChild(child) {
	    // content is a Node.
	    var content = this.$content || this.$node;
	
	    if (typeof child === 'string' || child instanceof Number || child instanceof Boolean) {
	      // Simple text node.
	      // Note
	      content.appendChild(document.createTextNode(child.toString()));
	    } else if (child instanceof _observable.Observable) {
	      (function () {
	        // A text node that will be bound
	        // child = new TextObservable(child);
	        var txt = document.createTextNode('null');
	        // FIXME should do some stringify.
	        child.onchange(function (val) {
	          if (typeof val === 'object') val = JSON.stringify(val);
	          txt.textContent = val.toString();
	        });
	        content.appendChild(txt);
	      })();
	    } else if (child instanceof Node) {
	      content.appendChild(c);
	    } else if (child instanceof Component) {
	      // Get its HTML node.
	      child.setParentComponent(elt);
	      content.appendChild(child.$node);
	    } else {
	      // When all else fail, then try to at least create a JSON-ificated version of it.
	      // FIXME probably not.
	      content.appendChild(document.createTextNode(JSON.stringify(child)));
	    }
	  };
	
	  Component.prototype.unmount = function unmount() {
	    // remove from the parent DOM node if it is mounted
	    // destroy the data, observables and such.
	    if (!this.$parentNode) throw new Error('this node was not mounted');
	    this.$parentNode.removeChild(this.$node);
	    this.$parentNode = null;
	    this.data.destroy();
	  };
	
	  Component.prototype.mount = function mount(domnode) {
	    if (this.$parentNode) {
	      // maybe we could just let the node be mounted elsewhere ?
	      throw new Error('already mounted !');
	    }
	    this.$parentNode = domnode;
	    domnode.appendChild(this.$node);
	  };
	
	  return Component;
	})();
	
	exports.Component = Component;
	
	/**
	 *
	 */
	
	var TextObservable = (function (_Component) {
	  function TextObservable(obs) {
	    _classCallCheck(this, TextObservable);
	
	    _Component.call(this);
	    this.$node = document.createTextNode('');
	
	    // Whenever the observed change, just set its value to its string content.
	    // obs.onchange((v) => this.$node.textContent = v.toString());
	    // obs.onchange((v) => this.$node.textContent);
	  }
	
	  _inherits(TextObservable, _Component);
	
	  return TextObservable;
	})(Component);
	
	exports.TextObservable = TextObservable;
	
	/**
	 *
	 */
	
	var HtmlComponent = (function (_Component2) {
	  function HtmlComponent(elt) {
	    var attrs = arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, HtmlComponent);
	
	    _Component2.call(this, attrs);
	
	    assert('string' === typeof elt);
	
	    this.elt = elt;
	  }
	
	  _inherits(HtmlComponent, _Component2);
	
	  /**
	   * Create the html node.
	   */
	
	  HtmlComponent.prototype.view = function view(data) {
	    var _this2 = this;
	
	    var e = document.createElement(this.elt);
	
	    var _loop = function (attribute_name) {
	      var att = _this2.attrs[attribute_name];
	
	      if (att instanceof _observable.Observable) {
	        att.onchange(function (val) {
	          if (typeof val === 'object') e.setAttribute(attribute_name, JSON.stringify(val));else e.setAttribute(attribute_name, val);
	        });
	      } else {
	        e.setAttribute(attribute_name, att);
	      }
	    };
	
	    for (var attribute_name in this.attrs) {
	      _loop(attribute_name);
	    }
	
	    // empty setParentComponent as this one shall never have one.
	    return { $node: e, setParentComponent: function setParentComponent() {} };
	  };
	
	  return HtmlComponent;
	})(Component);
	
	exports.HtmlComponent = HtmlComponent;
	
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
	 *         The resulting instanciated component, with a $node property
	 *         ready to be inserted into the DOM.
	 */
	
	function elt(elt, attrs) {
	  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    children[_key - 2] = arguments[_key];
	  }
	
	  // assert(elt instanceof Component || typeof elt === 'string');
	
	  if (typeof elt === 'string') {
	    // Create a simple Html node.
	    elt = new HtmlComponent(elt, attrs);
	  } else if (elt instanceof Function) {
	
	    // Create a component, as a constructor was given to us as first argument.
	    elt = new elt(attrs, children);
	  }
	
	  elt.compile();
	
	  // For each child, construct their node.
	  for (var _iterator3 = children, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	    var _ref3;
	
	    if (_isArray3) {
	      if (_i3 >= _iterator3.length) break;
	      _ref3 = _iterator3[_i3++];
	    } else {
	      _i3 = _iterator3.next();
	      if (_i3.done) break;
	      _ref3 = _i3.value;
	    }
	
	    var _c = _ref3;
	
	    if (typeof _c === 'undefined') continue;
	    elt.appendChild(_c);
	  }
	
	  // By this point, elt.$node is ready for insertion into the DOM.
	  return elt;
	}
	
	// List of properties set in the attributes that will be pulled into
	// data as .props

	// The data spec for this component. Note that it can be overriden
	// (although rarely, usually by Repeat)


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.o = o;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var OBJ_PROTO = Object.getPrototypeOf({});
	
	var Observable = (function () {
	  function Observable(value) {
	    _classCallCheck(this, Observable);
	
	    this._listeners = [];
	    this._destroyed = false;
	    if (value !== undefined) this.set(value);
	  }
	
	  Observable.prototype.reset = function reset() {
	    delete this._value;
	  };
	
	  /**
	   * Get the value of the observable.
	   */
	
	  Observable.prototype.get = function get() {
	    return this._value;
	  };
	
	  Observable.prototype.set = function set(value) {
	
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
	  };
	
	  Observable.prototype.onchange = function onchange(fn) {
	    var _this = this;
	
	    // listeners are always given the current value if it is available upon subscribing.
	    if (this.hasOwnProperty('_value')) fn(this._value);
	
	    if (this._destroyed) return;
	
	    this._listeners.push(fn);
	
	    return function () {
	      var idx = _this._listeners.indexOf(fn);
	      _this._listeners.splice(idx, 1);
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
	    var o = new Observable(value);
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
	
	  ObservableObject.prototype.set = function set(o) {};
	
	  return ObservableObject;
	})();
	
	exports.ObservableObject = ObservableObject;
	
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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Core middleware for el.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.Click = Click;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Attr = function Attr(obj, cpt) {};
	
	exports.Attr = Attr;
	var On = function On(evt_name, cbk) {
	
	  return function (component) {
	    // Est-ce qu'on peut se unsubscribe ?
	    component.$node.addEventListener(evt_name, cbk);
	    return node;
	  };
	};
	
	exports.On = On;
	
	var Middleware = (function () {
	  function Middleware() {
	    _classCallCheck(this, Middleware);
	
	    this.$component = null;
	  }
	
	  Middleware.prototype.setComponent = function setComponent(cmp) {
	    this.$component = cmp;
	  };
	
	  return Middleware;
	})();
	
	exports.Middleware = Middleware;
	
	function Click(fn) {
	
	  return function (component) {
	    component.$node.addEventListener('click', fn);
	  };
	}
	
	exports.Bind = __webpack_require__(4);
	exports.If = __webpack_require__(5);
	exports.Repeat = __webpack_require__(6);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _middleware = __webpack_require__(3);
	
	function Bind(observable, opts) {
	  if (!observable) return;
	
	  return function (component) {
	    return new BindMiddleware(component, observable, opts);
	  };
	};
	
	var BindMiddleware = (function (_Middleware) {
	  function BindMiddleware(component, observable, opts) {
	    _classCallCheck(this, BindMiddleware);
	
	    _Middleware.call(this);
	
	    this.$component = null;
	    this.$creator = Bind;
	    this.$component = component;
	    this.observable = observable;
	    this.opts = opts;
	
	    // We're calling bind on a classic HTML node.
	    var node = component.$node;
	    var tag = node.tagName.toLowerCase();
	
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
	          observable.onchange(function (val) {
	            return node.value = val;
	          });
	          node.addEventListener('input', cbk);
	          break;
	        case 'radio':
	          observable.onchange(function (val) {
	            return node.checked = node.value === val;
	          });
	          node.addEventListener('change', cbk);
	          break;
	        case 'checkbox':
	          observable.onchange(function (val) {
	            return val ? node.checked = true : node.checked = false;
	          });
	          node.addEventListener('change', function () {
	            return observable.set(node.checked);
	          });
	          break;
	        case 'number':
	        case 'text':
	        case 'password':
	        default:
	          observable.onchange(function (val) {
	            return node.value = val;
	          });
	          node.addEventListener('keyup', cbk);
	      }
	    } else if (tag === 'textarea') {} else if (tag === 'select') {}
	  }
	
	  _inherits(BindMiddleware, _Middleware);
	
	  return BindMiddleware;
	})(_middleware.Middleware);
	
	module.exports = Bind;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _middleware = __webpack_require__(3);
	
	function If(obs, cpt) {
	
	  return function (component) {};
	};
	
	module.exports = If;
	
	// ...


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _component = __webpack_require__(1);
	
	var _middleware = __webpack_require__(3);
	
	var RepeaterComponent = (function (_Component) {
	  function RepeaterComponent() {
	    _classCallCheck(this, RepeaterComponent);
	
	    if (_Component != null) {
	      _Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(RepeaterComponent, _Component);
	
	  return RepeaterComponent;
	})(_component.Component);
	
	/**
	 * Decorate the component so that
	 */
	function Repeat(obs, opts, repeater) {
	
	  return function (component) {};
	};
	
	var RepeatMiddleware = (function (_Middleware) {
	  function RepeatMiddleware() {
	    _classCallCheck(this, RepeatMiddleware);
	
	    if (_Middleware != null) {
	      _Middleware.apply(this, arguments);
	    }
	  }
	
	  _inherits(RepeatMiddleware, _Middleware);
	
	  return RepeatMiddleware;
	})(_middleware.Middleware);
	
	module.exports = Repeat;


/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map