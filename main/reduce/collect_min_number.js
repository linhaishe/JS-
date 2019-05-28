'use strict';

function collect_min_number(collection) {
  // let result = collection.reduce(function(x,y){
  //   return x<y?x:y;
  // })
  let result = Math.min(...collection);
  return result;
}

module.exports = collect_min_number;

