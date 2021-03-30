/**
 * es7 特性示例[es2016]
 * @author: sunkeysun
 */
console.log('es7 ==================>')
//# 数组 includes 函数
(() => {
    console.log('# 数组 includes 函数')
    var arr = [1, 2, 3]
    console.log(arr.includes(1))
})();

//# 求幂计算
(() => {
    console.log('# 求幂计算')
    var value = 2**8
    var value1 = 2**8**2
    console.log(value, value1)
})();
