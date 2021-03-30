"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _padStart = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/pad-start"));

var _padEnd = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/pad-end"));

var _entries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/entries"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/values"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

/**
 * es8特性示例[es2019]
 * @author: sunkeysun
 */
console.log('es8 ==================>') //# String padding 方法
(function () {
  var _context, _context2, _context3;

  console.log('# String padding 方法');
  console.log((0, _padStart.default)(_context = 'sunkey').call(_context, 10, 0));
  console.log((0, _padEnd.default)(_context2 = 'sunkey').call(_context2, 10, 0));
  console.log((0, _padEnd.default)(_context3 = 'sunkey').call(_context3, 10));
})(); //# Object.entries 方法

(function () {
  console.log('# Object.entries 方法');
  var obj = {
    name: 'sunkey',
    age: 20,
    sex: 'male'
  };
  console.log((0, _entries.default)(obj));
})(); //# Object.keys 方法


(function () {
  console.log('# Object.keys 方法');
  var obj = {
    name: 'sunkey',
    age: 20,
    sex: 'male'
  };
  console.log((0, _keys.default)(obj));
})(); //# Object.values 方法


(function () {
  console.log('# Object.values 方法');
  var obj = {
    name: 'sunkey',
    age: 20,
    sex: 'male'
  };
  console.log((0, _values.default)(obj));
})() //# Object.getOwnPropertyDescriptors 方法
(function () {
  console.log('# Object.getOwnPropertyDescriptors 方法');
  var obj = {
    name: 'sunkey',
    age: 20,
    sex: 'male'
  };
  console.log((0, _getOwnPropertyDescriptors.default)(obj));
})(); //# async await

(function () {
  console.log('# async await');

  function getName() {
    return _getName.apply(this, arguments);
  }

  function _getName() {
    _getName = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", _promise.default.resolve('sunkey'));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee2);
    }));
    return _getName.apply(this, arguments);
  }

  (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var name;
    return _regenerator.default.wrap(function _callee$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return getName();

          case 2:
            name = _context4.sent;
            console.log(name);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee);
  }))();
})(); //# trailing commas 函数参数尾逗号


(function () {
  console.log('# trailing commas 函数参数尾逗号');

  function getMessage(str, str2) {
    console.log(str + '=' + str2);
  }

  getMessage("hello", "frank");
  getMessage("hello", "Tom");
})();