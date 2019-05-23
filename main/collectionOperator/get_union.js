'use strict';

function get_union(collection_a, collection_b) {
  //return collection_a.concat(collection_b).filter(function(item,index,self){return self.indexOf(item) == index;});
//var indices = [];
//var array = ['a', 'b', 'a', 'c', 'a', 'd'];
//var element = 'a';
//var idx = array.indexOf(element);
//while (idx != -1) {
  //indices.push(idx);
  //idx = array.indexOf(element, idx + 1);????????这行没看懂
//}
//console.log(indices);
// [0, 2, 4]
for(let item of collection_b){
  if(collection_a.indexOf(item) === -1){
    collection_a.push(item);
  }
}
console.log(collection_a);
return collection_a;
}
module.exports = get_union;

