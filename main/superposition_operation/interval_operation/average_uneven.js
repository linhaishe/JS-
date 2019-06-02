'use strict';

function average_uneven(collection) {
  let cct = collection.filter(function (value) {
    return value <= 10;
  });

  let arr = cct.filter(function (value) {
    return value % 2 != 0;
  });

  let result = arr.reduce(function (previous, current, index, array) {
    return previous + current;
  });

  let a = result / arr.length;
  console.log(a);
  return a;
}

module.exports = average_uneven;
