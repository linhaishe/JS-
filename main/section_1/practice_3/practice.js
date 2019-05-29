function collect_same_elements(collection_a, object_b) {
  let result = [];
  let arr = [];
  arr = object_b.value;
  for(let i = 0;i<collection_a.length;i++){
    for(let m = 0;m<arr.length;m++){
      if(collection_a[i] === arr[m]){
        result.push(arr[m]);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
