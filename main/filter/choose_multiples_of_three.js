'use strict';

function choose_multiples_of_three(collection) {
  //return collection.filter(v =>v%3===0);
  let result = collection.filter(function(x){
    return x%3 === 0;
  })
  console.log(result);
  return result;
}

module.exports = choose_multiples_of_three;
