'use strict';
var map_to_four_multiples_add_one = function(collection){
  let result = collection.map(function(x){
    return x*4+1;
  })
  //return [5,9,13,17,21];
  return result;
};

module.exports = map_to_four_multiples_add_one;
