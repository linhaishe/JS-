'use strict';
function map_to_even(collection){
  let result = collection.map(function(x){
    return x*2;
  })
  //return [2,4,6,8,10];
  console.log(result);
  return result;
}

module.exports = map_to_even;
