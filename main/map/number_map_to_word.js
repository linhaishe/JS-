'use strict';
var number_map_to_word = function(collection){
  let arr = collection.map(function(x){
    return String.fromCharCode(96 + x);
  })
  console.log(arr);
  return arr;
  //return ['a','b','c','d','e'];
  //96+x??????????
};

module.exports = number_map_to_word;
