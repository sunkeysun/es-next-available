"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/interopRequireWildcard"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _flat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/flat"));

var _flatMap = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/flat-map"));

var _trimStart = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/trim-start"));

var _trimEnd = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/trim-end"));

var _fromEntries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/from-entries"));

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _this = void 0;

/**
 * es10特性示例[es20]
 * @author: sunkeysun
 */
//# 数组添加 flat() 和 flatMap() 方法
(function () {
  console.log('# 数组添加 flat() 和 flatMap() 方法');
  var arr = [1, 2, [3, 4]];
  console.log((0, _flat.default)(arr).call(arr));
  console.log((0, _flatMap.default)(arr).call(arr, function (num) {
    return num;
  }));
})(); //# 字符串添加 trimStart() 和 trimEnd() 方法，只能去除空字符串


(function () {
  var _context, _context2;

  console.log('# 字符串添加 trimStart() 和 trimEnd() 方法');
  console.log((0, _trimStart.default)(_context = '  sunkeystart').call(_context));
  console.log((0, _trimEnd.default)(_context2 = 'sunkeyend  ').call(_context2));
})(); //# Object.fromEntries() 与 es8的 Object.entries 互逆


(function () {
  console.log('# Object.fromEntries() 与 es8的 Object.entries 互逆');
  console.log((0, _fromEntries.default)([['name', 'sun'], ['age', 20]]));
})(); //# Symbol.prototype.description 获取 Symbol 描述


(function () {
  console.log('# Symbol.prototype.description');
  var mySymbol = "My Symbol";
  var symObj = (0, _symbol.default)(mySymbol);
  console.log(symObj); // Symbol(mySymbol);

  console.log(String(symObj), "Symbol(".concat(mySymbol, ")")); // true

  console.log(symObj.description); // "My Symbol"
})(); //# String.prototype.matchAll


(function () {
  console.log('# String.prototype.matchAll');
})(); //# Function.prototype.toString() 返回完整的函数代码


(function () {
  console.log('# Function.prototype.toString() 返回完整的函数代码');
  _this.fruits = [];

  function buyFruits(fruit) {
    var _context3;

    this.fruits = (0, _concat.default)(_context3 = []).call(_context3, (0, _toConsumableArray2.default)(this.fruits), [fruit]);
  }

  console.log(buyFruits.toString());
})(); //# JSON⊂ECMAScript 字符串支持两个特殊分隔符
// U+2028 is the paragraph separator.
// U+2029 is the line separator.


(function () {
  console.log('# JSON⊂ECMAScript');
  var LS = "";
  var PS = eval("'\u2029'");
  console.log(PS);
})(); //# try {} catch {} 简化，不处理 err


(function () {
  console.log('# try {} catch {} 简化');

  try {
    undefinedFun();
  } catch (_unused) {
    console.log('error');
  }
})(); //# 添加 BigInt 支持


(function () {
  console.log('# 添加 BigInt 支持');
  console.log(typeof 1n === 'bigint'); // true

  console.log(typeof BigInt('1') === 'bigint'); // true
})(); //# 添加 globalThis 支持，统一 global 和 window


(function () {
  console.log('# 添加 globalThis 支持，统一 global 和 window');
  console.log(globalThis);
})(); //# 动态 import 支持


(function () {
  console.log('# 动态 import 支持');
  (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var http;
    return _regenerator.default.wrap(function _callee$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _promise.default.resolve().then(function () {
              return (0, _interopRequireWildcard2.default)(require('querystring'));
            });

          case 2:
            http = _context4.sent;
            console.log(http, 'load success');

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee);
  }))();
})();