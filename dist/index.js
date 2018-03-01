(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-ui-radiobutton", ["react"], factory);
	else if(typeof exports === 'object')
		exports["dyna-ui-radiobutton"] = factory(require("react"));
	else
		root["dyna-ui-radiobutton"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}



exports.__esModule = true;
exports['default'] = stripStyle;

function stripStyle(style) {
  var ret = {};
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }
    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
  }
  return ret;
}

module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// currently used to initiate the velocity style object to 0


exports.__esModule = true;
exports['default'] = mapToZero;

function mapToZero(obj) {
  var ret = {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key] = 0;
    }
  }
  return ret;
}

module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// stepper is used a lot. Saves allocation to return the same array wrapper.
// This is fine and danger-free against mutations because the callsite
// immediately destructures it and gets the numbers inside without passing the


exports.__esModule = true;
exports["default"] = stepper;

var reusedTuple = [0, 0];

function stepper(secondPerFrame, x, v, destX, k, b, precision) {
  // Spring stiffness, in kg / s^2

  // for animations, destX is really spring length (spring at rest). initial
  // position is considered as the stretched/compressed position of a spring
  var Fspring = -k * (x - destX);

  // Damping, in kg / s
  var Fdamper = -b * v;

  // usually we put mass here, but for animation purposes, specifying mass is a
  // bit redundant. you could simply adjust k and b accordingly
  // let a = (Fspring + Fdamper) / mass;
  var a = Fspring + Fdamper;

  var newV = v + a * secondPerFrame;
  var newX = x + newV * secondPerFrame;

  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
    reusedTuple[0] = destX;
    reusedTuple[1] = 0;
    return reusedTuple;
  }

  reusedTuple[0] = newX;
  reusedTuple[1] = newV;
  return reusedTuple;
}

module.exports = exports["default"];
// array reference around.

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

