"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

/**
 * es7 特性示例[es2016]
 * @author: sunkeysun
 */
console.log('es7 ==================>') //# 数组 includes 函数
(function () {
  console.log('# 数组 includes 函数');
  var arr = [1, 2, 3];
  console.log((0, _includes.default)(arr).call(arr, 1));
})(); //# 求幂计算

(function () {
  console.log('# 求幂计算');
  var value = Math.pow(2, 8);
  var value1 = Math.pow(2, Math.pow(8, 2));
  console.log(value, value1);
})();