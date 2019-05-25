'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let result = [];
  let a = collection_a.length;
  let b = collection_b.length;
  for(let i = 0;i<a;i++){
    for(let j = 0;j<b ;j++){
      if(collection_a[i] % collection_b[j] === 0){
        result.push(collection_a[i]);
      }
    }
  }
  console.log(result);
  return result;
}

module.exports = choose_divisible_integer;
