function collect_same_elements(collection_a, object_b) {
  let arr1 = [];
  let arr2 = [];
  let result = [];
  for(let i  = 0;i<collection_a.length;i++){
    for (let j in collection_a[i]){
      for(let k in object_b.value){
        if(collection_a[i][j] === object_b.value[k]){
          result.push(collection_a[i][j]);
        }
      }
      //一个对象有多个键值，
    }
  }
  // console.log(arr1);
  // for(let m in object_b){
  //   arr2 = object_b[m];
  // }
  // console.log(arr2);
  // for(let i = 0;i<arr1.length;i++){
  //   for(let j = 0;j<arr2.length;j++){
  //     if(arr1[i] === arr2[j]){
  //       result.push(arr1[i]);
  //     }
  //   }
  // }
  console.log(result);
  return result;
}

module.exports = collect_same_elements;
