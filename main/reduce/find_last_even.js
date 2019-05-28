'use strict';

function find_last_even(collection) {
  let result = collection.filter(function(x){
    return x%2 === 0;
  })
  return result[result.length-1];
}

module.exports = find_last_even;