// Generated by CoffeeScript 1.7.1
(function () {
  var getNanoSeconds, hrtime, loadTime;

  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    module.exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    module.exports = function () {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function getNanoSeconds() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var now = __webpack_require__(23),
    root = typeof window === 'undefined' ? global : window,
    vendors = ['moz', 'webkit'],
    suffix = 'AnimationFrame',
    raf = root['request' + suffix],
    caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
  var last = 0,
      id = 0,
      queue = [],
      frameDuration = 1000 / 60;

  raf = function raf(callback) {
    if (queue.length === 0) {
      var _now = now(),
          next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function () {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for (var i = 0; i < cp.length; i++) {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id;
  };

  caf = function caf(handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

module.exports = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn);
};
module.exports.cancel = function () {
  caf.apply(root, arguments);
};
module.exports.polyfill = function (object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// usage assumption: currentStyle values have already been rendered but it says
// nothing of whether currentStyle is stale (see unreadPropStyle)


exports.__esModule = true;
exports['default'] = shouldStopAnimation;

function shouldStopAnimation(currentStyle, style, currentVelocity) {
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }

    if (currentVelocity[key] !== 0) {
      return false;
    }

    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
    // stepper will have already taken care of rounding precision errors, so
    // won't have such thing as 0.9999 !=== 1
    if (currentStyle[key] !== styleValue) {
      return false;
    }
  }

  return true;
}

module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(24)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(27)();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory(__webpack_require__(1));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["dyna-ui-field-wrapper"] = factory(require("react"));else root["dyna-ui-field-wrapper"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : undefined, function (__WEBPACK_EXTERNAL_MODULE_6__) {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId]) {
					/******/return installedModules[moduleId].exports;
					/******/
				}
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/i: moduleId,
					/******/l: false,
					/******/exports: {}
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.l = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // define getter function for harmony exports
			/******/__webpack_require__.d = function (exports, name, getter) {
				/******/if (!__webpack_require__.o(exports, name)) {
					/******/Object.defineProperty(exports, name, {
						/******/configurable: false,
						/******/enumerable: true,
						/******/get: getter
						/******/ });
					/******/
				}
				/******/
			};
			/******/
			/******/ // getDefaultExport function for compatibility with non-harmony modules
			/******/__webpack_require__.n = function (module) {
				/******/var getter = module && module.__esModule ?
				/******/function getDefault() {
					return module['default'];
				} :
				/******/function getModuleExports() {
					return module;
				};
				/******/__webpack_require__.d(getter, 'a', getter);
				/******/return getter;
				/******/
			};
			/******/
			/******/ // Object.prototype.hasOwnProperty.call
			/******/__webpack_require__.o = function (object, property) {
				return Object.prototype.hasOwnProperty.call(object, property);
			};
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "/dist/";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(__webpack_require__.s = 3);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			module.exports = function (module) {
				if (!module.webpackPolyfill) {
					module.deprecate = function () {};
					module.paths = [];
					// module.parent = undefined by default
					if (!module.children) module.children = [];
					Object.defineProperty(module, "loaded", {
						enumerable: true,
						get: function get() {
							return module.l;
						}
					});
					Object.defineProperty(module, "id", {
						enumerable: true,
						get: function get() {
							return module.i;
						}
					});
					module.webpackPolyfill = 1;
				}
				return module;
			};

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			/*
   	MIT License http://www.opensource.org/licenses/mit-license.php
   	Author Tobias Koppers @sokra
   */
			// css base code, injected by the css-loader

			module.exports = function (useSourceMap) {
				var list = [];

				// return the list of modules as css string
				list.toString = function toString() {
					return this.map(function (item) {
						var content = cssWithMappingToString(item, useSourceMap);
						if (item[2]) {
							return "@media " + item[2] + "{" + content + "}";
						} else {
							return content;
						}
					}).join("");
				};

				// import a list of modules into the list
				list.i = function (modules, mediaQuery) {
					if (typeof modules === "string") modules = [[null, modules, ""]];
					var alreadyImportedModules = {};
					for (var i = 0; i < this.length; i++) {
						var id = this[i][0];
						if (typeof id === "number") alreadyImportedModules[id] = true;
					}
					for (i = 0; i < modules.length; i++) {
						var item = modules[i];
						// skip already imported module
						// this implementation is not 100% perfect for weird media query combinations
						//  when a module is imported multiple times with different media queries.
						//  I hope this will never occur (Hey this way we have smaller bundles)
						if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
							if (mediaQuery && !item[2]) {
								item[2] = mediaQuery;
							} else if (mediaQuery) {
								item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
							}
							list.push(item);
						}
					}
				};
				return list;
			};

			function cssWithMappingToString(item, useSourceMap) {
				var content = item[1] || '';
				var cssMapping = item[3];
				if (!cssMapping) {
					return content;
				}

				if (useSourceMap && typeof btoa === 'function') {
					var sourceMapping = toComment(cssMapping);
					var sourceURLs = cssMapping.sources.map(function (source) {
						return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
					});

					return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
				}

				return [content].join('\n');
			}

			// Adapted from convert-source-map (MIT)
			function toComment(sourceMap) {
				// eslint-disable-next-line no-undef
				var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
				var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

				return '/*# ' + data + ' */';
			}

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			/*
   	MIT License http://www.opensource.org/licenses/mit-license.php
   	Author Tobias Koppers @sokra
   */

			var stylesInDom = {};

			var memoize = function memoize(fn) {
				var memo;

				return function () {
					if (typeof memo === "undefined") memo = fn.apply(this, arguments);
					return memo;
				};
			};

			var isOldIE = memoize(function () {
				// Test for IE <= 9 as proposed by Browserhacks
				// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
				// Tests for existence of standard globals is to allow style-loader
				// to operate correctly into non-standard environments
				// @see https://github.com/webpack-contrib/style-loader/issues/177
				return window && document && document.all && !window.atob;
			});

			var getElement = function (fn) {
				var memo = {};

				return function (selector) {
					if (typeof memo[selector] === "undefined") {
						memo[selector] = fn.call(this, selector);
					}

					return memo[selector];
				};
			}(function (target) {
				return document.querySelector(target);
			});

			var singleton = null;
			var singletonCounter = 0;
			var stylesInsertedAtTop = [];

			var fixUrls = __webpack_require__(11);

			module.exports = function (list, options) {
				if (typeof DEBUG !== "undefined" && DEBUG) {
					if ((typeof document === 'undefined' ? 'undefined' : _typeof2(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
				}

				options = options || {};

				options.attrs = _typeof2(options.attrs) === "object" ? options.attrs : {};

				// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
				// tags it will allow on a page
				if (!options.singleton) options.singleton = isOldIE();

				// By default, add <style> tags to the <head> element
				if (!options.insertInto) options.insertInto = "head";

				// By default, add <style> tags to the bottom of the target
				if (!options.insertAt) options.insertAt = "bottom";

				var styles = listToStyles(list, options);

				addStylesToDom(styles, options);

				return function update(newList) {
					var mayRemove = [];

					for (var i = 0; i < styles.length; i++) {
						var item = styles[i];
						var domStyle = stylesInDom[item.id];

						domStyle.refs--;
						mayRemove.push(domStyle);
					}

					if (newList) {
						var newStyles = listToStyles(newList, options);
						addStylesToDom(newStyles, options);
					}

					for (var i = 0; i < mayRemove.length; i++) {
						var domStyle = mayRemove[i];

						if (domStyle.refs === 0) {
							for (var j = 0; j < domStyle.parts.length; j++) {
								domStyle.parts[j]();
							}delete stylesInDom[domStyle.id];
						}
					}
				};
			};

			function addStylesToDom(styles, options) {
				for (var i = 0; i < styles.length; i++) {
					var item = styles[i];
					var domStyle = stylesInDom[item.id];

					if (domStyle) {
						domStyle.refs++;

						for (var j = 0; j < domStyle.parts.length; j++) {
							domStyle.parts[j](item.parts[j]);
						}

						for (; j < item.parts.length; j++) {
							domStyle.parts.push(addStyle(item.parts[j], options));
						}
					} else {
						var parts = [];

						for (var j = 0; j < item.parts.length; j++) {
							parts.push(addStyle(item.parts[j], options));
						}

						stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
					}
				}
			}

			function listToStyles(list, options) {
				var styles = [];
				var newStyles = {};

				for (var i = 0; i < list.length; i++) {
					var item = list[i];
					var id = options.base ? item[0] + options.base : item[0];
					var css = item[1];
					var media = item[2];
					var sourceMap = item[3];
					var part = { css: css, media: media, sourceMap: sourceMap };

					if (!newStyles[id]) styles.push(newStyles[id] = { id: id, parts: [part] });else newStyles[id].parts.push(part);
				}

				return styles;
			}

			function insertStyleElement(options, style) {
				var target = getElement(options.insertInto);

				if (!target) {
					throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
				}

				var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

				if (options.insertAt === "top") {
					if (!lastStyleElementInsertedAtTop) {
						target.insertBefore(style, target.firstChild);
					} else if (lastStyleElementInsertedAtTop.nextSibling) {
						target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
					} else {
						target.appendChild(style);
					}
					stylesInsertedAtTop.push(style);
				} else if (options.insertAt === "bottom") {
					target.appendChild(style);
				} else {
					throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
				}
			}

			function removeStyleElement(style) {
				if (style.parentNode === null) return false;
				style.parentNode.removeChild(style);

				var idx = stylesInsertedAtTop.indexOf(style);
				if (idx >= 0) {
					stylesInsertedAtTop.splice(idx, 1);
				}
			}

			function createStyleElement(options) {
				var style = document.createElement("style");

				options.attrs.type = "text/css";

				addAttrs(style, options.attrs);
				insertStyleElement(options, style);

				return style;
			}

			function createLinkElement(options) {
				var link = document.createElement("link");

				options.attrs.type = "text/css";
				options.attrs.rel = "stylesheet";

				addAttrs(link, options.attrs);
				insertStyleElement(options, link);

				return link;
			}

			function addAttrs(el, attrs) {
				Object.keys(attrs).forEach(function (key) {
					el.setAttribute(key, attrs[key]);
				});
			}

			function addStyle(obj, options) {
				var style, update, remove, result;

				// If a transform function was defined, run it on the css
				if (options.transform && obj.css) {
					result = options.transform(obj.css);

					if (result) {
						// If transform returns a value, use that instead of the original css.
						// This allows running runtime transformations on the css.
						obj.css = result;
					} else {
						// If the transform function returns a falsy value, don't add this css.
						// This allows conditional loading of css
						return function () {
							// noop
						};
					}
				}

				if (options.singleton) {
					var styleIndex = singletonCounter++;

					style = singleton || (singleton = createStyleElement(options));

					update = applyToSingletonTag.bind(null, style, styleIndex, false);
					remove = applyToSingletonTag.bind(null, style, styleIndex, true);
				} else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
					style = createLinkElement(options);
					update = updateLink.bind(null, style, options);
					remove = function remove() {
						removeStyleElement(style);

						if (style.href) URL.revokeObjectURL(style.href);
					};
				} else {
					style = createStyleElement(options);
					update = applyToTag.bind(null, style);
					remove = function remove() {
						removeStyleElement(style);
					};
				}

				update(obj);

				return function updateStyle(newObj) {
					if (newObj) {
						if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
							return;
						}

						update(obj = newObj);
					} else {
						remove();
					}
				};
			}

			var replaceText = function () {
				var textStore = [];

				return function (index, replacement) {
					textStore[index] = replacement;

					return textStore.filter(Boolean).join('\n');
				};
			}();

			function applyToSingletonTag(style, index, remove, obj) {
				var css = remove ? "" : obj.css;

				if (style.styleSheet) {
					style.styleSheet.cssText = replaceText(index, css);
				} else {
					var cssNode = document.createTextNode(css);
					var childNodes = style.childNodes;

					if (childNodes[index]) style.removeChild(childNodes[index]);

					if (childNodes.length) {
						style.insertBefore(cssNode, childNodes[index]);
					} else {
						style.appendChild(cssNode);
					}
				}
			}

			function applyToTag(style, obj) {
				var css = obj.css;
				var media = obj.media;

				if (media) {
					style.setAttribute("media", media);
				}

				if (style.styleSheet) {
					style.styleSheet.cssText = css;
				} else {
					while (style.firstChild) {
						style.removeChild(style.firstChild);
					}

					style.appendChild(document.createTextNode(css));
				}
			}

			function updateLink(link, options, obj) {
				var css = obj.css;
				var sourceMap = obj.sourceMap;

				/*
    	If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
    	and there is no publicPath defined then lets turn convertToAbsoluteUrls
    	on by default.  Otherwise default to the convertToAbsoluteUrls option
    	directly
    */
				var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

				if (options.convertToAbsoluteUrls || autoFixUrls) {
					css = fixUrls(css);
				}

				if (sourceMap) {
					// http://stackoverflow.com/a/26603875
					css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
				}

				var blob = new Blob([css], { type: "text/css" });

				var oldSrc = link.href;

				link.href = URL.createObjectURL(blob);

				if (oldSrc) URL.revokeObjectURL(oldSrc);
			}

			/***/
		},
		/* 3 */
		/***/function (module, exports, __webpack_require__) {

			module.exports = __webpack_require__(4);

			/***/
		},
		/* 4 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", { value: true });
			var DynaFieldWrapper_1 = __webpack_require__(5);
			exports.DynaFieldWrapper = DynaFieldWrapper_1.DynaFieldWrapper;
			exports.EMode = DynaFieldWrapper_1.EMode;
			exports.EStyle = DynaFieldWrapper_1.EStyle;
			exports.EColor = DynaFieldWrapper_1.EColor;
			exports.ESize = DynaFieldWrapper_1.ESize;

			/***/
		},
		/* 5 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var __extends = this && this.__extends || function () {
				var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
					d.__proto__ = b;
				} || function (d, b) {
					for (var p in b) {
						if (b.hasOwnProperty(p)) d[p] = b[p];
					}
				};
				return function (d, b) {
					extendStatics(d, b);
					function __() {
						this.constructor = d;
					}
					d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
				};
			}();
			Object.defineProperty(exports, "__esModule", { value: true });
			var React = __webpack_require__(6);
			var dyna_guid_1 = __webpack_require__(7);
			var dyna_ui_styles_1 = __webpack_require__(8);
			exports.EColor = dyna_ui_styles_1.EColor;
			__webpack_require__(9);
			__webpack_require__(12);
			var EMode;
			(function (EMode) {
				EMode["VIEW"] = "VIEW";
				EMode["EDIT"] = "EDIT";
			})(EMode = exports.EMode || (exports.EMode = {}));
			var EStyle;
			(function (EStyle) {
				EStyle["INLINE_ROUNDED"] = "INLINE_ROUNDED";
			})(EStyle = exports.EStyle || (exports.EStyle = {}));
			var ESize;
			(function (ESize) {
				ESize["XSMALL"] = "XSMALL";
				ESize["SMALL"] = "SMALL";
				ESize["MEDIUM"] = "MEDIUM";
				ESize["LARGE"] = "LARGE";
			})(ESize = exports.ESize || (exports.ESize = {}));
			var DynaFieldWrapper = /** @class */function (_super) {
				__extends(DynaFieldWrapper, _super);
				function DynaFieldWrapper() {
					var _this = _super !== null && _super.apply(this, arguments) || this;
					_this.internalId = dyna_guid_1.guid();
					return _this;
				}
				Object.defineProperty(DynaFieldWrapper.prototype, "inputElement", {
					get: function get() {
						return this.props.inputElementSelector && this.controlContainerElement && this.controlContainerElement.querySelector(this.props.inputElementSelector) || null;
					},
					enumerable: true,
					configurable: true
				});
				DynaFieldWrapper.prototype.componentDidMount = function () {
					if (this.props.inputElementSelector) {
						if (!this.inputElement) {
							console.error("DynaFieldWrapper: the inputElementSelector is defined but doesn't return any input control, inputElementSelector: [" + this.props.inputElementSelector + "]");
						} else {
							this.inputElement && this.inputElement.setAttribute('id', this.internalId);
						}
					}
				};
				DynaFieldWrapper.prototype.handleClick = function (event) {
					this.props.onClick();
				};
				DynaFieldWrapper.prototype.handleLabelClick = function (event) {
					var controlElement = this.controlContainerElement.querySelector(this.props.inputElementSelector);
					if (controlElement) controlElement.focus();
					this.props.onFocus();
				};
				DynaFieldWrapper.prototype.handleContainerClick = function (event) {
					var controlElement = this.controlContainerElement.querySelector(this.props.inputElementSelector);
					if (event.target !== event.currentTarget) return;
					if (controlElement) controlElement.focus();
					this.props.onFocus();
				};
				DynaFieldWrapper.prototype.render = function () {
					var _this = this;
					var _a = this.props,
					    cn = _a.className,
					    mode = _a.mode,
					    style = _a.style,
					    color = _a.color,
					    size = _a.size,
					    label = _a.label,
					    required = _a.required,
					    isLoading = _a.isLoading,
					    children = _a.children,
					    validationMessage = _a.validationMessage,
					    footer = _a.footer;
					var className = [cn || '', 'dyna-ui-field-wrapper', "dyna-ui-field-wrapper--mode-" + mode, "dyna-ui-field-wrapper--style-" + style, "dyna-ui-field-wrapper--color-" + color, "dyna-ui-field-wrapper--size-" + size].join(' ').trim();
					return React.createElement("div", { className: className, onClick: this.handleClick.bind(this) }, label ? React.createElement("div", { className: "dyna-ui-label", onClick: this.handleLabelClick.bind(this) }, React.createElement("label", { htmlFor: this.internalId, onClick: function onClick(e) {
							return e.stopPropagation();
						} }, label)) : null, React.createElement("div", { className: "dyna-ui-field-wrapper-container", onClick: this.handleContainerClick.bind(this) }, React.createElement("div", { className: "dyna-ui-field-wrapper-required", onClick: this.handleContainerClick.bind(this) }, required), React.createElement("div", { className: "dyna-ui-field-wrapper-isLoading", onClick: this.handleContainerClick.bind(this) }, isLoading), React.createElement("div", { className: "dyna-ui-field-wrapper-control-container", ref: function ref(element) {
							return _this.controlContainerElement = element;
						}, onClick: this.handleContainerClick.bind(this) }, children), React.createElement("div", { className: "dyna-ui-field-wrapper-validation-message", onClick: this.handleContainerClick.bind(this) }, validationMessage), React.createElement("div", { className: "dyna-ui-field-wrapper-footer", onClick: this.handleContainerClick.bind(this) }, footer)));
				};
				DynaFieldWrapper.defaultProps = {
					className: null,
					mode: EMode.EDIT,
					style: EStyle.INLINE_ROUNDED,
					color: dyna_ui_styles_1.EColor.WHITE_BLACK,
					size: ESize.MEDIUM,
					label: null,
					required: null,
					isLoading: null,
					children: null,
					inputElementSelector: null,
					validationMessage: null,
					footer: null,
					onClick: function onClick() {
						return undefined;
					},
					onFocus: function onFocus() {
						return undefined;
					}
				};
				return DynaFieldWrapper;
			}(React.Component);
			exports.DynaFieldWrapper = DynaFieldWrapper;

			/***/
		},
		/* 6 */
		/***/function (module, exports) {

			module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

			/***/
		},
		/* 7 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";
			/* WEBPACK VAR INJECTION */
			(function (module) {
				var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};

				(function webpackUniversalModuleDefinition(root, factory) {
					if ((false ? 'undefined' : _typeof(exports)) === 'object' && (false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["dyna-guid"] = factory();else root["dyna-guid"] = factory();
				})(undefined, function () {
					return (/******/function (modules) {
							// webpackBootstrap
							/******/ // The module cache
							/******/var installedModules = {};
							/******/
							/******/ // The require function
							/******/function __webpack_require__(moduleId) {
								/******/
								/******/ // Check if module is in cache
								/******/if (installedModules[moduleId]) {
									/******/return installedModules[moduleId].exports;
									/******/
								}
								/******/ // Create a new module (and put it into the cache)
								/******/var module = installedModules[moduleId] = {
									/******/i: moduleId,
									/******/l: false,
									/******/exports: {}
									/******/ };
								/******/
								/******/ // Execute the module function
								/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
								/******/
								/******/ // Flag the module as loaded
								/******/module.l = true;
								/******/
								/******/ // Return the exports of the module
								/******/return module.exports;
								/******/
							}
							/******/
							/******/
							/******/ // expose the modules object (__webpack_modules__)
							/******/__webpack_require__.m = modules;
							/******/
							/******/ // expose the module cache
							/******/__webpack_require__.c = installedModules;
							/******/
							/******/ // identity function for calling harmony imports with the correct context
							/******/__webpack_require__.i = function (value) {
								return value;
							};
							/******/
							/******/ // define getter function for harmony exports
							/******/__webpack_require__.d = function (exports, name, getter) {
								/******/if (!__webpack_require__.o(exports, name)) {
									/******/Object.defineProperty(exports, name, {
										/******/configurable: false,
										/******/enumerable: true,
										/******/get: getter
										/******/ });
									/******/
								}
								/******/
							};
							/******/
							/******/ // getDefaultExport function for compatibility with non-harmony modules
							/******/__webpack_require__.n = function (module) {
								/******/var getter = module && module.__esModule ?
								/******/function getDefault() {
									return module['default'];
								} :
								/******/function getModuleExports() {
									return module;
								};
								/******/__webpack_require__.d(getter, 'a', getter);
								/******/return getter;
								/******/
							};
							/******/
							/******/ // Object.prototype.hasOwnProperty.call
							/******/__webpack_require__.o = function (object, property) {
								return Object.prototype.hasOwnProperty.call(object, property);
							};
							/******/
							/******/ // __webpack_public_path__
							/******/__webpack_require__.p = "/dist/";
							/******/
							/******/ // Load entry module and return exports
							/******/return __webpack_require__(__webpack_require__.s = 1);
							/******/
						}(
						/************************************************************************/
						/******/[
						/* 0 */
						/***/function (module, exports, __webpack_require__) {

							"use strict";

							Object.defineProperty(exports, "__esModule", { value: true });
							var random = function random() {
								return Math.floor(1000000000 + Math.random() * 0x10000000 /* 65536 */).toString(18).substr(0, 8);
							};
							exports.guid = function (blocks) {
								if (blocks === void 0) {
									blocks = 2;
								}
								var date = new Date();
								var datePart = (Number(date) * 3).toString().split("").reverse().join("");
								var timeZonePart = new Date().getTimezoneOffset();
								if (timeZonePart < 0) {
									timeZonePart = -timeZonePart;
									timeZonePart = '7' + timeZonePart;
								} else {
									timeZonePart = '3' + timeZonePart;
								}
								var output = '';
								for (var i = 0; i < blocks; i++) {
									output += random() + '-';
								}output += datePart;
								output += timeZonePart;
								return output;
							};

							/***/
						},
						/* 1 */
						/***/function (module, exports, __webpack_require__) {

							module.exports = __webpack_require__(0);

							/***/
						}]
						/******/)
					);
				});
				/* WEBPACK VAR INJECTION */
			}).call(exports, __webpack_require__(0)(module));

			/***/
		},
		/* 8 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";
			/* WEBPACK VAR INJECTION */
			(function (module) {
				var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};

				(function webpackUniversalModuleDefinition(root, factory) {
					if ((false ? 'undefined' : _typeof(exports)) === 'object' && (false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["dyna-ui-styles"] = factory();else root["dyna-ui-styles"] = factory();
				})(undefined, function () {
					return (/******/function (modules) {
							// webpackBootstrap
							/******/ // The module cache
							/******/var installedModules = {};
							/******/
							/******/ // The require function
							/******/function __webpack_require__(moduleId) {
								/******/
								/******/ // Check if module is in cache
								/******/if (installedModules[moduleId]) {
									/******/return installedModules[moduleId].exports;
									/******/
								}
								/******/ // Create a new module (and put it into the cache)
								/******/var module = installedModules[moduleId] = {
									/******/i: moduleId,
									/******/l: false,
									/******/exports: {}
									/******/ };
								/******/
								/******/ // Execute the module function
								/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
								/******/
								/******/ // Flag the module as loaded
								/******/module.l = true;
								/******/
								/******/ // Return the exports of the module
								/******/return module.exports;
								/******/
							}
							/******/
							/******/
							/******/ // expose the modules object (__webpack_modules__)
							/******/__webpack_require__.m = modules;
							/******/
							/******/ // expose the module cache
							/******/__webpack_require__.c = installedModules;
							/******/
							/******/ // identity function for calling harmony imports with the correct context
							/******/__webpack_require__.i = function (value) {
								return value;
							};
							/******/
							/******/ // define getter function for harmony exports
							/******/__webpack_require__.d = function (exports, name, getter) {
								/******/if (!__webpack_require__.o(exports, name)) {
									/******/Object.defineProperty(exports, name, {
										/******/configurable: false,
										/******/enumerable: true,
										/******/get: getter
										/******/ });
									/******/
								}
								/******/
							};
							/******/
							/******/ // getDefaultExport function for compatibility with non-harmony modules
							/******/__webpack_require__.n = function (module) {
								/******/var getter = module && module.__esModule ?
								/******/function getDefault() {
									return module['default'];
								} :
								/******/function getModuleExports() {
									return module;
								};
								/******/__webpack_require__.d(getter, 'a', getter);
								/******/return getter;
								/******/
							};
							/******/
							/******/ // Object.prototype.hasOwnProperty.call
							/******/__webpack_require__.o = function (object, property) {
								return Object.prototype.hasOwnProperty.call(object, property);
							};
							/******/
							/******/ // __webpack_public_path__
							/******/__webpack_require__.p = "/dist/";
							/******/
							/******/ // Load entry module and return exports
							/******/return __webpack_require__(__webpack_require__.s = 1);
							/******/
						}(
						/************************************************************************/
						/******/[
						/* 0 */
						/***/function (module, exports, __webpack_require__) {

							"use strict";

							Object.defineProperty(exports, "__esModule", { value: true });
							var EColor;
							(function (EColor) {
								EColor["BLACK_WHITE"] = "BLACK_WHITE";
								EColor["BLACK_ORANGE"] = "BLACK_ORANGE";
								EColor["TRANSPARENT_ORANGE"] = "TRANSPARENT_ORANGE";
								EColor["TRANSPARENT_WHITE"] = "TRANSPARENT_WHITE";
								EColor["ORANGE_WHITE"] = "ORANGE_WHITE";
								EColor["RED_WHITE"] = "RED_WHITE";
								EColor["GREY_WHITE"] = "GREY_WHITE";
								EColor["WHITE_BLACK"] = "WHITE_BLACK";
								EColor["WHITE_RED"] = "WHITE_RED";
								EColor["WHITE_ORANGE"] = "WHITE_ORANGE";
							})(EColor = exports.EColor || (exports.EColor = {}));

							/***/
						},
						/* 1 */
						/***/function (module, exports, __webpack_require__) {

							module.exports = __webpack_require__(0);

							/***/
						}]
						/******/)
					);
				});
				/* WEBPACK VAR INJECTION */
			}).call(exports, __webpack_require__(0)(module));

			/***/
		},
		/* 9 */
		/***/function (module, exports, __webpack_require__) {

			// style-loader: Adds some css to the DOM by adding a <style> tag

			// load the styles
			var content = __webpack_require__(10);
			if (typeof content === 'string') content = [[module.i, content, '']];
			// Prepare cssTransformation
			var transform;

			var options = {};
			options.transform = transform;
			// add the styles to the DOM
			var update = __webpack_require__(2)(content, options);
			if (content.locals) module.exports = content.locals;
			// Hot Module Replacement
			if (false) {
				// When the styles change, update the <style> tags
				if (!content.locals) {
					module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./style.less", function () {
						var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./style.less");
						if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
						update(newContent);
					});
				}
				// When the module is disposed, remove the <style> tags
				module.hot.dispose(function () {
					update();
				});
			}

			/***/
		},
		/* 10 */
		/***/function (module, exports, __webpack_require__) {

			exports = module.exports = __webpack_require__(1)(false);
			// imports


			// module
			exports.push([module.i, ".dyna-ui-field-wrapper {\n  outline: none;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-label label {\n  margin: 0;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-required {\n  opacity: 1;\n  -webkit-transition: opacity 250ms ease-in-out;\n  transition: opacity 250ms ease-in-out;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-isLoading {\n  opacity: 1;\n  -webkit-transition: opacity 250ms ease-in-out;\n  transition: opacity 250ms ease-in-out;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container input,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container select {\n  font-size: inherit;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  opacity: 1;\n  -webkit-transition: opacity 250ms ease-in-out;\n  transition: opacity 250ms ease-in-out;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border: 1px solid;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-label {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  border-right: 1px solid;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-field-wrapper-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  position: relative;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-required {\n  position: absolute;\n  top: 4px;\n  right: 16px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-isLoading {\n  position: absolute;\n  bottom: 4px;\n  right: 16px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container {\n  width: 100%;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container > * {\n  width: 100%;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  position: absolute;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-XSMALL .dyna-ui-label,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-SMALL .dyna-ui-label {\n  padding: 12px;\n  font-size: 14px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-XSMALL .dyna-ui-field-wrapper-container,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-SMALL .dyna-ui-field-wrapper-container {\n  padding: 8px 12px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-XSMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-required,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-SMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-required {\n  font-size: 11px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-XSMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-isLoading,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-SMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-isLoading {\n  font-size: 11px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-XSMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-SMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container {\n  position: relative;\n  top: 3px;\n  font-size: 14px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-XSMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-SMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  font-size: 12px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-MEDIUM .dyna-ui-label {\n  padding: 16px;\n  font-size: 14px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-MEDIUM .dyna-ui-field-wrapper-container {\n  padding: 16px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-MEDIUM .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-required {\n  font-size: 11px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-MEDIUM .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-isLoading {\n  font-size: 11px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-MEDIUM .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container {\n  font-size: 14px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-MEDIUM .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  font-size: 12px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-LARGE .dyna-ui-label {\n  padding: 24px;\n  font-size: 20px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-LARGE .dyna-ui-field-wrapper-container {\n  padding: 24px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-LARGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-required {\n  font-size: 11px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-LARGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-isLoading {\n  font-size: 11px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-LARGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container {\n  font-size: 20px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-LARGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  font-size: 12px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-required,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-isLoading,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  opacity: 0.01;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container {\n  cursor: default;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--mode-EDIT {\n  cursor: pointer;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--mode-EDIT .dyna-ui-label label {\n  cursor: pointer;\n}\n", ""]);

			// exports


			/***/
		},
		/* 11 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			/**
    * When source maps are enabled, `style-loader` uses a link element with a data-uri to
    * embed the css on the page. This breaks all relative urls because now they are relative to a
    * bundle instead of the current page.
    *
    * One solution is to only use full urls, but that may be impossible.
    *
    * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
    *
    * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
    *
    */

			module.exports = function (css) {
				// get current location
				var location = typeof window !== "undefined" && window.location;

				if (!location) {
					throw new Error("fixUrls requires window.location");
				}

				// blank or null?
				if (!css || typeof css !== "string") {
					return css;
				}

				var baseUrl = location.protocol + "//" + location.host;
				var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

				// convert each url(...)
				/*
    This regular expression is just a way to recursively match brackets within
    a string.
    	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
       (  = Start a capturing group
         (?:  = Start a non-capturing group
             [^)(]  = Match anything that isn't a parentheses
             |  = OR
             \(  = Match a start parentheses
                 (?:  = Start another non-capturing groups
                     [^)(]+  = Match anything that isn't a parentheses
                     |  = OR
                     \(  = Match a start parentheses
                         [^)(]*  = Match anything that isn't a parentheses
                     \)  = Match a end parentheses
                 )  = End Group
                 *\) = Match anything and then a close parens
             )  = Close non-capturing group
             *  = Match anything
          )  = Close capturing group
     \)  = Match a close parens
    	 /gi  = Get all matches, not the first.  Be case insensitive.
     */
				var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
					// strip quotes (if they exist)
					var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
						return $1;
					}).replace(/^'(.*)'$/, function (o, $1) {
						return $1;
					});

					// already a full url? no change
					if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
						return fullMatch;
					}

					// convert the url to a full url
					var newUrl;

					if (unquotedOrigUrl.indexOf("//") === 0) {
						//TODO: should we add protocol?
						newUrl = unquotedOrigUrl;
					} else if (unquotedOrigUrl.indexOf("/") === 0) {
						// path should be relative to the base url
						newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
					} else {
						// path should be relative to current directory
						newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
					}

					// send back the fixed url(...)
					return "url(" + JSON.stringify(newUrl) + ")";
				});

				// send back the fixed css
				return fixedCss;
			};

			/***/
		},
		/* 12 */
		/***/function (module, exports, __webpack_require__) {

			// style-loader: Adds some css to the DOM by adding a <style> tag

			// load the styles
			var content = __webpack_require__(13);
			if (typeof content === 'string') content = [[module.i, content, '']];
			// Prepare cssTransformation
			var transform;

			var options = {};
			options.transform = transform;
			// add the styles to the DOM
			var update = __webpack_require__(2)(content, options);
			if (content.locals) module.exports = content.locals;
			// Hot Module Replacement
			if (false) {
				// When the styles change, update the <style> tags
				if (!content.locals) {
					module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./color.less", function () {
						var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./color.less");
						if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
						update(newContent);
					});
				}
				// When the module is disposed, remove the <style> tags
				module.hot.dispose(function () {
					update();
				});
			}

			/***/
		},
		/* 13 */
		/***/function (module, exports, __webpack_require__) {

			exports = module.exports = __webpack_require__(1)(false);
			// imports


			// module
			exports.push([module.i, ".dyna-ui-field-wrapper {\n  outline: none;\n  -webkit-transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container input,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container select {\n  color: inherit;\n  background-color: transparent;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_BLACK {\n  border-color: #222223;\n  background-color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_BLACK .dyna-ui-field-wrapper-container {\n  background-color: white;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_BLACK .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_BLACK.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #D0D3D4;\n  color: #222223;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-GREY_WHITE {\n  border-color: #D0D3D4;\n  background-color: #65665C;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-GREY_WHITE .dyna-ui-label {\n  border-color: #D0D3D4;\n  background-color: #51534A;\n  color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-GREY_WHITE .dyna-ui-field-wrapper-container {\n  background-color: white;\n  color: #51534A;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-GREY_WHITE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-GREY_WHITE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #51534A;\n  color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_RED {\n  border-color: #E4002B;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_RED .dyna-ui-label {\n  border-color: #C8102E;\n  color: #E4002B;\n  background-color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_RED .dyna-ui-field-wrapper-container {\n  background-color: white;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_RED .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_RED.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #D0D3D4;\n  color: #E4002B;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-RED_WHITE {\n  border-color: #E4002B;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-RED_WHITE .dyna-ui-label {\n  border-color: #C8102E;\n  color: #D0D3D4;\n  background-color: #E4002B;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-RED_WHITE .dyna-ui-field-wrapper-container {\n  background-color: white;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-RED_WHITE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-RED_WHITE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #E4002B;\n  color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_WHITE {\n  border-color: #222223;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_WHITE .dyna-ui-label {\n  border-color: #212721;\n  color: #D0D3D4;\n  background-color: #222223;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_WHITE .dyna-ui-field-wrapper-container {\n  background-color: white;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_WHITE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_WHITE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #222223;\n  color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_WHITE {\n  border-color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_WHITE .dyna-ui-label {\n  color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_WHITE .dyna-ui-field-wrapper-container {\n  color: #D0D3D4;\n  background-color: transparent;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_WHITE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_WHITE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: transparent;\n  color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_ORANGE {\n  border-color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_ORANGE .dyna-ui-label {\n  color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_ORANGE .dyna-ui-field-wrapper-container {\n  color: #FF6900;\n  background-color: transparent;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_ORANGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_ORANGE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: transparent;\n  color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-ORANGE_WHITE {\n  border-color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-ORANGE_WHITE .dyna-ui-label {\n  border-color: #FFAE62;\n  background-color: #FF6900;\n  color: #D9D9D6;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-ORANGE_WHITE .dyna-ui-field-wrapper-container {\n  background-color: white;\n  color: #2D2926;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-ORANGE_WHITE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-ORANGE_WHITE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #FF6900;\n  color: #D9D9D6;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_ORANGE {\n  border-color: #222223;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_ORANGE .dyna-ui-label {\n  border-color: #212721;\n  background-color: #222223;\n  color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_ORANGE .dyna-ui-field-wrapper-container {\n  background-color: #FF6900;\n  color: #2D2926;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_ORANGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_ORANGE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #222223;\n  color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE {\n  border-color: #D9D9D6;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE .dyna-ui-label {\n  border-color: #C8C9C7;\n  background-color: #D9D9D6;\n  color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE .dyna-ui-field-wrapper-container {\n  background-color: white;\n  color: #2D2926;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #D9D9D6;\n  color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE {\n  border-color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE .dyna-ui-label {\n  border-color: #FF6900;\n  background-color: #D9D9D6;\n  color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE .dyna-ui-field-wrapper-container {\n  border-color: #FFAE62;\n  background-color: white;\n  color: #2D2926;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #D9D9D6;\n  color: #2D2926;\n}\n.dyna-ui-field-wrapper .dyna-ui-label {\n  -webkit-transition: color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container {\n  -webkit-transition: color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  -webkit-transition: color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n", ""]);

			// exports


			/***/
		}]
		/******/)
	);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var react_motion_1 = __webpack_require__(20);
