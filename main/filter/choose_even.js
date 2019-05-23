'use strict';

function choose_even(collection) {
  //return collection.filter(v =>v%2===0);
  let result = collection.filter(function(x){
    return x%2 === 0;
  })
  console.log(result);
  return result;
}
module.exports = choose_even;
