'use strict';

function collect_max_number(collection) {
  //let result = Math.max(1, 2, 3, 4, 5);
  // let result = collection.reduce(function(x,y){
  //   return x>y?x:y;
  // });
  let result = Math.max(...collection);
  return result;
  //因为文件夹命名为reduce,应该是用reduce进行处理，但是不会。
}



module.exports = collect_max_number;
