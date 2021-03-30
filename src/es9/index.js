/**
 * es9特性示例[es2018]
 * @author: sunkeysun
 */
//# Promise.prototype finally
(() => {
    console.log('# Promise.prototype finally')
    Promise.resolve('sunkey')
        .then((data) => {
            console.log('then', data)
        })
        .finally(() => {
            console.log('finally')
        })
})();

//# Asynchronus Iteration for await ... of
(() => {
    console.log('# Asynchronus Iteration for await ... of')
    var promiseList = [
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3),
        Promise.resolve(4),
    ];
    (async () => {
        for await (let num of promiseList) {
            console.log(num)
        }
    })()
})();

//# 对象扩展增强
(() => {
    console.log('# Promise.prototype finally')
    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
    // 浅复制
    let { ...obj } = { x: 1, y: 2, a: 3, b: 4 }

    console.log(x)
    console.log(y)
    console.log(z)
    console.log(obj)
})();

//# 函数解析模版字符串
(() => {
    console.log('# 函数解析模版字符串')
    let person = 'Mike';
    let age = 28;
    
    function myTag(strings, personExp, ageExp) {
      let str0 = strings[0]; // "That "
      let str1 = strings[1]; // " is a "
      let str2 = strings[2]; // "."

      console.log(personExp, ageExp)
    
      let ageStr;
      if (ageExp > 99){
        ageStr = 'centenarian';
      } else {
        ageStr = 'youngster';
      }
    
      // We can even return a string built using a template literal
      return `${str2}${personExp}${str1}${ageStr}${str0}`;
    }
    
    let output = myTag`That ${ person } is a ${ age }.`;
    
    console.log(output);
})();

//# 正则表达式特性更新
(() => {
    console.log('# 正则表达式特性更新')
    var reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
          match  = reDate.exec('2018-04-30'),
          year   = match.groups.year,  // 2018
          month  = match.groups.month, // 04
          day    = match.groups.day;   // 30

    console.log(match)
    console.log(year)
    console.log(month)
    console.log(day)
   
    var reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
          d      = '2018-04-30',
          usDate = d.replace(reDate, '$<month>-$<day>-$<year>');
    console.log(usDate)
})();
