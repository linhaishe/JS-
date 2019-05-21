'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(v =>collection_a.includes(v))
  //？？？？？？？？？？？？？？？
}

module.exports = get_intersection;
