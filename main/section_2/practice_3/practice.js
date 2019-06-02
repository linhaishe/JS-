function count_same_elements(collection) {
  // let result = [];
  // let obj = {};
  // let b = -1;
  // for(let item of collection ){
  //   if(item.length > 1){
  //     let reg = /\d+/g
  //     let ms = item.match(reg)
  //     if(!obj[item]){
  //       obj[item] = {} ;
  //       obj[item].name = item ;
  //       obj[item].summary = ms[0];
  //     }
  //     else{
  //       obj[item].summary += ms[0];   
  //     } 
  //   }
  //   else{
  //     if(!obj[item]){
  //       obj[item] = {} ;
  //       obj[item].name = item ;
  //       obj[item].summary = 1;
  //     }
  //     else{
  //       obj[item].summary ++;   
  //     } 
  //   }

  // }
  // for(let item in obj)
  // {
  //   result.push(obj[item]);
  // }
  // console.log(result);
  // return result;

  let result = [];
  let elem = {};
  for (let item of collection) {
    if (item.split("").length === 1) {
      elem[item] === undefined ? elem[item] = 1 : elem[item]++
    } else {
      let num = Number(item.match(/\d{1,2}/));
      let word = item.match(/\w/);
      elem[word] === undefined ? elem[word] = num : elem[word] += num
    }
  }

  for (let item of Object.keys(elem)) {
    result.push({ name: item, summary: elem[item] })
  }

  return result;
}

module.exports = count_same_elements;
