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
	
	var _eltComponent = __webpack_require__(1);
	
	window.assert = function (b) {
	  if (!b) console.error(new Error('assert failed'));
	};
	
	var MyApp = (function (_Component) {
	  _inherits(MyApp, _Component);
	
	  function MyApp() {
	    _classCallCheck(this, MyApp);
	
	    _get(Object.getPrototypeOf(MyApp.prototype), 'constructor', this).apply(this, arguments);
	
	    this.initial_data = {
	      txt: 'some text.',
	      obj: { a: 1, b: 2 }
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
	          'span',
	          { 'class': 'pouet' },
	          'test ! ',
	          data.txt,
	          ' ',
	          false,
	          ' ',
	          new Date()
	        ),
	        (0, _eltComponent.elt)('br', null),
	        (0, _eltComponent.elt)(
	          'span',
	          null,
	          data.obj,
	          ' ',
	          (0, _eltComponent.elt)('input', { type: 'text', name: 'toto', value: data.txt })
	        )
	      );
	    }
	  }]);
	
	  return MyApp;
	})(_eltComponent.Component);
	
	document.body.appendChild((0, _eltComponent.elt)(MyApp, { txt: 'pouet !' }).$node);
	// should append that node to the body.

	// Hello!

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
	
	var _eltObservable = __webpack_require__(2);
	
	var Component = (function () {
	
	  // Should the view be built whenever a component is instanciated ?
	
	  function Component() {
	    var _this = this;
	
	    var attrs = arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Component);
	
	    this.$node = null;
	    this.$content = null;
	    this.$parentComponent = null;
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
	
	    this.attrs = attrs;
	  }
	
	  Component.prototype.compile = function compile() {
	    var additional_data = arguments[0] === undefined ? {} : arguments[0];
	
	    // FIXME WE WANT THEM OBSERVABLES
	    this.data = Object.assign({}, this.initial_data, additional_data);
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
	
	    // hmm ?? should I call the view() here ?
	    // NOTE $content should be set up somewhere.
	    this.$view = this.view(this.data);
	    this.$view.setParentComponent(this);
	    this.$content = this.$node = this.$view.$node;
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
	    } else if (child instanceof _eltObservable.Observable) {
	      // A text node that will be bound
	      child = new TextObservable(c);
	      content.appendChild(child.$node);
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
	
	  return Component;
	})();
	
	exports.Component = Component;
	
	/**
	 *
	 */
	
	var TextObservable = (function (_Component) {
	  function TextObservable(obs) {
	    var _this2 = this;
	
	    _classCallCheck(this, TextObservable);
	
	    _Component.call(this);
	    this.$node = document.createTextNode('');
	
	    // Whenever the observed change, just set its value to its string content.
	    // obs.changed((v) => this.$node.textContent = v.toString());
	    obs.changed(function (v) {
	      return _this2.appendChild;
	    });
	  }
	
	  _inherits(TextObservable, _Component);
	
	  return TextObservable;
	})(Component);
	
	exports.TextObservable = TextObservable;
	
	/**
	 *
	 */
	
	var HtmlComponent = (function (_Component2) {
	  function HtmlComponent(elt, attrs) {
	    _classCallCheck(this, HtmlComponent);
	
	    _Component2.call(this);
	
	    assert('string' === typeof elt);
	
	    this.elt = elt;
	    this.attrs = attrs;
	  }
	
	  _inherits(HtmlComponent, _Component2);
	
	  /**
	   * Create the html node.
	   */
	
	  HtmlComponent.prototype.view = function view(data) {
	    var _this3 = this;
	
	    var e = document.createElement(this.elt);
	
	    var _loop = function (attribute_name) {
	      var att = _this3.attrs[attribute_name];
	
	      if (att instanceof _eltObservable.Observable) {
	        att.changed(function (val) {
	          return e.setAttribute(attribute_name, val);
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
	  for (var _iterator2 = children, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	    var _ref2;
	
	    if (_isArray2) {
	      if (_i2 >= _iterator2.length) break;
	      _ref2 = _iterator2[_i2++];
	    } else {
	      _i2 = _iterator2.next();
	      if (_i2.done) break;
	      _ref2 = _i2.value;
	    }
	
	    var _c = _ref2;
	
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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports.obs = obs;
	exports.o = o;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Observable = (function () {
	  function Observable(value) {
	    _classCallCheck(this, Observable);
	
	    this._listeners = [];
	  }
	
	  _createClass(Observable, [{
	    key: 'reset',
	    value: function reset() {
	      delete this._value;
	    }
	  }, {
	    key: 'get',
	
	    /**
	     * Get the value of the observable.
	     */
	    value: function get() {
	      return this._value;
	    }
	  }, {
	    key: 'set',
	    value: function set(value) {
	
	      // No need to change.
	      if (this._value === value) return;
	
	      this._value = value;
	
	      // No need to trigger if no one is listening to us.
	      if (this._listeners.length === 0) return;
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = this._listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var l = _step.value;
	
	          l(value);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator['return']) {
	            _iterator['return']();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'changed',
	    value: function changed(fn) {
	      this._listeners.push(fn);
	
	      // listeners are always given the current value if it is available upon subscribing.
	      if (this.hasOwnProperty('_value')) fn(this._value);
	    }
	  }, {
	    key: 'unsubscribe',
	    value: function unsubscribe(fn) {
	      var idx = this._listeners.indexOf(fn);
	      if (idx > -1) this._listeners.splice(idx, 1);
	    }
	  }, {
	    key: 'destroy',
	
	    /**
	     * Remove all listeners and prepare to free the object.
	     */
	    value: function destroy() {
	      delete this._listeners;
	      delete this._value;
	    }
	  }]);
	
	  return Observable;
	})();
	
	exports.Observable = Observable;
	
	var ArrayObservable = (function () {
	  function ArrayObservable(a) {
	    _classCallCheck(this, ArrayObservable);
	
	    this.length = new Observable(0);
	    this.update(a);
	  }
	
	  _createClass(ArrayObservable, [{
	    key: 'update',
	    value: function update(arr) {
	      assert(a instanceof Array);
	
	      // the array hasn't changed.
	      if (arr === this._value) ;
	
	      // empty the array ?
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var _a = _step2.value;
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	            _iterator2['return']();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	
	      // update the length.
	      this.length.set(this._value.length);
	    }
	  }, {
	    key: 'at',
	
	    // Get observable on position i
	    // or set the object at the given position.
	    value: function at(i, v) {}
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;
	
	      try {
	        for (var _iterator3 = this.items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var i = _step3.value;
	
	          i.destroy();
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3['return']) {
	            _iterator3['return']();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	    }
	  }]);
	
	  return ArrayObservable;
	})();
	
	exports.ArrayObservable = ArrayObservable;
	
	/**
	 * This object only creates keys whenever they are needed.
	 */
	
	var ObjectObservable = (function () {
	  function ObjectObservable(obj) {
	    _classCallCheck(this, ObjectObservable);
	
	    this.update(obj);
	  }
	
	  _createClass(ObjectObservable, [{
	    key: 'update',
	    value: function update(obj) {
	      for (var _name in obj) {
	        if (this[_name]) this[_name].set(obj[_name]);else this[_name] = obs(obj[_name]);
	      }
	    }
	  }]);
	
	  return ObjectObservable;
	})();
	
	exports.ObjectObservable = ObjectObservable;
	
	function obs(o) {
	  var cls = null;
	
	  if (o instanceof Array) {
	    cls = ArrayObservable;
	  } else if (o instanceof Date) {
	    cls = Observable;
	  } else if (typeof o === 'object') {
	    cls = ObjectObservable;
	  } else {
	    cls = Observable;
	  }
	
	  return new cls(o);
	}
	
	function o() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var l = args.length;
	  var fn = args[args.length - 1];
	  var deps = [];
	
	  for (var i = 0; i < l - 2; i++) {}
	}
	
	// compute the dependencies here.

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map