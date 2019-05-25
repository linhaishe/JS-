'use strict';

function get_integer_interval(number_a, number_b) {
  let n = [];
  if(number_a < number_b){
    for(let i=number_a;i<=number_b;i++){
      n.push(i);
    }
  }
  else if(number_a > number_b){
    for(let i=number_a;i>=number_b;i--){
      n.push(i);
    }
  }
  else if(number_a = number_b){
    n.push(number_a)
  }
  // //else{
  //   n;//？？？？？？？？？？？？？
  // }
  return n;
}

module.exports = get_integer_interval;

