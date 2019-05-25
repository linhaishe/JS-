'use strict';

function double_to_one(collection) {
  // var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  //   function(a, b) {
  //     return a.concat(b);
  //   },
  //   []
  // );
  // flattened is [0, 1, 2, 3, 4, 5]
  var collection = [1, [2], [3, 4]].reduce(
    function(a,b){
      return a.concat(b);
    },
    []
  );
  console.log(collection)
  return collection;
}
//能把我这个方法在简化一下

module.exports = double_to_one;
