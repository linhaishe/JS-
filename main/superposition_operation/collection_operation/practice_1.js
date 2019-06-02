'use strict';

function hybrid_operation(collection) {
  let arr = collection.map(function (num) {
    return num * 3 + 2;
  });

  let result = arr.reduce(function (previous, current, index, array) {
    return previous + current;
  });
  console.log(result);
  return result;
}

module.exports = hybrid_operation;

