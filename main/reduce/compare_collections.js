'use strict';

function compare_collections(collection_a, collection_b) {
  let a = collection_a;
  let b = collection_b;
  if(a.length !== b.length){
    return false
  }else{
    for(let i= 0;i<a.length;i++){
      if(b.indexOf(a[i]) === -1){
        return false
      }
    }
    return true;
  }
}

module.exports = compare_collections;


