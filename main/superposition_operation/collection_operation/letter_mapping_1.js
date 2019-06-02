'use strict';

function even_to_letter(collection) {
  let result = [];
  let arr = [];
  for (let item of collection) {
    if (item % 2 === 0) {
      result.push(item);
    }
  }

  for (let item of result) {
    arr.push(String.fromCharCode(96 + item));

  }
  console.log(arr);
  return arr;
}

module.exports = even_to_letter;