var dyna_ui_field_wrapper_1 = __webpack_require__(12);
__webpack_require__(34);
var DynaPlainRadioButton = /** @class */ (function (_super) {
    __extends(DynaPlainRadioButton, _super);
    function DynaPlainRadioButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynaPlainRadioButton.prototype.handleClick = function () {
        var _a = this.props, mode = _a.mode, checked = _a.checked, disabled = _a.disabled, onChange = _a.onChange;
        if (disabled)
            return;
        if (mode !== dyna_ui_field_wrapper_1.EMode.EDIT)
            return;
        onChange(!checked);
    };
    DynaPlainRadioButton.prototype.render = function () {
        var _a = this.props, cn = _a.className, mode = _a.mode, color = _a.color, size = _a.size, label = _a.label, disabled = _a.disabled, checked = _a.checked;
        var className = [
            "dyna-plain-radio-button",
            cn,
            "dyna-plain-radio-button--" + (disabled ? 'disabled' : 'enabled'),
            "dyna-plain-radio-button--mode-" + mode,
            "dyna-plain-radio-button--color-" + color,
        ].join(' ').trim();
        var strokeWidth = 1;
        var coreBulletWidth = checked ? (size / 2) * 0.55 : 0;
        var motionStyle;
        if (checked)
            motionStyle = { bulletWidth: { stiffness: 300, damping: 10, val: coreBulletWidth, precision: 1 } };
        else
            motionStyle = { bulletWidth: { stiffness: 300, damping: 26, val: coreBulletWidth, precision: 1 } };
        return (React.createElement("div", { className: className, onClick: this.handleClick.bind(this) },
            React.createElement("div", { className: "bullet-container" },
                React.createElement("svg", { width: size, height: size, xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("g", null,
                        React.createElement("circle", { cx: size / 2, cy: size / 2, r: (size / 2) - strokeWidth, strokeWidth: strokeWidth, fill: "transparent" }),
                        React.createElement(react_motion_1.Motion, { defaultStyle: { bulletWidth: 0 }, style: motionStyle }, function (interpolatingStyle) { return (React.createElement("circle", { cx: size / 2, cy: size / 2, r: interpolatingStyle.bulletWidth >= 0 ? Number(interpolatingStyle.bulletWidth) : 0, strokeWidth: strokeWidth })); })))),
            React.createElement("div", { className: "text-container" }, label)));
    };
    DynaPlainRadioButton.defaultProps = {
        className: '',
        mode: dyna_ui_field_wrapper_1.EMode.EDIT,
        color: dyna_ui_field_wrapper_1.EColor.WHITE_BLACK,
        checked: true,
        label: '',
        size: 20,
        disabled: false,
        onChange: function (checked) { return undefined; },
    };
    return DynaPlainRadioButton;
}(React.Component));
exports.DynaPlainRadioButton = DynaPlainRadioButton;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(9);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = {
  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
  gentle: { stiffness: 120, damping: 14 },
  wobbly: { stiffness: 180, damping: 12 },
  stiff: { stiffness: 210, damping: 20 }
};
module.exports = exports["default"];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(36);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynaPlainRadioButton_1 = __webpack_require__(13);
exports.DynaPlainRadioButton = DynaPlainRadioButton_1.DynaPlainRadioButton;
var DynaRadioButton_1 = __webpack_require__(37);
exports.DynaRadioButton = DynaRadioButton_1.DynaRadioButton;
var dyna_ui_field_wrapper_1 = __webpack_require__(12);
exports.ESize = dyna_ui_field_wrapper_1.ESize;
exports.EStyle = dyna_ui_field_wrapper_1.EStyle;
exports.EColor = dyna_ui_field_wrapper_1.EColor;
exports.EMode = dyna_ui_field_wrapper_1.EMode;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequire(obj) {
  return obj && obj.__esModule ? obj['default'] : obj;
}

var _Motion = __webpack_require__(21);

exports.Motion = _interopRequire(_Motion);

var _StaggeredMotion = __webpack_require__(28);

exports.StaggeredMotion = _interopRequire(_StaggeredMotion);

var _TransitionMotion = __webpack_require__(29);

exports.TransitionMotion = _interopRequire(_TransitionMotion);

var _spring = __webpack_require__(31);

exports.spring = _interopRequire(_spring);

var _presets = __webpack_require__(15);

exports.presets = _interopRequire(_presets);

var _stripStyle = __webpack_require__(2);

exports.stripStyle = _interopRequire(_stripStyle);

// deprecated, dummy warning function

var _reorderKeys = __webpack_require__(32);

exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _mapToZero = __webpack_require__(3);

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(2);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(4);

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(5);

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(6);

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(7);

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var msPerFrame = 1000 / 60;

var Motion = function (_React$Component) {
  _inherits(Motion, _React$Component);

  _createClass(Motion, null, [{
    key: 'propTypes',
    value: {
      // TOOD: warn against putting a config in here
      defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
      style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
      children: _propTypes2['default'].func.isRequired,
      onRest: _propTypes2['default'].func
    },
    enumerable: true
  }]);

  function Motion(props) {
    var _this = this;

    _classCallCheck(this, Motion);

    _React$Component.call(this, props);
    this.wasAnimating = false;
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyle = null;

    this.clearUnreadPropStyle = function (destStyle) {
      var dirty = false;
      var _state = _this.state;
      var currentStyle = _state.currentStyle;
      var currentVelocity = _state.currentVelocity;
      var lastIdealStyle = _state.lastIdealStyle;
      var lastIdealVelocity = _state.lastIdealVelocity;

      for (var key in destStyle) {
        if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
          continue;
        }

        var styleValue = destStyle[key];
        if (typeof styleValue === 'number') {
          if (!dirty) {
            dirty = true;
            currentStyle = _extends({}, currentStyle);
            currentVelocity = _extends({}, currentVelocity);
            lastIdealStyle = _extends({}, lastIdealStyle);
            lastIdealVelocity = _extends({}, lastIdealVelocity);
          }

          currentStyle[key] = styleValue;
          currentVelocity[key] = 0;
          lastIdealStyle[key] = styleValue;
          lastIdealVelocity[key] = 0;
        }
      }

      if (dirty) {
        _this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
      }
    };

    this.startAnimationIfNecessary = function () {
      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        // check if we need to animate in the first place
        var propsStyle = _this.props.style;
        if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
          if (_this.wasAnimating && _this.props.onRest) {
            _this.props.onRest();
          }

          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.wasAnimating = false;
          _this.accumulatedTime = 0;
          return;
        }

        _this.wasAnimating = true;

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var newLastIdealStyle = {};
        var newLastIdealVelocity = {};
        var newCurrentStyle = {};
        var newCurrentVelocity = {};

        for (var key in propsStyle) {
          if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
            continue;
          }

          var styleValue = propsStyle[key];
          if (typeof styleValue === 'number') {
            newCurrentStyle[key] = styleValue;
            newCurrentVelocity[key] = 0;
            newLastIdealStyle[key] = styleValue;
            newLastIdealVelocity[key] = 0;
          } else {
            var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
            var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
            for (var i = 0; i < framesToCatchUp; i++) {
              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              newLastIdealStyleValue = _stepper[0];
              newLastIdealVelocityValue = _stepper[1];
            }

            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

            var nextIdealX = _stepper2[0];
            var nextIdealV = _stepper2[1];

            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
            newLastIdealStyle[key] = newLastIdealStyleValue;
            newLastIdealVelocity[key] = newLastIdealVelocityValue;
          }
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyle: newCurrentStyle,
          currentVelocity: newCurrentVelocity,
          lastIdealStyle: newLastIdealStyle,
          lastIdealVelocity: newLastIdealVelocity
        });

        _this.unreadPropStyle = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  Motion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyle = _props.defaultStyle;
    var style = _props.style;

    var currentStyle = defaultStyle || _stripStyle2['default'](style);
    var currentVelocity = _mapToZero2['default'](currentStyle);
    return {
      currentStyle: currentStyle,
      currentVelocity: currentVelocity,
      lastIdealStyle: currentStyle,
      lastIdealVelocity: currentVelocity
    };
  };

  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400

  Motion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  Motion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyle != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyle);
    }

    this.unreadPropStyle = props.style;
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  Motion.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  Motion.prototype.render = function render() {
    var renderedChildren = this.props.children(this.state.currentStyle);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return Motion;
}(_react2['default'].Component);

