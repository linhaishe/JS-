'use strict';

function amount_even(collection) {
  let cct = collection.filter(function (value) {
    return value <= 10;
  })

  let arr = cct.filter(function (value) {
    return value % 2 === 0;
  });

  let result = arr.reduce(function (previous, current, index, array) {
    return previous + current;
  });
  console.log(result);
  return result;
}

module.exports = amount_even;
