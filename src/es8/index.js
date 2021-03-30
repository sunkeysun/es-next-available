/**
 * es8特性示例[es2019]
 * @author: sunkeysun
 */
console.log('es8 ==================>')
//# String padding 方法
(() => {
    console.log('# String padding 方法')
    console.log('sunkey'.padStart(10, 0))
    console.log('sunkey'.padEnd(10, 0))
    console.log('sunkey'.padEnd(10))
})();

//# Object.entries 方法
(() => {
    console.log('# Object.entries 方法')
    var obj = {
        name: 'sunkey',
        age: 20,
        sex: 'male',
    }
    console.log(Object.entries(obj))
})();

//# Object.keys 方法
(() => {
    console.log('# Object.keys 方法')
    var obj = {
        name: 'sunkey',
        age: 20,
        sex: 'male',
    }
    console.log(Object.keys(obj))
})();

//# Object.values 方法
(() => {
    console.log('# Object.values 方法')
    var obj = {
        name: 'sunkey',
        age: 20,
        sex: 'male',
    }
    console.log(Object.values(obj))
})()

//# Object.getOwnPropertyDescriptors 方法
(() => {
    console.log('# Object.getOwnPropertyDescriptors 方法')
    var obj = {
        name: 'sunkey',
        age: 20,
        sex: 'male',
    }
    console.log(Object.getOwnPropertyDescriptors(obj))
})();

//# async await
(() => {
    console.log('# async await')
    async function getName() {
        return Promise.resolve('sunkey')
    }
    (async () => {
        var name = await getName()
        console.log(name)
    })()
})();

//# trailing commas 函数参数尾逗号
(() => {
    console.log('# trailing commas 函数参数尾逗号')
    function getMessage(str,str2,){
        console.log(str+'='+str2) ;
    }
    getMessage("hello","frank")
    getMessage("hello","Tom",)
})();
