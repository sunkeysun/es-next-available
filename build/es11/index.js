"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

/**
 * es11特性示例[es2020]
 * @author: sunkeysun
 */
//# Optional Chaining Operator 可选链
(function () {
  var _a$name;

  console.log('# Optional Chaining Operator 可选链');
  var a = {
    name: 'sun',
    getName: function getName() {
      return 'name';
    }
  };
  console.log(a === null || a === void 0 ? void 0 : a.name, a === null || a === void 0 ? void 0 : (_a$name = a.name) === null || _a$name === void 0 ? void 0 : _a$name.subName);
  console.log(a === null || a === void 0 ? void 0 : a.getName());
})(); //# ?? Nullish Coalescing Operator  null 和 undefined 认为是 nullish


(function () {
  var _ref, _ref2, _;

  console.log('# Optional Chaining Operator 可选链');
  var result1 = (_ref = null) !== null && _ref !== void 0 ? _ref : "default1";
  var result2 = (_ref2 = "") !== null && _ref2 !== void 0 ? _ref2 : "default2";
  var result3 = (_ = 11) !== null && _ !== void 0 ? _ : 0;
  console.log(result1); // default1

  console.log(result2); // ''

  console.log(result3); // 11
})(); //# 类私有变量


(function () {
  console.log('# 类私有变量');

  var HelloWorld = /*#__PURE__*/function () {
    function HelloWorld() {
      (0, _classCallCheck2.default)(this, HelloWorld);
    }

    (0, _createClass2.default)(HelloWorld, [{
      key: "getMessage",
      value: // #message = "How are you?";
      function getMessage() {// console.log(this.#message) 
      }
    }]);
    return HelloWorld;
  }();

  var hello = new HelloWorld();
  hello.getMessage(); // How are you?
})(); //# Promise.allSettled 避免 Promise.all 其中一个 reject 导致中断


(function () {
  console.log('# Promise.allSettled 避免 Promise.all 其中一个 reject 导致中断');
  var proimse1 = new _promise.default(function (resolve, reject) {
    return (0, _setTimeout2.default)(function () {
      return resolve('promise1');
    }, 500);
  });
  var proimse2 = new _promise.default(function (resolve, reject) {
    return (0, _setTimeout2.default)(function () {
      return reject('promise2');
    }, 1000);
  });
  var proimse3 = new _promise.default(function (resolve, reject) {
    return (0, _setTimeout2.default)(function () {
      return resolve('promise3');
    }, 2000);
  });

  _promise.default.allSettled([proimse1, proimse2, proimse3]).then(function (values) {
    console.log(values);
  }).catch(function (error) {
    console.log('error=' + error);
  });
})();