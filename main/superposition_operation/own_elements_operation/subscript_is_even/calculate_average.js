'use strict';
var calculate_average = function (collection) {
    let result = [];
    let i = collection.length;
    for (let j = 0; j < i; j++) {
        if (j % 2 != 0) {
            result.push(collection[j]);
        }
    }
    //console.log(result);
    let cct = result.reduce(function (previous, current, index, array) {
        return previous + current;
    });
    //console.log(cct);
    let a = cct / result.length;
    console.log(a);
    return a;
};
module.exports = calculate_average;
