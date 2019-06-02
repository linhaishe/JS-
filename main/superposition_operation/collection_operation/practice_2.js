'use strict';

function hybrid_operation_to_uneven(collection) {
  let arr = collection.filter(function (value) {
    return value % 2 != 0;
  })

  let result = arr.map(function (x) {
    return x * 3 + 2;
  })
  console.log(result);
  return result;
}

module.exports = hybrid_operation_to_uneven;

