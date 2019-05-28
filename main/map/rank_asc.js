'use strict';
var rank_asc = function(collection){
  let result = collection.sort(function(a,b){
    return b-a;
  })
  return result;
  //return [6,5,4,3,2];
};

module.exports = rank_asc;
