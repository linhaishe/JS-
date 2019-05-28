'use strict';

function compute_chain_median(collection) {
  let arr1 = collection.split('->');
  let arr2 = [];

  for(let item of arr1){
    arr2.push(parseInt(item));
  }
  let arr3 = arr2.sort(function(a,b){
    return a - b;
  })
  if(arr3.length % 2 === 0){
    let middle = (arr3[arr3.length / 2] + arr3[arr3.length / 2 -1]) / 2;
    console.log(middle);
    return middle;
 }
 if(arr3.length % 2 != 0){
   let middle = arr3[parseInt(arr3.length / 2)];
   console.log(middle);
   return middle;
 }
}

module.exports = compute_chain_median;