exports['default'] = Motion;
module.exports = exports['default'];

// after checking for unreadPropStyle != null, we manually go set the
// non-interpolating values (those that are a number, without a spring
// config)

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    module.exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    module.exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function getNanoSeconds() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var emptyFunction = __webpack_require__(9);
var invariant = __webpack_require__(10);
var warning = __webpack_require__(14);
var assign = __webpack_require__(25);

var ReactPropTypesSecret = __webpack_require__(11);
var checkPropTypes = __webpack_require__(26);

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(10);
  var warning = __webpack_require__(14);
  var ReactPropTypesSecret = __webpack_require__(11);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, _typeof(typeSpecs[typeSpecName]));
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(9);
var invariant = __webpack_require__(10);
var ReactPropTypesSecret = __webpack_require__(11);

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _mapToZero = __webpack_require__(3);

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(2);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(4);

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(5);

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(6);

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(7);

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var msPerFrame = 1000 / 60;

function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
  for (var i = 0; i < currentStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
      return false;
    }
  }
  return true;
}

var StaggeredMotion = function (_React$Component) {
  _inherits(StaggeredMotion, _React$Component);

  _createClass(StaggeredMotion, null, [{
    key: 'propTypes',
    value: {
      // TOOD: warn against putting a config in here
      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
      styles: _propTypes2['default'].func.isRequired,
      children: _propTypes2['default'].func.isRequired
    },
    enumerable: true
  }]);

  function StaggeredMotion(props) {
    var _this = this;

    _classCallCheck(this, StaggeredMotion);

    _React$Component.call(this, props);
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyles = null;

    this.clearUnreadPropStyle = function (unreadPropStyles) {
      var _state = _this.state;
      var currentStyles = _state.currentStyles;
      var currentVelocities = _state.currentVelocities;
      var lastIdealStyles = _state.lastIdealStyles;
      var lastIdealVelocities = _state.lastIdealVelocities;

      var someDirty = false;
      for (var i = 0; i < unreadPropStyles.length; i++) {
        var unreadPropStyle = unreadPropStyles[i];
        var dirty = false;

        for (var key in unreadPropStyle) {
          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
            continue;
          }

          var styleValue = unreadPropStyle[key];
          if (typeof styleValue === 'number') {
            if (!dirty) {
              dirty = true;
              someDirty = true;
              currentStyles[i] = _extends({}, currentStyles[i]);
              currentVelocities[i] = _extends({}, currentVelocities[i]);
              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
            }
            currentStyles[i][key] = styleValue;
            currentVelocities[i][key] = 0;
            lastIdealStyles[i][key] = styleValue;
            lastIdealVelocities[i][key] = 0;
          }
        }
      }

      if (someDirty) {
        _this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
      }
    };

    this.startAnimationIfNecessary = function () {
      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        var destStyles = _this.props.styles(_this.state.lastIdealStyles);

        // check if we need to animate in the first place
        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.accumulatedTime = 0;
          return;
        }

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var newLastIdealStyles = [];
        var newLastIdealVelocities = [];
        var newCurrentStyles = [];
        var newCurrentVelocities = [];

        for (var i = 0; i < destStyles.length; i++) {
          var destStyle = destStyles[i];
          var newCurrentStyle = {};
          var newCurrentVelocity = {};
          var newLastIdealStyle = {};
          var newLastIdealVelocity = {};

          for (var key in destStyle) {
            if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
              continue;
            }

            var styleValue = destStyle[key];
            if (typeof styleValue === 'number') {
              newCurrentStyle[key] = styleValue;
              newCurrentVelocity[key] = 0;
              newLastIdealStyle[key] = styleValue;
              newLastIdealVelocity[key] = 0;
            } else {
              var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
              var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
              for (var j = 0; j < framesToCatchUp; j++) {
                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                newLastIdealStyleValue = _stepper[0];
                newLastIdealVelocityValue = _stepper[1];
              }

              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              var nextIdealX = _stepper2[0];
              var nextIdealV = _stepper2[1];

              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
              newLastIdealStyle[key] = newLastIdealStyleValue;
              newLastIdealVelocity[key] = newLastIdealVelocityValue;
            }
          }

          newCurrentStyles[i] = newCurrentStyle;
          newCurrentVelocities[i] = newCurrentVelocity;
          newLastIdealStyles[i] = newLastIdealStyle;
          newLastIdealVelocities[i] = newLastIdealVelocity;
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyles: newCurrentStyles,
          currentVelocities: newCurrentVelocities,
          lastIdealStyles: newLastIdealStyles,
          lastIdealVelocities: newLastIdealVelocities
        });

        _this.unreadPropStyles = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  StaggeredMotion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;

    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
    var currentVelocities = currentStyles.map(function (currentStyle) {
      return _mapToZero2['default'](currentStyle);
    });
    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: currentStyles,
      lastIdealVelocities: currentVelocities
    };
  };

  StaggeredMotion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  StaggeredMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyles != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  StaggeredMotion.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  StaggeredMotion.prototype.render = function render() {
    var renderedChildren = this.props.children(this.state.currentStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return StaggeredMotion;
}(_react2['default'].Component);

exports['default'] = StaggeredMotion;
module.exports = exports['default'];

// it's possible that currentStyle's value is stale: if props is immediately
// changed from 0 to 400 to spring(0) again, the async currentStyle is still
// at 0 (didn't have time to tick and interpolate even once). If we naively
// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
// In reality currentStyle should be 400

// after checking for unreadPropStyles != null, we manually go set the
// non-interpolating values (those that are a number, without a spring
// config)

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _mapToZero = __webpack_require__(3);

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(2);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(4);

var _stepper4 = _interopRequireDefault(_stepper3);

var _mergeDiff = __webpack_require__(30);

var _mergeDiff2 = _interopRequireDefault(_mergeDiff);

var _performanceNow = __webpack_require__(5);

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(6);

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(7);

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var msPerFrame = 1000 / 60;

// the children function & (potential) styles function asks as param an
// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
// {key: string, data?: any, style: PlainStyle}. However, the way we keep
// internal states doesn't contain such a data structure (check the state and
// TransitionMotionState). So when children function and others ask for such
// data we need to generate them on the fly by combining mergedPropsStyles and
// currentStyles/lastIdealStyles
function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
  // Copy the value to a `const` so that Flow understands that the const won't
  // change and will be non-nullable in the callback below.
  var cUnreadPropStyles = unreadPropStyles;
  if (cUnreadPropStyles == null) {
    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
      return {
        key: mergedPropsStyle.key,
        data: mergedPropsStyle.data,
        style: plainStyles[i]
      };
    });
  }
  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
    for (var j = 0; j < cUnreadPropStyles.length; j++) {
      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
        return {
          key: cUnreadPropStyles[j].key,
          data: cUnreadPropStyles[j].data,
          style: plainStyles[i]
        };
      }
    }
    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
  });
}

