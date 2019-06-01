'use strict';
var number_map_to_word = function(collection){
  let arr = collection.map(function(x){
    return String.fromCharCode(96 + x);
  })
  //ASCII
  console.log(arr);
  return arr;
  //return ['a','b','c','d','e'];
};

module.exports = number_map_to_word;
