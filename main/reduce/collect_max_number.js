'use strict';

function collect_max_number(collection) {
  //let result = Math.max(1, 2, 3, 4, 5);
  // let result = collection.reduce(function(x,y){
  //   return x>y?x:y;
  // });
  let result = Math.max(...collection);
  return result;
}



module.exports = collect_max_number;
