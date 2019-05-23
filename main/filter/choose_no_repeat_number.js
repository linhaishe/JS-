'use strict';

function choose_no_repeat_number(collection) {
  let result = [];
  result = collection.filter(function(item,index,array){
    return collection.indexOf(item) === index;
  })
  console.log(result);
  return result;
}
//item=element??????没看懂。。。。
module.exports = choose_no_repeat_number;
