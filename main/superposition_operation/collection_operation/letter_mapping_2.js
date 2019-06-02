'use strict';

function average_to_letter(collection) {
  let a = collection.reduce(function (previous, current, index, array) {
    return previous + current;
  })

  let b = Math.ceil(a / collection.length);
  let c = String.fromCharCode(96 + b);
  console.log(c);
  return c;
}

module.exports = average_to_letter;

