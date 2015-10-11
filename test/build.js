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
	
	var _eltObservable = __webpack_require__(1);
	
	var _eltComponent = __webpack_require__(2);
	
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
	          'button',
	          { $$: (0, _eltMiddleware.Click)(this.unmount.bind(this)) },
	          'X'
	        )
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
	      date: '2015-10-21',
	      month: '2015-10',
	      week: '2015-W24',
	      time: '12:23',
	      datetime: new Date(), // not working.
	      datetime_local: '2015-10-06T12:23',
	      tel: '+33652738543',
	      email: 'admin@domain.com',
	      color: '#f45947'
	    };
	    this.props = ['txt'];
	  }
	
	  _createClass(MyApp, [{
	    key: 'view',
	
	    // Il faudra probablement rajouter un ', content' en argument et lui donner la liste des children.
	    // NOTE : il faudra donc revoir la mécanique d'appendChild et d'insertion des nodes dans le DOM.
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
	
	// NOTE Array peut recevoir
	//    - un iterable, auquel cas la génération ne se fait qu'une fois sans observation.
	//      un .map serait mieux si on peut rajouter des arrays dans les children comme des boeufs.
	//    - un observable avec juste une valeur iterable, au quel cas
	//      on tente de faire du tracking à la track-by.
	//    - un array-observable fait pour overrider les push(), length et compagnie, et qui dissuade
	//      d'utiliser l'accesseur [].
	//
	//
	// Quid de get/set des objets pour les rendre observables à la Vue ?
	// Il y a quand même quelque chose d'assez agréable là dedans...

	// FIXME peut être changer son nom pour quelque chose de moins ambigu.
	//    en tout cas revoir sa fonction ; il n'est pas forcément souhaitable
	//    que data se convertisse en un objet complètement observable.
	//    (peut être faire des observables simples même lorsqu'on file des objets ?)
	//    (et vérifier à l'observation qu'on a un observable et que donc ça ne sert à
	//    rien d'observer l'observable....)
	//
	//    Bref, la façon de passer des datas à un component doit être revue impérativement.

/***/ },
/* 1 */
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
	    // FIXME need to check if the value is a promise or an observable.
	
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
	
	  ObservableObject.prototype.set = function set(o) {
	
	    for (var _name2 in o) {
	      if (_name2 in this) this.define(_name2, o[_name2]);else this[_name2] = o[_name2];
	    }
	  };
	
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

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.elt = elt;
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _observable = __webpack_require__(1);
	
	var Component = (function () {
	
	  // Should the view be built whenever a component is instanciated ?
	
	  function Component() {
	    var _this = this;
	
	    var attrs = arguments[0] === undefined ? {} : arguments[0];
	    var children = arguments[1] === undefined ? [] : arguments[1];
	
	    _classCallCheck(this, Component);
	
	    this.$node = null;
	    this.$parentNode = null;
	    this.$parentComponent = null;
	    this.$middleware = [];
	    this.$unloaders = [];
	    this.$children = [];
	    this.props = [];
	    this.initial_data = {};
	
	    attrs = attrs || {};
	
	    // Handle middleware.
	    if (attrs.$$) {
	      this.$middleware = (attrs.$$ instanceof Array ? attrs.$$ : [attrs.$$]).map(function (mc) {
	        return mc(_this);
	      }).filter(function (e) {
	        return e != null;
	      });
	      delete attrs.$$;
	    }
	
	    this.attrs = attrs;
	    this.children = children;
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
	
	    var v = null;
	    v = this.view(this.data, this.children);
	
	    this.$view = v;
	
	    // Special case, we can't append child here since basically we're wrapping for other components.
	    this.$view.setParentComponent(this);
	    this.$children.push(this.$view);
	    this.$node = this.$view.$node;
	
	    this.link();
	  };
	
	  Component.prototype.view = function view() {
	    return null;
	  };
	
	  Component.prototype.link = function link() {
	    // This is typically when middlewares and the component should comunicate.
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
	
	      m.link();
	    }
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
	    var _this2 = this;
	
	    // content is a Node.
	    var $node = this.$node;
	
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
	
	        this.appendChild(c);
	      }
	    } else if (child instanceof Node) {
	
	      // A DOM Node is simply appended to $node.
	      $node.appendChild(child);
	    } else if (child instanceof Component) {
	
	      child.setParentComponent(this);
	      this.$children.push(child);
	      // Append its html node.
	      $node.appendChild(child.$node);
	    } else {
	      (function () {
	        // If the node is nothing mountable, then we shall try to render it
	        // on a text node.
	
	        var txt = document.createTextNode('');
	
	        // We use o.onchange to handle both observable and regular values.
	        _this2.$unloaders.push(_observable.o.onchange(child, function (val) {
	          if (val === undefined || val === null) val = '';else if (typeof val === 'object') val = JSON.stringify(val);
	          txt.textContent = val.toString();
	        }));
	
	        $node.appendChild(txt);
	      })();
	    }
	  };
	
	  Component.prototype.removeChild = function removeChild(child) {
	    var idx = this.$children.indexOf(child);
	    if (idx > -1) {
	      this.$children.splice(idx, 1);
	    }
	  };
	
	  Component.prototype.unload = function unload() {
	
	    for (var _iterator4 = this.$unloaders, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
	      var _ref4;
	
	      if (_isArray4) {
	        if (_i4 >= _iterator4.length) break;
	        _ref4 = _iterator4[_i4++];
	      } else {
	        _i4 = _iterator4.next();
	        if (_i4.done) break;
	        _ref4 = _i4.value;
	      }
	
	      var u = _ref4;
	
	      u.call(this);
	    }
	
	    for (var _iterator5 = this.$middleware, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
	      var _ref5;
	
	      if (_isArray5) {
	        if (_i5 >= _iterator5.length) break;
	        _ref5 = _iterator5[_i5++];
	      } else {
	        _i5 = _iterator5.next();
	        if (_i5.done) break;
	        _ref5 = _i5.value;
	      }
	
	      var m = _ref5;
	
	      m.unload();
	    }
	
	    for (var _iterator6 = this.$children, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
	      var _ref6;
	
	      if (_isArray6) {
	        if (_i6 >= _iterator6.length) break;
	        _ref6 = _iterator6[_i6++];
	      } else {
	        _i6 = _iterator6.next();
	        if (_i6.done) break;
	        _ref6 = _i6.value;
	      }
	
	      var c = _ref6;
	
	      c.unload();
	    }
	
	    this.$unloaders = [];
	  };
	
	  Component.prototype.unmount = function unmount() {
	
	    for (var _iterator7 = this.$children, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
	      var _ref7;
	
	      if (_isArray7) {
	        if (_i7 >= _iterator7.length) break;
	        _ref7 = _iterator7[_i7++];
	      } else {
	        _i7 = _iterator7.next();
	        if (_i7.done) break;
	        _ref7 = _i7.value;
	      }
	
	      var c = _ref7;
	
	      c.unmount();
	    }
	
	    this.unload();
	
	    // remove the component from its parent.
	    if (this.$parentComponent) this.$parentComponent.removeChild(this);
	    this.$node = null;
	  };
	
	  Component.prototype.mount = function mount(domnode) {
	    domnode.appendChild(this.$node);
	  };
	
	  Component.prototype.toString = function toString() {
	    return this.constructor.name;
	  };
	
	  return Component;
	})();
	
	exports.Component = Component;
	
	/**
	 *
	 */
	
	var HtmlComponent = (function (_Component) {
	  function HtmlComponent(elt, _x4, children) {
	    var attrs = arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, HtmlComponent);
	
	    _Component.call(this, attrs, children);
	
	    assert('string' === typeof elt);
	
	    this.elt = elt;
	  }
	
	  _inherits(HtmlComponent, _Component);
	
	  HtmlComponent.prototype.toString = function toString() {
	    return '<' + this.elt + '>';
	  };
	
	  /**
	   * Create the html node.
	   */
	
	  HtmlComponent.prototype.compile = function compile(data, children) {
	    var _this3 = this;
	
	    var e = document.createElement(this.elt);
	
	    var _loop = function (attribute_name) {
	      var att = _this3.attrs[attribute_name];
	      _this3.$unloaders.push(_observable.o.onchange(att, function (val) {
	        if (typeof val === 'object') e.setAttribute(attribute_name, JSON.stringify(val));else e.setAttribute(attribute_name, val);
	      }));
	    };
	
	    for (var attribute_name in this.attrs) {
	      _loop(attribute_name);
	    }
	
	    this.$node = e;
	
	    for (var _iterator8 = this.children, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
	      var _ref8;
	
	      if (_isArray8) {
	        if (_i8 >= _iterator8.length) break;
	        _ref8 = _iterator8[_i8++];
	      } else {
	        _i8 = _iterator8.next();
	        if (_i8.done) break;
	        _ref8 = _i8.value;
	      }
	
	      var c = _ref8;
	
	      this.appendChild(c);
	    }
	
	    this.link();
	  };
	
	  HtmlComponent.prototype.unmount = function unmount() {
	    // remove from the parent DOM node if it is mounted
	    // destroy the data, observables and such.
	    if (!this.$node.parentNode) throw new Error('this node was not mounted');
	    this.$node.parentNode.removeChild(this.$node);
	    this.$node = null;
	
	    _Component.prototype.unmount.call(this);
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
	    elt = new HtmlComponent(elt, attrs, children);
	  } else if (elt instanceof Function) {
	    // instanceof Function because elt is a constructor at this stage, not
	    // an actual instance of a component.
	
	    // Create a component, as a constructor was given to us as first argument.
	    elt = new elt(attrs, children);
	  } else {}
	
	  elt.compile();
	
	  // for (let c of children) {
	  //   if (typeof c === 'undefined') continue;
	  //   elt.appendChild(c);
	  // }
	
	  // By this point, elt.$node is ready for insertion into the DOM.
	  return elt;
	}
	
	// List of properties set in the attributes that will be pulled into
	// data as .props

	// The data spec for this component. Note that it can be overriden
	// (although rarely, usually by Repeat)

	// FIXME should trigger some kind of error here.


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
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Middleware = (function () {
	  function Middleware(cmp) {
	    _classCallCheck(this, Middleware);
	
	    this.$component = null;
	    this.$unloaders = [];
	
	    this.$component = cmp;
	  }
	
	  Middleware.prototype.view = function view() {};
	
	  Middleware.prototype.link = function link() {};
	
	  Middleware.prototype.unload = function unload() {
	    for (var _iterator = this.$unloaders, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	      var _ref;
	
	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }
	
	      var u = _ref;
	
	      u.call(this);
	    }
	
	    this.$unloaders = [];
	  };
	
	  Middleware.prototype.unmount = function unmount() {};
	
	  return Middleware;
	})();
	
	exports.Middleware = Middleware;
	
	exports.Click = __webpack_require__(4);
	exports.Bind = __webpack_require__(5);
	exports.If = __webpack_require__(6);
	exports.Repeat = __webpack_require__(7);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _middleware = __webpack_require__(3);
	
	function Click(cbk) {
	
	  return function (component) {
	    return new ClickMiddleware(component, cbk);
	  };
	}
	
	var ClickMiddleware = (function (_Middleware) {
	  function ClickMiddleware(component, cbk) {
	    _classCallCheck(this, ClickMiddleware);
	
	    _Middleware.call(this, component);
	    this.cbk = cbk;
	  }
	
	  _inherits(ClickMiddleware, _Middleware);
	
	  ClickMiddleware.prototype.link = function link() {
	    // No need to unregister this.
	    this.$component.$node.addEventListener('click', this.cbk);
	  };
	
	  return ClickMiddleware;
	})(_middleware.Middleware);
	
	module.exports = Click;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _middleware = __webpack_require__(3);
	
	var _observable = __webpack_require__(1);
	
	function Bind(observable, opts) {
	  if (!observable) return;
	
	  return function (component) {
	    return new BindMiddleware(component, observable, opts);
	  };
	};
	
	var BindMiddleware = (function (_Middleware) {
	  function BindMiddleware(component, observable, opts) {
	    _classCallCheck(this, BindMiddleware);
	
	    _Middleware.call(this, component);
	
	    this.$creator = Bind;
	    assert(observable instanceof _observable.Observable);
	
	    this.observable = observable;
	    this.opts = opts;
	  }
	
	  _inherits(BindMiddleware, _Middleware);
	
	  BindMiddleware.prototype.link = function link() {
	
	    // We're calling bind on a classic HTML node.
	    var observable = this.observable;
	    var opts = this.opts;
	    var node = this.$component.$node;
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
	        case 'date':
	        case 'datetime':
	        case 'week':
	        case 'month':
	        case 'datetime-local':
	          this.$unloaders.push(observable.onchange(function (val) {
	            return node.value = val;
	          }));
	          node.addEventListener('input', cbk);
	          break;
	        case 'radio':
	          this.$unloaders.push(observable.onchange(function (val) {
	            return node.checked = node.value === val;
	          }));
	          node.addEventListener('change', cbk);
	          break;
	        case 'checkbox':
	          this.$unloaders.push(observable.onchange(function (val) {
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
	          this.$unloaders.push(observable.onchange(function (val) {
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _middleware = __webpack_require__(3);
	
	function If(obs, cpt) {
	
	  return function (component) {};
	};
	
	module.exports = If;
	
	// ...


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _component = __webpack_require__(2);
	
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