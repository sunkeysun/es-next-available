"use strict";

var _typeof = require("@babel/runtime-corejs3/helpers/typeof");

var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");

var _Symbol$replace = require("@babel/runtime-corejs3/core-js-stable/symbol/replace");

var _reduceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/reduce");

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$create = require("@babel/runtime-corejs3/core-js-stable/object/create");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/wrapNativeSuper"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _asyncIterator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncIterator"));

var _templateObject;

function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _RegExp = (0, _wrapNativeSuper2.default)(RegExp); var _super = RegExp.prototype; var _groups = new _WeakMap(); function BabelRegExp(re, flags, groups) { var _this = _RegExp.call(this, re, flags); _groups.set(_this, groups || _groups.get(re)); return _this; } (0, _inherits2.default)(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[_Symbol$replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[_Symbol$replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[_Symbol$replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (_typeof(args[args.length - 1]) !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[_Symbol$replace].call(this, str, substitution); } }; function buildGroups(result, re) { var _context6; var g = _groups.get(re); return _reduceInstanceProperty(_context6 = _Object$keys(g)).call(_context6, function (groups, name) { groups[name] = result[g[name]]; return groups; }, _Object$create(null)); } return _wrapRegExp.apply(this, arguments); }

/**
 * es9特性示例[es2018]
 * @author: sunkeysun
 */
//# Promise.prototype finally
(function () {
  console.log('# Promise.prototype finally');

  _promise.default.resolve('sunkey').then(function (data) {
    console.log('then', data);
  }).finally(function () {
    console.log('finally');
  });
})(); //# Asynchronus Iteration for await ... of


(function () {
  console.log('# Asynchronus Iteration for await ... of');
  var promiseList = [_promise.default.resolve(1), _promise.default.resolve(2), _promise.default.resolve(3), _promise.default.resolve(4)];
  (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, num;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 2;
            _iterator = (0, _asyncIterator2.default)(promiseList);

          case 4:
            _context.next = 6;
            return _iterator.next();

          case 6:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 10;
            return _step.value;

          case 10:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 17;
              break;
            }

            num = _value;
            console.log(num);

          case 14:
            _iteratorNormalCompletion = true;
            _context.next = 4;
            break;

          case 17:
            _context.next = 23;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](2);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 23:
            _context.prev = 23;
            _context.prev = 24;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 28;
              break;
            }

            _context.next = 28;
            return _iterator.return();

          case 28:
            _context.prev = 28;

            if (!_didIteratorError) {
              _context.next = 31;
              break;
            }

            throw _iteratorError;

          case 31:
            return _context.finish(28);

          case 32:
            return _context.finish(23);

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 19, 23, 33], [24,, 28, 32]]);
  }))();
})(); //# 对象扩展增强


(function () {
  console.log('# Promise.prototype finally');
  var _x$y$a$b = {
    x: 1,
    y: 2,
    a: 3,
    b: 4
  },
      x = _x$y$a$b.x,
      y = _x$y$a$b.y,
      z = (0, _objectWithoutProperties2.default)(_x$y$a$b, ["x", "y"]); // 浅复制

  var _x$y$a$b2 = {
    x: 1,
    y: 2,
    a: 3,
    b: 4
  },
      obj = (0, _extends2.default)({}, _x$y$a$b2);
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(obj);
})(); //# 函数解析模版字符串


(function () {
  console.log('# 函数解析模版字符串');
  var person = 'Mike';
  var age = 28;

  function myTag(strings, personExp, ageExp) {
    var _context2, _context3, _context4, _context5;

    var str0 = strings[0]; // "That "

    var str1 = strings[1]; // " is a "

    var str2 = strings[2]; // "."

    console.log(personExp, ageExp);
    var ageStr;

    if (ageExp > 99) {
      ageStr = 'centenarian';
    } else {
      ageStr = 'youngster';
    } // We can even return a string built using a template literal


    return (0, _concat.default)(_context2 = (0, _concat.default)(_context3 = (0, _concat.default)(_context4 = (0, _concat.default)(_context5 = "".concat(str2)).call(_context5, personExp)).call(_context4, str1)).call(_context3, ageStr)).call(_context2, str0);
  }

  var output = myTag(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["That ", " is a ", "."])), person, age);
  console.log(output);
})(); //# 正则表达式特性更新


(function () {
  console.log('# 正则表达式特性更新');

  var reDate = /*#__PURE__*/_wrapRegExp(/([0-9]{4})\x2D([0-9]{2})\x2D([0-9]{2})/, {
    year: 1,
    month: 2,
    day: 3
  }),
      match = reDate.exec('2018-04-30'),
      year = match.groups.year,
      // 2018
  month = match.groups.month,
      // 04
  day = match.groups.day; // 30


  console.log(match);
  console.log(year);
  console.log(month);
  console.log(day);

  var reDate = /*#__PURE__*/_wrapRegExp(/([0-9]{4})\x2D([0-9]{2})\x2D([0-9]{2})/, {
    year: 1,
    month: 2,
    day: 3
  }),
      d = '2018-04-30',
      usDate = d.replace(reDate, '$<month>-$<day>-$<year>');

  console.log(usDate);
})();