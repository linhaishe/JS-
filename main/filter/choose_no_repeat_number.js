'use strict';

function choose_no_repeat_number(collection) {
  let result = [];
  result = collection.filter(function(item,index,array){
    return collection.indexOf(item) === index;
  })
  console.log(result);
  return result;
}
//item,index,array的值是没有进行赋值的，function是如何确认到参数对应的数值的？
module.exports = choose_no_repeat_number;