function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
  if (mergedPropsStyles.length !== destStyles.length) {
    return false;
  }

  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (mergedPropsStyles[i].key !== destStyles[i].key) {
      return false;
    }
  }

  // we have the invariant that mergedPropsStyles and
  // currentStyles/currentVelocities/last* are synced in terms of cells, see
  // mergeAndSync comment for more info
  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
      return false;
    }
  }

  return true;
}

// core key merging logic

// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
// c}, previous current (interpolating) style is {a, b}
// **invariant**: current[i] corresponds to merged[i] in terms of key

// steps:
// turn merged style into {a?, b, c}
//    add c, value of c is destStyles.c
//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
// turn current (interpolating) style from {a, b} into {a?, b, c}
//    maybe remove a
//    certainly add c, value of c is willEnter(c)
// loop over merged and construct new current
// dest doesn't change, that's owner's
function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
    var leavingStyle = willLeave(oldMergedPropsStyle);
    if (leavingStyle == null) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
  });

  var newCurrentStyles = [];
  var newCurrentVelocities = [];
  var newLastIdealStyles = [];
  var newLastIdealVelocities = [];
  for (var i = 0; i < newMergedPropsStyles.length; i++) {
    var newMergedPropsStyleCell = newMergedPropsStyles[i];
    var foundOldIndex = null;
    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
        foundOldIndex = j;
        break;
      }
    }
    // TODO: key search code
    if (foundOldIndex == null) {
      var plainStyle = willEnter(newMergedPropsStyleCell);
      newCurrentStyles[i] = plainStyle;
      newLastIdealStyles[i] = plainStyle;

      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
      newCurrentVelocities[i] = velocity;
      newLastIdealVelocities[i] = velocity;
    } else {
      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
    }
  }

  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
}

