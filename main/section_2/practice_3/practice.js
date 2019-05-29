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
        obj[ch].name = ch ;
        obj[ch].summary = parseInt(count);
      }else{
        obj[ch].summary += parseInt(count); 
      } 
    }
    else{
      if(!obj[item]){
        obj[item] = {} ;
        obj[item].name = item ;
        obj[item].summary = 1;
      }
      else{
        obj[item].summary ++;   
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
