'use strict';
var rank_desc = function(collection){
  let result = collection.sort(function(a,b){
    return a-b;
  })
  return result;
  //return [2,3,4,5,6];
};

module.exports = rank_desc;
