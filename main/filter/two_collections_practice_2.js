'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let result = [];
  result = collection_a.filter(function(x,index,arrry){
    return collection_b.indexOf(x) === -1;
  })
console.log(result);
return result;
}

module.exports = choose_no_common_elements;
