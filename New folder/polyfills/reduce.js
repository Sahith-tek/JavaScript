if(!Array.prototype.myReduce){
 Array.prototype.myReduce = function( callBack , initialValue) {
     

    
    if(typeof callBack !== 'function'){
        throw new TypeError('CallBack must be a function');
    }
    const array = this ;
    const length =array.length ;

    let accumulator = initialValue !== undefined ? initialValue :array[0];

    for(let i = initialValue!==undefined ?0 : 1 ;i<length ;i++){
     accumulator =  callBack(accumulator , this[i], i , this)

    }
    return accumulator;

 }
}

const array = [1,2,3,4,5]
const result = array.myReduce((val, current) => val + current + 2, 0)

console.log(result)
