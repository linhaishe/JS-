'use strict';

function choose_common_elements(collection_a, collection_b) {
    // let result = [];
    // for(let j=0;j<collection_b.length;j++){
    //     for(let i=0;i<collection_a.length;i++){
    //         if(collection_a[i]===collection_b[j]){
    //             result.push(collection_b[j]);
    //         }
    //     }
    // }
    //共有元素不是相当于合集吗，为什么行不通？
    let result = [];
    result = collection_a.filter(function(x,index,array){
        return collection_b.indexOf(x) != -1;
    })
    console.log(result);
    return result;
}

module.exports = choose_common_elements;
