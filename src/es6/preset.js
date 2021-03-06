"use strict";

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.array.slice.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.string.match.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.code-point-at.js");

require("core-js/modules/es.map.js");

require("core-js/modules/es.set.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.weak-set.js");

require("core-js/modules/es.number.epsilon.js");

require("core-js/modules/es.number.constructor.js");

require("core-js/modules/es.number.is-integer.js");

require("core-js/modules/es.number.is-nan.js");

require("core-js/modules/es.math.acosh.js");

require("core-js/modules/es.math.hypot.js");

require("core-js/modules/es.math.imul.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.string.repeat.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.array.of.js");

require("core-js/modules/es.array.fill.js");

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.array.find-index.js");

require("core-js/modules/es.array.copy-within.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.reflect.has.js");

require("core-js/modules/es.reflect.apply.js");

require("core-js/modules/es.promise.js");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _arguments = arguments;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * es6 ????????????[es2015]
 * @author: sunkeysun
 */
console.log('es6 ==================>') //# ????????????
(function () {
  (function () {
    return console.log('# ????????????');
  });
})(); //# ???

(function () {
  console.log('# ???');

  var Cls = // need @babel/preset-env set { shippedProposals: true }
  // name = 'sunkey'
  // #pname = 'sun'
  function Cls() {
    (0, _classCallCheck2.default)(this, Cls);
  };

  var ClsChild = /*#__PURE__*/function (_Cls) {
    (0, _inherits2.default)(ClsChild, _Cls);

    var _super = _createSuper(ClsChild);

    function ClsChild() {
      (0, _classCallCheck2.default)(this, ClsChild);
      return _super.apply(this, arguments);
    }

    (0, _createClass2.default)(ClsChild, [{
      key: "getAge",
      value: function getAge() {
        return this.name;
      }
    }], [{
      key: "getName",
      value: function getName() {
        return this.name;
      }
    }]);
    return ClsChild;
  }(Cls);
})(); //# ?????????????????????(?????? __proto__, name, getName, ?????????key)


(function () {
  console.log('# ?????????????????????(?????? __proto__, name, getName, ?????????key)');
  var name = 'sunkey';
  var proto = {
    protoName: 'proto'
  };
  var obj = (0, _defineProperty2.default)({
    __proto__: proto,
    name: name,
    getName: function getName() {
      return this.name;
    }
  }, name + 'hello', 'hello');
})(); //# ???????????????


(function () {
  console.log('# ???????????????');
  var name = 'sunkey';
  var tplName = "".concat(name, " tpl"); // ???????????????

  var multiLine = "line 1\nline 2";
})(); //# ????????????


(function () {
  console.log('# ????????????');
  var _ = 1,
      a = _ === void 0 ? 3 : _,
      b = 2;
  var _aa$bb = {
    aa: 11,
    bb: 22
  },
      a = _aa$bb.aa,
      b = _aa$bb.bb;
})(); //# rest ??????(Default, Rest, Spread)


(function () {
  console.log('# rest ??????(Default, Rest, Spread)'); // Default

  function add(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return x + y;
  } // Rest


  function add1(x) {
    return x * (arguments.length <= 1 ? 0 : arguments.length - 1);
  } // Spread


  add.apply(void 0, [11, 22]);
})(); //# let ??? const


(function () {
  console.log('# let ??? const');
  var name = 'sun';
  var age = 20;
})(); //# for ... of
// list ?????????????????? Symbol.iterator ??????????????????


(function () {
  console.log('# for ... of');
  var list = [1, 2, 3];

  for (var _i = 0, _list = list; _i < _list.length; _i++) {
    var n = _list[_i];
    console.log(n);
  }
})(); //# ????????? generator


