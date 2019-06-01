'use strict';

function spilt_to_zero(number, interval) {
  //?????????????
  // let result = [];
  // for(let num = number;parseFloat((num+interval).toFixed(1))>0;num-=interval ){
  //     result.push(parseFloat(num.toFixed(1)));
  // }
  // console.log(result);
  // return result;
  let v = [];
    v.push(number);
    while (number > 0) {
        number = parseFloat((number - interval).toFixed(1));//四舍五入保留一位小数的意思
        if (number === 0.0) {
            v.push(0)
        }else{
          v.push(number);
        }       
    }
    return v;
}

module.exports = spilt_to_zero;
