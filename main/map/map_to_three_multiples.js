'use strict';
var map_to_three_multiples = function(collections){
  let result = collections.map(function(x){
    return x*3;
  })
  return result;
  //return [3,9,15,12,27];
};

module.exports = map_to_three_multiples;