(function () {
  console.log('# ????????? generator');
  var fibonacci = (0, _defineProperty2.default)({}, Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var pre, cur, temp;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pre = 0, cur = 1;

          case 1:
            temp = pre;
            pre = cur;
            cur += temp;
            _context.next = 6;
            return cur;

          case 6:
            _context.next = 1;
            break;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  var _iterator = _createForOfIteratorHelper(fibonacci),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var n = _step.value;
      // truncate the sequence at 1000
      if (n > 1000) break;
      console.log(n);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
})(); //# Unicode


(function () {
  console.log('# Unicode'); // same as ES5.1

  "????".length == 2; // new RegExp behaviour, opt-in ???u???

  "????".match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/)[0].length == 2; // new form

  "\uD842\uDFB7" == "????" == "\uD842\uDFB7"; // new String ops

  "????".codePointAt(0) == 0x20BB7; // for-of iterates code points

  var _iterator2 = _createForOfIteratorHelper("????"),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var c = _step2.value;
      console.log(c);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
})(); //# es6 ??????
// export * from 'test'
// export * as xxx from 'test'
// export { default as xxx } from 'test'
// import babel from 'babel'
// export const name = 'sun'
//# Map + Set + WeakMap + WeakSet


(function () {
  console.log('# Map + Set + WeakMap + WeakSet');
  var map = new Map();
  var set = new Set();
  var weakMap = new WeakMap();
  var weakSet = new WeakSet();
})(); //# Proxy


(function () {
  console.log('# Proxy');
  var target = {};
  var handler = {
    get: function get(receiver, name) {
      return "Hello, ".concat(name, "!");
    }
  };
  var p = new Proxy(target, handler);
  console.log(p.world === 'Hello, world!');
})(); //# Symbol


(function () {
  console.log('# Symbol');
  var key = Symbol('key');
  console.log(key);
})(); //# Math + Number + String + Array + Object APIs


(function () {
  console.log('# Math + Number + String + Array + Object APIs');
  Number.EPSILON;
  Number.isInteger(Infinity); // false

  Number.isNaN("NaN"); // false

  Math.acosh(3); // 1.762747174039086

  Math.hypot(3, 4); // 5

  Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2); // 2

  "abcde".includes("cd"); // true

  "abc".repeat(3); // "abcabcabc"

  Array.from(_arguments); // Returns a real Array

  Array.of(1, 2, 3); // Similar to new Array(...), but without special one-arg behavior

  [0, 0, 0].fill(7, 1); // [0,7,7]

  [1, 2, 3].find(function (x) {
    return x == 3;
  }); // 3

  [1, 2, 3].findIndex(function (x) {
    return x == 2;
  }); // 1

  [1, 2, 3, 4, 5].copyWithin(3, 0); // [1, 2, 3, 1, 2]

  ["a", "b", "c"].entries(); // iterator [0, "a"], [1,"b"], [2,"c"]

  ["a", "b", "c"].keys(); // iterator 0, 1, 2

  ["a", "b", "c"].values(); // iterator "a", "b", "c"

  var Point = {};
  Object.assign(Point, {
    origin: 1
  });
})(); //# ??????????????????????????????


(function () {
  console.log('# ??????????????????????????????');
  console.log(503 === 503); // true

  console.log(503 === 503); // true
})(); //# Promise - Reflect


(function () {
  console.log('# Promise - Reflect');
  var duck = {
    name: 'Maurice',
    color: 'white',
    greeting: function greeting() {
      console.log("Quaaaack! My name is ".concat(this.name));
    }
  };
  Reflect.has(duck, 'color'); // true

  Reflect.has(duck, 'haircut');
  Reflect.apply(duck.greeting, duck, []);
  return Promise.resolve('promise');
})(); //# ???????????????
// (() => {
//     console.log('# ???????????????')
//     function factorial(n, acc = 1) {
//         'use strict';
//         if (n <= 1) return acc;
//         return factorial(n - 1, n * acc);
//     }
//     // Stack overflow in most implementations today,
//     // but safe on arbitrary inputs in ES6
//     factorial(100000)
// });
