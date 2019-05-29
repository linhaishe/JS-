function count_same_elements(collection) {
  let result = [];
  let obj = {};
  let b = -1;
  for(let item of collection ){
    if(item.length > 1){
      let ch = item[0];
      let count = item[2];

      if(!obj[ch]){
        obj[ch] = {} ;
        obj[ch].key = ch ;
        obj[ch].count = parseInt(count);
      }else{
        obj[ch].count += parseInt(count) 
      } 
    }
    else{
      if(!obj[item]){
        obj[item] = {} ;
        obj[item].key = item ;
        obj[item].count = 1;
      }
      else{
        obj[item].count ++;   
      } 
    }
   
  }
  for(let item in obj)
  {
    result.push(obj[item]);
  }
  console.log(result);
  return result;
}

module.exports = count_same_elements;
