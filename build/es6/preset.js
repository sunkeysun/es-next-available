"use strict";

var _interopRequireDefault2 = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _symbol = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/symbol"));

var _getIteratorMethod2 = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js/get-iterator-method"));

var _isArray = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _getIterator2 = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js/get-iterator"));

var _slice = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _from = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/array/from"));

var _construct = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));

var _iterator3 = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/symbol/iterator"));

var _codePointAt = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/instance/code-point-at"));

var _map = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/map"));

var _set = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/set"));

var _weakMap = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/weak-map"));

var _weakSet = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/weak-set"));

var _epsilon = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/number/epsilon"));

var _isInteger = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/number/is-integer"));

var _isNan = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/number/is-nan"));

var _acosh = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/math/acosh"));

var _hypot = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/math/hypot"));

var _imul = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/math/imul"));

var _includes = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _repeat = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/instance/repeat"));

var _of = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/array/of"));

var _fill = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/instance/fill"));

var _find = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _findIndex = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/instance/find-index"));

var _copyWithin = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/instance/copy-within"));

var _entries = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/instance/entries"));

var _keys = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/instance/keys"));

var _values = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/instance/values"));

var _assign = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/object/assign"));

var _has = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/reflect/has"));

var _apply = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/reflect/apply"));

var _promise = _interopRequireDefault2(require("@babel/runtime-corejs3/core-js-stable/promise"));

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

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof _symbol.default === "undefined" || (0, _getIteratorMethod2.default)(o) == null) {
    if ((0, _isArray.default)(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = (0, _getIterator2.default)(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  var _context2;

  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = (0, _slice.default)(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return (0, _from.default)(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = (0, _construct.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_construct.default) return false;
  if (_construct.default.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call((0, _construct.default)(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * es6 特性示例[es2015]
 * @author: sunkeysun
 */


console.log('es6 ==================>') //# 箭头函数
(function () {
  (function () {
    return console.log('# 箭头函数');
  });
})(); //# 类

(function () {
  console.log('# 类');

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
})(); //# 对象字面量增强(设置 __proto__, name, getName, 可计算key)


(function () {
  console.log('# 对象字面量增强(设置 __proto__, name, getName, 可计算key)');
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
})(); //# 模版字符串


(function () {
  console.log('# 模版字符串');
  var name = 'sunkey';
  var tplName = "".concat(name, " tpl"); // 多行字符串

  var multiLine = "line 1\nline 2";
})(); //# 解构赋值


(function () {
  console.log('# 解构赋值');
  var _ = 1,
      a = _ === void 0 ? 3 : _,
      b = 2;
  var _aa$bb = {
    aa: 11,
    bb: 22
  },
      a = _aa$bb.aa,
      b = _aa$bb.bb;
})(); //# rest 参数(Default, Rest, Spread)


(function () {
  console.log('# rest 参数(Default, Rest, Spread)'); // Default

  function add(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return x + y;
  } // Rest


  function add1(x) {
    return x * (arguments.length <= 1 ? 0 : arguments.length - 1);
  } // Spread


  add.apply(void 0, [11, 22]);
})(); //# let 和 const


(function () {
  console.log('# let 和 const');
  var name = 'sun';
  var age = 20;
})(); //# for ... of
// list 内部需要实现 Symbol.iterator 方法实现迭代


(function () {
  console.log('# for ... of');
  var list = [1, 2, 3];

  for (var _i = 0, _list = list; _i < _list.length; _i++) {
    var n = _list[_i];
    console.log(n);
  }
})(); //# 生成器 generator


(function () {
  console.log('# 生成器 generator');
  var fibonacci = (0, _defineProperty2.default)({}, _iterator3.default, /*#__PURE__*/_regenerator.default.mark(function _callee() {
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
      var n = _step.value; // truncate the sequence at 1000

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
  var _context3;

  console.log('# Unicode'); // same as ES5.1

  "𠮷".length == 2; // new RegExp behaviour, opt-in ‘u’

  "𠮷".match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/)[0].length == 2; // new form

  "\uD842\uDFB7" == "𠮷" == "\uD842\uDFB7"; // new String ops

  (0, _codePointAt.default)(_context3 = "𠮷").call(_context3, 0) == 0x20BB7; // for-of iterates code points

  var _iterator2 = _createForOfIteratorHelper("𠮷"),
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
})(); //# es6 模块
// export * from 'test'
// export * as xxx from 'test'
// export { default as xxx } from 'test'
// import babel from 'babel'
// export const name = 'sun'
//# Map + Set + WeakMap + WeakSet


(function () {
  console.log('# Map + Set + WeakMap + WeakSet');
  var map = new _map.default();
  var set = new _set.default();
  var weakMap = new _weakMap.default();
  var weakSet = new _weakSet.default();
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
  var key = (0, _symbol.default)('key');
  console.log(key);
})(); //# Math + Number + String + Array + Object APIs


(function () {
  var _context4, _context5, _context6, _context7, _context8, _context9, _context10, _context11, _context12;

  console.log('# Math + Number + String + Array + Object APIs');
  _epsilon.default;
  (0, _isInteger.default)(Infinity); // false

  (0, _isNan.default)("NaN"); // false

  (0, _acosh.default)(3); // 1.762747174039086

  (0, _hypot.default)(3, 4); // 5

  (0, _imul.default)(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2); // 2

  (0, _includes.default)(_context4 = "abcde").call(_context4, "cd"); // true

  (0, _repeat.default)(_context5 = "abc").call(_context5, 3); // "abcabcabc"

  (0, _from.default)(_arguments); // Returns a real Array

  (0, _of.default)(1, 2, 3); // Similar to new Array(...), but without special one-arg behavior

  (0, _fill.default)(_context6 = [0, 0, 0]).call(_context6, 7, 1); // [0,7,7]

  (0, _find.default)(_context7 = [1, 2, 3]).call(_context7, function (x) {
    return x == 3;
  }); // 3

  (0, _findIndex.default)(_context8 = [1, 2, 3]).call(_context8, function (x) {
    return x == 2;
  }); // 1

  (0, _copyWithin.default)(_context9 = [1, 2, 3, 4, 5]).call(_context9, 3, 0); // [1, 2, 3, 1, 2]

  (0, _entries.default)(_context10 = ["a", "b", "c"]).call(_context10); // iterator [0, "a"], [1,"b"], [2,"c"]

  (0, _keys.default)(_context11 = ["a", "b", "c"]).call(_context11); // iterator 0, 1, 2

  (0, _values.default)(_context12 = ["a", "b", "c"]).call(_context12); // iterator "a", "b", "c"

  var Point = {};
  (0, _assign.default)(Point, {
    origin: 1
  });
})(); //# 二进制和八进制字面量


(function () {
  console.log('# 二进制和八进制字面量');
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
  (0, _has.default)(duck, 'color'); // true

  (0, _has.default)(duck, 'haircut');
  (0, _apply.default)(duck.greeting, duck, []);
  return _promise.default.resolve('promise');
})(); //# 尾递归优化
// (() => {
//     console.log('# 尾递归优化')
//     function factorial(n, acc = 1) {
//         'use strict';
//         if (n <= 1) return acc;
//         return factorial(n - 1, n * acc);
//     }
//     // Stack overflow in most implementations today,
//     // but safe on arbitrary inputs in ES6
//     factorial(100000)
// });