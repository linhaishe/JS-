'use strict';

function get_intersection(collection_a, collection_b) {
  //return collection_b.filter(v =>collection_a.includes(v))
  //？？？？？？？？？？？？？？？
  let result = [];
  for(let j=0;j<collection_b.length;j++){
    for(let i=0;i<collection_a.length;i++){
      if(collection_a[i]===collection_b[j]){
        result.push(collection_b[j]);
      }
    }
  }
  console.log(result);
  return result;
}

module.exports = get_intersection;
