function count_same_elements(collection) {
  //没看懂
  let obj = {};
  let answer = [];
   for(let item of collection){
       if(!obj[item]){
         //obj[item] undefined
          obj[item] = {};
          obj[item].key = item;
          obj[item].count = 1;
          //设置对象的键值
       }
       else{
          obj[item].count++;
       }
   }
   console.log(obj);
   for (let key in obj){
       answer.push(obj[key]);
   }
  
  console.log(answer);
  return answer;
}

module.exports = count_same_elements;
