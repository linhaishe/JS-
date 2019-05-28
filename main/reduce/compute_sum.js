'use strict';

function calculate_elements_sum(collection) {
  let result = collection.reduce(function(a,b){
    return a+b;
  })
  return result;
}

module.exports = calculate_elements_sum;

