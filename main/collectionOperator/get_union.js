'use strict';

function get_union(collection_a, collection_b) {
  return collection_a.concat(collection_b).filter(function(item,index,self){return self.indexOf(item) == index;});
}
//???????????
module.exports = get_union;

