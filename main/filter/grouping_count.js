'use strict';

function grouping_count(collection) {
  let object ={};//设置了object对象
  for(let item of collection){
    if(!object[item]){
      object[item]= 1;
    }else{
      object[item]++;
    }
  }
  console.log(object);
  return object;
}
module.exports = grouping_count;
