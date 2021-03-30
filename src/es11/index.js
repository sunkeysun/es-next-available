/**
 * es11特性示例[es2020]
 * @author: sunkeysun
 */
//# Optional Chaining Operator 可选链
(() => {
    console.log('# Optional Chaining Operator 可选链');
    var a = { name: 'sun', getName: () => 'name' }
    console.log(a?.name, a?.name?.subName)
    console.log(a?.getName())
})();

//# ?? Nullish Coalescing Operator  null 和 undefined 认为是 nullish
(() => {
    console.log('# Optional Chaining Operator 可选链');
    const result1 = null ?? "default1";
    const result2 = "" ?? "default2";
    const result3 = 11 ?? 0;
    
    console.log(result1); // default1
    console.log(result2); // ''
    console.log(result3); // 11
})();

//# 类私有变量
(() => {
    console.log('# 类私有变量');
    class HelloWorld {
        // #message = "How are you?";
        getMessage() 
        { 
            // console.log(this.#message) 
         }
      }
      
      const hello = new HelloWorld()
      hello.getMessage() // How are you?
})();

//# Promise.allSettled 避免 Promise.all 其中一个 reject 导致中断
(() => {
    console.log('# Promise.allSettled 避免 Promise.all 其中一个 reject 导致中断');
    const proimse1 = new Promise((resolve, reject) => setTimeout(() => resolve('promise1'), 500));
    const proimse2 = new Promise((resolve, reject) => setTimeout(() => reject('promise2'), 1000));
    const proimse3 = new Promise((resolve, reject) => setTimeout(() => resolve('promise3'), 2000));
    
    Promise.allSettled([proimse1, proimse2, proimse3])
        .then((values) => {console.log(values)})
        .catch((error)=>{
            console.log('error='+error);
        });
})();
