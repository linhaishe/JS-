'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var asw = new Array();
  var i = 0;
  for(var x in collection) {
  if(collection[x]%2 == 0) {
    asw[i++] = collection[x];
  }
  }
  return asw;
}
console.log('输出结果：'+ asw);
module.exports = collect_all_even;
//function collect_all_even(collection)//collection如何匹配到spce里的数组的？
