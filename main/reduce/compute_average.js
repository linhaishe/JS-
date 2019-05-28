'use strict';

function compute_average(collection) {
  let result = collection.reduce(function(a,b){
    return a+b;
  })
  let a = result / collection.length;
  return a;
}

module.exports = compute_average;