var TransitionMotion = function (_React$Component) {
  _inherits(TransitionMotion, _React$Component);

  _createClass(TransitionMotion, null, [{
    key: 'propTypes',
    value: {
      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
        key: _propTypes2['default'].string.isRequired,
        data: _propTypes2['default'].any,
        style: _propTypes2['default'].objectOf(_propTypes2['default'].number).isRequired
      })),
      styles: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
        key: _propTypes2['default'].string.isRequired,
        data: _propTypes2['default'].any,
        style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired
      }))]).isRequired,
      children: _propTypes2['default'].func.isRequired,
      willEnter: _propTypes2['default'].func,
      willLeave: _propTypes2['default'].func,
      didLeave: _propTypes2['default'].func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      willEnter: function willEnter(styleThatEntered) {
        return _stripStyle2['default'](styleThatEntered.style);
      },
      // recall: returning null makes the current unmounting TransitionStyle
      // disappear immediately
      willLeave: function willLeave() {
        return null;
      },
      didLeave: function didLeave() {}
    },
    enumerable: true
  }]);

  function TransitionMotion(props) {
    var _this = this;

    _classCallCheck(this, TransitionMotion);

    _React$Component.call(this, props);
    this.unmounting = false;
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyles = null;

    this.clearUnreadPropStyle = function (unreadPropStyles) {
      var _mergeAndSync = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, unreadPropStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

      var mergedPropsStyles = _mergeAndSync[0];
      var currentStyles = _mergeAndSync[1];
      var currentVelocities = _mergeAndSync[2];
      var lastIdealStyles = _mergeAndSync[3];
      var lastIdealVelocities = _mergeAndSync[4];

      for (var i = 0; i < unreadPropStyles.length; i++) {
        var unreadPropStyle = unreadPropStyles[i].style;
        var dirty = false;

        for (var key in unreadPropStyle) {
          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
            continue;
          }

          var styleValue = unreadPropStyle[key];
          if (typeof styleValue === 'number') {
            if (!dirty) {
              dirty = true;
              currentStyles[i] = _extends({}, currentStyles[i]);
              currentVelocities[i] = _extends({}, currentVelocities[i]);
              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
              mergedPropsStyles[i] = {
                key: mergedPropsStyles[i].key,
                data: mergedPropsStyles[i].data,
                style: _extends({}, mergedPropsStyles[i].style)
              };
            }
            currentStyles[i][key] = styleValue;
            currentVelocities[i][key] = 0;
            lastIdealStyles[i][key] = styleValue;
            lastIdealVelocities[i][key] = 0;
            mergedPropsStyles[i].style[key] = styleValue;
          }
        }
      }

      // unlike the other 2 components, we can't detect staleness and optionally
      // opt out of setState here. each style object's data might contain new
      // stuff we're not/cannot compare
      _this.setState({
        currentStyles: currentStyles,
        currentVelocities: currentVelocities,
        mergedPropsStyles: mergedPropsStyles,
        lastIdealStyles: lastIdealStyles,
        lastIdealVelocities: lastIdealVelocities
      });
    };

    this.startAnimationIfNecessary = function () {
      if (_this.unmounting) {
        return;
      }

      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        // https://github.com/chenglou/react-motion/pull/420
        // > if execution passes the conditional if (this.unmounting), then
        // executes async defaultRaf and after that component unmounts and after
        // that the callback of defaultRaf is called, then setState will be called
        // on unmounted component.
        if (_this.unmounting) {
          return;
        }

        var propStyles = _this.props.styles;
        var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;

        // check if we need to animate in the first place
        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.accumulatedTime = 0;
          return;
        }

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var _mergeAndSync2 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

        var newMergedPropsStyles = _mergeAndSync2[0];
        var newCurrentStyles = _mergeAndSync2[1];
        var newCurrentVelocities = _mergeAndSync2[2];
        var newLastIdealStyles = _mergeAndSync2[3];
        var newLastIdealVelocities = _mergeAndSync2[4];

        for (var i = 0; i < newMergedPropsStyles.length; i++) {
          var newMergedPropsStyle = newMergedPropsStyles[i].style;
          var newCurrentStyle = {};
          var newCurrentVelocity = {};
          var newLastIdealStyle = {};
          var newLastIdealVelocity = {};

          for (var key in newMergedPropsStyle) {
            if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
              continue;
            }

            var styleValue = newMergedPropsStyle[key];
            if (typeof styleValue === 'number') {
              newCurrentStyle[key] = styleValue;
              newCurrentVelocity[key] = 0;
              newLastIdealStyle[key] = styleValue;
              newLastIdealVelocity[key] = 0;
            } else {
              var newLastIdealStyleValue = newLastIdealStyles[i][key];
              var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
              for (var j = 0; j < framesToCatchUp; j++) {
                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                newLastIdealStyleValue = _stepper[0];
                newLastIdealVelocityValue = _stepper[1];
              }

              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              var nextIdealX = _stepper2[0];
              var nextIdealV = _stepper2[1];

              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
              newLastIdealStyle[key] = newLastIdealStyleValue;
              newLastIdealVelocity[key] = newLastIdealVelocityValue;
            }
          }

          newLastIdealStyles[i] = newLastIdealStyle;
          newLastIdealVelocities[i] = newLastIdealVelocity;
          newCurrentStyles[i] = newCurrentStyle;
          newCurrentVelocities[i] = newCurrentVelocity;
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyles: newCurrentStyles,
          currentVelocities: newCurrentVelocities,
          lastIdealStyles: newLastIdealStyles,
          lastIdealVelocities: newLastIdealVelocities,
          mergedPropsStyles: newMergedPropsStyles
        });

        _this.unreadPropStyles = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  TransitionMotion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;
    var willEnter = _props.willEnter;
    var willLeave = _props.willLeave;
    var didLeave = _props.didLeave;

    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;

    // this is special. for the first time around, we don't have a comparison
    // between last (no last) and current merged props. we'll compute last so:
    // say default is {a, b} and styles (dest style) is {b, c}, we'll
    // fabricate last as {a, b}
    var oldMergedPropsStyles = undefined;
    if (defaultStyles == null) {
      oldMergedPropsStyles = destStyles;
    } else {
      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
        // TODO: key search code
        for (var i = 0; i < destStyles.length; i++) {
          if (destStyles[i].key === defaultStyleCell.key) {
            return destStyles[i];
          }
        }
        return defaultStyleCell;
      });
    }
    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    });
    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    });

    var _mergeAndSync3 = mergeAndSync(
    // Because this is an old-style createReactClass component, Flow doesn't
    // understand that the willEnter and willLeave props have default values
    // and will always be present.
    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
    oldCurrentVelocities);

    var mergedPropsStyles = _mergeAndSync3[0];
    var currentStyles = _mergeAndSync3[1];
    var currentVelocities = _mergeAndSync3[2];
    var lastIdealStyles = _mergeAndSync3[3];
    var lastIdealVelocities = _mergeAndSync3[4];
    // oldLastIdealVelocities really

    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: lastIdealStyles,
      lastIdealVelocities: lastIdealVelocities,
      mergedPropsStyles: mergedPropsStyles
    };
  };

  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)

  TransitionMotion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  TransitionMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyles) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    var styles = props.styles;
    if (typeof styles === 'function') {
      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
    } else {
      this.unreadPropStyles = styles;
    }

    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  TransitionMotion.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounting = true;
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  TransitionMotion.prototype.render = function render() {
    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
    var renderedChildren = this.props.children(hydratedStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return TransitionMotion;
}(_react2['default'].Component);

exports['default'] = TransitionMotion;
module.exports = exports['default'];

// list of styles, each containing interpolating values. Part of what's passed
// to children function. Notice that this is
// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
// contains the key & data info (so that we only have a single source of truth
// for these, and to save space). Check the comment for `rehydrateStyles` to
// see how we regenerate the entirety of what's passed to children function

// the array that keeps track of currently rendered stuff! Including stuff
// that you've unmounted but that's still animating. This is where it lives

// it's possible that currentStyle's value is stale: if props is immediately
// changed from 0 to 400 to spring(0) again, the async currentStyle is still
// at 0 (didn't have time to tick and interpolate even once). If we naively
// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
// In reality currentStyle should be 400

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// core keys merging algorithm. If previous render's keys are [a, b], and the
// next render's [c, b, d], what's the final merged keys and ordering?

// - c and a must both be before b
// - b before d
// - ordering between a and c ambiguous

// this reduces to merging two partially ordered lists (e.g. lists where not
// every item has a definite ordering, like comparing a and c above). For the
// ambiguous ordering we deterministically choose to place the next render's
// item after the previous'; so c after a

// this is called a topological sorting. Except the existing algorithms don't
// work well with js bc of the amount of allocation, and isn't optimized for our
// current use-case bc the runtime is linear in terms of edges (see wiki for
// meaning), which is huge when two lists have many common elements


exports.__esModule = true;
exports['default'] = mergeDiff;

function mergeDiff(prev, next, onRemove) {
  // bookkeeping for easier access of a key's index below. This is 2 allocations +
  // potentially triggering chrome hash map mode for objs (so it might be faster

  var prevKeyIndex = {};
  for (var i = 0; i < prev.length; i++) {
    prevKeyIndex[prev[i].key] = i;
  }
  var nextKeyIndex = {};
  for (var i = 0; i < next.length; i++) {
    nextKeyIndex[next[i].key] = i;
  }

  // first, an overly elaborate way of merging prev and next, eliminating
  // duplicates (in terms of keys). If there's dupe, keep the item in next).
  // This way of writing it saves allocations
  var ret = [];
  for (var i = 0; i < next.length; i++) {
    ret[i] = next[i];
  }
  for (var i = 0; i < prev.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
      // merge in keys that the user desires to kill
      var fill = onRemove(i, prev[i]);
      if (fill != null) {
        ret.push(fill);
      }
    }
  }

  // now all the items all present. Core sorting logic to have the right order
  return ret.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a.key];
    var nextOrderB = nextKeyIndex[b.key];
    var prevOrderA = prevKeyIndex[a.key];
    var prevOrderB = prevKeyIndex[b.key];

    if (nextOrderA != null && nextOrderB != null) {
      // both keys in next
      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
    } else if (prevOrderA != null && prevOrderB != null) {
      // both keys in prev
      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
    } else if (nextOrderA != null) {
      // key a in next, key b in prev

      // how to determine the order between a and b? We find a "pivot" (term
      // abuse), a key present in both prev and next, that is sandwiched between
      // a and b. In the context of our above example, if we're comparing a and
      // d, b's (the only) pivot
      for (var i = 0; i < next.length; i++) {
        var pivot = next[i].key;
        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
          return 1;
        }
      }
      // pluggable. default to: next bigger than prev
      return 1;
    }
    // prevOrderA, nextOrderB
    for (var i = 0; i < next.length; i++) {
      var pivot = next[i].key;
      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
        continue;
      }
      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
        return -1;
      }
    }
    // pluggable. default to: next bigger than prev
    return -1;
  });
}

