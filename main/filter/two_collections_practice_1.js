'use strict';

function choose_common_elements(collection_a, collection_b) {
    let result = [];
    for(let i=0;i<collection_a.length;i++){
        for(let j=0;j<collection_b.length;j++){
            if(collection_a[i]===collection_b[j]){
                result.push(collection_a[i]);
            }
        }
    }
    //共有元素不是相当于交集，为什么行不通？----顺序问题
    // let result = [];
    // result = collection_a.filter(function(x,index,array){
    //     return collection_b.indexOf(x) != -1;
    // })
    // console.log(result);
    return result;
}

module.exports = choose_common_elements;
