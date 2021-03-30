/**
 * es6 特性示例[es2015]
 * @author: sunkeysun
 */
console.log('es6 ==================>')
//# 箭头函数
(() => {
    () => console.log('# 箭头函数')
})();

//# 类
(() => {
    console.log('# 类')
    class Cls {
        // need @babel/preset-env set { shippedProposals: true }
        // name = 'sunkey'
        // #pname = 'sun'
        constructor() {}
    }

    class ClsChild extends Cls {
        static getName() {
            return this.name
        }
        getAge() {
            return this.name
        }
    }
})();

//# 对象字面量增强(设置 __proto__, name, getName, 可计算key)
(() => {
    console.log('# 对象字面量增强(设置 __proto__, name, getName, 可计算key)')
    var name = 'sunkey'
    var proto = { protoName: 'proto' }
    var obj = {
        __proto__: proto,
        name,
        getName() {
            return this.name
        },
        [name + 'hello']: 'hello',
    }
})();

//# 模版字符串
(() => {
    console.log('# 模版字符串')
    var name = 'sunkey'
    var tplName = `${name} tpl`
    // 多行字符串
    var multiLine = `line 1
line 2`
})();

//# 解构赋值
(() => {
    console.log('# 解构赋值')
    var [a = 3, b] = [1, 2]
    var { aa: a, bb: b } = { aa: 11, bb: 22 }
})();

//# rest 参数(Default, Rest, Spread)
(() => {
    console.log('# rest 参数(Default, Rest, Spread)')
    // Default
    function add(x, y = 1) { return x + y }
    // Rest
    function add1(x, ...y) { return x * y.length }
    // Spread
    add(...[11, 22])
})();

//# let 和 const
(() => {
    console.log('# let 和 const')
    let name = 'sun'
    const age = 20
})();

//# for ... of
// list 内部需要实现 Symbol.iterator 方法实现迭代
(() => {
    console.log('# for ... of')
    var list = [1, 2, 3]
    for (var n of list) {
        console.log(n)
    }
})();

//# 生成器 generator
(() => {
    console.log('# 生成器 generator')
    var fibonacci = {
        [Symbol.iterator]: function*() {
            var pre = 0, cur = 1;
            for (;;) {
                var temp = pre;
                pre = cur;
                cur += temp;
                yield cur;
            }
        }
    }
      
    for (var n of fibonacci) {
        // truncate the sequence at 1000
        if (n > 1000)
            break;
        console.log(n);
    }
})();

//# Unicode
(() => {
    console.log('# Unicode')
    // same as ES5.1
    "𠮷".length == 2

    // new RegExp behaviour, opt-in ‘u’
    "𠮷".match(/./u)[0].length == 2

    // new form
    "\u{20BB7}"=="𠮷"=="\uD842\uDFB7"

    // new String ops
    "𠮷".codePointAt(0) == 0x20BB7

    // for-of iterates code points
    for(var c of "𠮷") {
        console.log(c);
    }
})();

//# es6 模块
// export * from 'test'
// export * as xxx from 'test'
// export { default as xxx } from 'test'
// import babel from 'babel'
// export const name = 'sun'

//# Map + Set + WeakMap + WeakSet
(() => {
    console.log('# Map + Set + WeakMap + WeakSet')
    var map = new Map()
    var set = new Set()
    var weakMap = new WeakMap()
    var weakSet = new WeakSet()
})();

//# Proxy
(() => {
    console.log('# Proxy')
    var target = {};
    var handler = {
      get: function (receiver, name) {
        return `Hello, ${name}!`
      }
    };
    
    var p = new Proxy(target, handler);
    console.log(p.world === 'Hello, world!')
})();

//# Symbol
(() => {
    console.log('# Symbol')
    var key = Symbol('key')
    console.log(key)
})();

//# Math + Number + String + Array + Object APIs
(() => {
    console.log('# Math + Number + String + Array + Object APIs')
    Number.EPSILON
    Number.isInteger(Infinity) // false
    Number.isNaN("NaN") // false
    
    Math.acosh(3) // 1.762747174039086
    Math.hypot(3, 4) // 5
    Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2) // 2
    
    "abcde".includes("cd") // true
    "abc".repeat(3) // "abcabcabc"
    
    Array.from(arguments); // Returns a real Array
    Array.of(1, 2, 3); // Similar to new Array(...), but without special one-arg behavior
    [0, 0, 0].fill(7, 1); // [0,7,7]
    [1, 2, 3].find(x => x == 3); // 3
    [1, 2, 3].findIndex(x => x == 2); // 1
    [1, 2, 3, 4, 5].copyWithin(3, 0); // [1, 2, 3, 1, 2]
    ["a", "b", "c"].entries(); // iterator [0, "a"], [1,"b"], [2,"c"]
    ["a", "b", "c"].keys(); // iterator 0, 1, 2
    ["a", "b", "c"].values(); // iterator "a", "b", "c"
    
    var Point = {}
    Object.assign(Point, { origin: 1 })
})();

//# 二进制和八进制字面量
(() => {
    console.log('# 二进制和八进制字面量')
    console.log(0b111110111 === 503) // true
    console.log(0o767 === 503) // true
})();

//# Promise - Reflect
(() => {
    console.log('# Promise - Reflect')
    const duck = {
        name: 'Maurice',
        color: 'white',
        greeting: function() {
          console.log(`Quaaaack! My name is ${this.name}`);
        }
      }
      
    Reflect.has(duck, 'color');
    // true
    Reflect.has(duck, 'haircut');

    Reflect.apply(duck.greeting, duck, [])

    return Promise.resolve('promise')
})();

//# 尾递归优化
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
