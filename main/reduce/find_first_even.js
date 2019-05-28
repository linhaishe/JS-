'use strict';

function find_first_even(collection) {
  let result = collection.filter(function(x){
    return x%2 === 0;
  })
  return result[0];
}

module.exports = find_first_even;