module.exports = exports['default'];
// to loop through and find a key's index each time), but I no longer care

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports['default'] = spring;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _presets = __webpack_require__(15);

var _presets2 = _interopRequireDefault(_presets);

var defaultConfig = _extends({}, _presets2['default'].noWobble, {
  precision: 0.01
});

function spring(val, config) {
  return _extends({}, defaultConfig, config, { val: val });
}

module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports['default'] = reorderKeys;

var hasWarned = false;

function reorderKeys() {
  if (process.env.NODE_ENV === 'development') {
    if (!hasWarned) {
      hasWarned = true;
      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
    }
  }
}

module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./DynaPlainRadioButton.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./DynaPlainRadioButton.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".dyna-plain-radio-button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition: opacity 250ms ease-in-out;\n  transition: opacity 250ms ease-in-out;\n}\n.dyna-plain-radio-button--enabled,\n.dyna-plain-radio-button--mode-EDIT {\n  cursor: pointer;\n  opacity: 1;\n}\n.dyna-plain-radio-button--disabled,\n.dyna-plain-radio-button--mode-VIEW {\n  cursor: default;\n  opacity: 0.8;\n}\n.dyna-plain-radio-button .bullet-container {\n  height: auto;\n  font-size: 0;\n}\n.dyna-plain-radio-button .bullet-container svg {\n  stroke: currentColor;\n  fill: currentColor;\n}\n.dyna-plain-radio-button .text-container {\n  height: auto;\n  margin-left: 8px;\n}\n.dyna-plain-radio-button--color-BLACK_WHITE {\n  color: #D0D3D4;\n}\n.dyna-plain-radio-button--color-BLACK_ORANGE {\n  color: #FF6900;\n}\n.dyna-plain-radio-button--color-TRANSPARENT_ORANGE {\n  color: #FF6900;\n}\n.dyna-plain-radio-button--color-TRANSPARENT_WHITE {\n  color: #D0D3D4;\n}\n.dyna-plain-radio-button--color-ORANGE_WHITE {\n  color: #D9D9D6;\n}\n.dyna-plain-radio-button--color-RED_WHITE {\n  color: #D0D3D4;\n}\n.dyna-plain-radio-button--color-GREY_WHITE {\n  color: #D0D3D4;\n}\n.dyna-plain-radio-button--color-WHITE_BLACK {\n  color: #222223;\n}\n.dyna-plain-radio-button--color-WHITE_RED {\n  color: #E4002B;\n}\n.dyna-plain-radio-button--color-WHITE_ORANGE {\n  color: #FF6900;\n}\n", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var dyna_ui_field_wrapper_1 = __webpack_require__(12);
var DynaPlainRadioButton_1 = __webpack_require__(13);
__webpack_require__(38);
var DynaRadioButton = /** @class */ (function (_super) {
    __extends(DynaRadioButton, _super);
    function DynaRadioButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynaRadioButton.prototype.handleClick = function () {
        var _a = this.props, mode = _a.mode, name = _a.name, disabled = _a.disabled, checked = _a.checked, onChange = _a.onChange;
        if (disabled)
            return;
        if (mode !== dyna_ui_field_wrapper_1.EMode.EDIT)
            return;
        console.log('clicked, new value', !checked);
        onChange(name, !checked);
    };
    DynaRadioButton.prototype.render = function () {
        var _a = this.props, className = _a.className, mode = _a.mode, style = _a.style, color = _a.color, size = _a.size, label = _a.label, checked = _a.checked;
        return (React.createElement(dyna_ui_field_wrapper_1.DynaFieldWrapper, { className: "dyna-radio-button " + className, mode: mode, style: style, color: color, size: size, inputElementSelector: "input", label: label, onClick: this.handleClick.bind(this) },
            React.createElement(DynaPlainRadioButton_1.DynaPlainRadioButton, { checked: checked }),
            React.createElement("div", { className: "width-helper" }),
            React.createElement("input", { onClick: this.handleClick.bind(this) })));
    };
    DynaRadioButton.defaultProps = {
        className: '',
        name: null,
        mode: dyna_ui_field_wrapper_1.EMode.EDIT,
        style: dyna_ui_field_wrapper_1.EStyle.INLINE_ROUNDED,
        color: dyna_ui_field_wrapper_1.EColor.WHITE_BLACK,
        size: dyna_ui_field_wrapper_1.ESize.MEDIUM,
        disabled: false,
        label: '',
        checked: true,
        onChange: function (name, checked) { return undefined; },
    };
    return DynaRadioButton;
}(React.Component));
exports.DynaRadioButton = DynaRadioButton;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./DynaRadioButton.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./DynaRadioButton.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".dyna-radio-button .dyna-plain-radio-button {\n  position: absolute;\n}\n.dyna-radio-button .width-helper {\n  width: 20px !important;\n}\n.dyna-radio-button input {\n  position: absolute;\n  left: -1000px;\n}\n.dyna-radio-button.dyna-ui-field-wrapper--size-LARGE .dyna-ui-field-wrapper-control-container {\n  position: relative;\n}\n.dyna-radio-button.dyna-ui-field-wrapper--size-LARGE .dyna-ui-field-wrapper-control-container .dyna-plain-radio-button {\n  top: 1px;\n}\n.dyna-radio-button .dyna-ui-field-wrapper-container {\n  min-width: 20px;\n}\n", ""]);

// exports


/***/ })
/******/ ]);
});