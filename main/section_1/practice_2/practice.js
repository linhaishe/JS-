function collect_same_elements(collection_a, collection_b) {
  //var collection_b = [["a", "d", "e", "f"]];
  let result = [];
  let arr = [];
  for(let j = 0;j<collection_b.length;j++){
    if(Array.isArray(collection_b[j])){
       arr = collection_b[j]; 
      }
    }
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
