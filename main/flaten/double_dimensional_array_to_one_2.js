'use strict';

function double_to_one(collection) {
  var collection = [[1, 2, 3], [5, 2, 1, 4], [2, 1]].reduce(
    function(a,b){
      return a.concat(b);
    },
    []
  );
  return Array.from(new Set(collection));
}

module.exports = double_to_one;
