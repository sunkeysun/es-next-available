/**
 * es10特性示例[es20]
 * @author: sunkeysun
 */
//# 数组添加 flat() 和 flatMap() 方法
(() => {
    console.log('# 数组添加 flat() 和 flatMap() 方法')
    var arr = [1, 2, [3, 4]];
    console.log(arr.flat())
    console.log(arr.flatMap((num) => num))
})();

//# 字符串添加 trimStart() 和 trimEnd() 方法，只能去除空字符串
(() => {
    console.log('# 字符串添加 trimStart() 和 trimEnd() 方法')
    console.log('  sunkeystart'.trimStart())
    console.log('sunkeyend  '.trimEnd())
})();

//# Object.fromEntries() 与 es8的 Object.entries 互逆
(() => {
    console.log('# Object.fromEntries() 与 es8的 Object.entries 互逆')
    console.log(Object.fromEntries([['name', 'sun'], ['age', 20]]))
})();

//# Symbol.prototype.description 获取 Symbol 描述
(() => {
    console.log('# Symbol.prototype.description')
    let mySymbol = `My Symbol`;

    let symObj = Symbol(mySymbol);
    
    console.log(symObj) // Symbol(mySymbol);
    
    console.log(String(symObj), `Symbol(${mySymbol})`); // true
    
    console.log(symObj.description); // "My Symbol"
})();

//# String.prototype.matchAll
(() => {
    console.log('# String.prototype.matchAll')

})();
//# Function.prototype.toString() 返回完整的函数代码
(() => {
    console.log('# Function.prototype.toString() 返回完整的函数代码')
    this.fruits = []
    function buyFruits(fruit) {
      this.fruits = [...this.fruits, fruit]
    }
    console.log(buyFruits.toString())
})();

//# JSON⊂ECMAScript 字符串支持两个特殊分隔符
// U+2028 is the paragraph separator.
// U+2029 is the line separator.
(() => {
    console.log('# JSON⊂ECMAScript')
    let LS = ""
    const PS = eval("'\u2029'")
    console.log(PS)
})();

//# try {} catch {} 简化，不处理 err
(() => {
    console.log('# try {} catch {} 简化')
    try  {
        undefinedFun()
    } catch {
        console.log('error')
    }
})();

//# 添加 BigInt 支持
(() => {
    console.log('# 添加 BigInt 支持')
    console.log(typeof 1n === 'bigint')           // true
    console.log(typeof BigInt('1') === 'bigint')  // true
})();

//# 添加 globalThis 支持，统一 global 和 window
(() => {
    console.log('# 添加 globalThis 支持，统一 global 和 window')
    console.log(globalThis) 
})();

//# 动态 import 支持
(() => {
    console.log('# 动态 import 支持');
    (async () => {
        const http = await import('querystring')
        console.log(http, 'load success')
    })()
})();
