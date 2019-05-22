'use strict';

function choose_even(collection) {
  return collection.filter(v =>v%2===0);
}
//var n = [];
//n.push(collection.filter(choose_even));

//return n;
//how can i type in es5?????????????
module.exports = choose_even;
