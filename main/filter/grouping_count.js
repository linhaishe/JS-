'use strict';

function grouping_count(collection) {
  let object ={};//设置了object对象
  let answer = [];
  for(let item of collection){
    if(!object[item]){
      object[item] = {};
      object[item].key = item;
      object[item].value = 1;
    }else{
      object[item].value ++;
    }
  }
  for(let key in object){
    answer.push(object[key]);
  }
  console.log(answer);
  return answer;
}
//run错误，找不到错误原因
module.exports = grouping_count;
