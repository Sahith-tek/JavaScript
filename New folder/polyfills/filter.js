if(!Array.prototype.myFilter){
Array.prototype.myFilter = function(callback){

    const result = [];
    for(let i=0;i<this.length;i++){

        if(callback(  this[i] , i , this)){
            result.push(this[i])
        }
    }
    return result;
} 

}

const arr1 = [1,2,3,4];

const evenArray = arr1.myFilter((num) => num%2==0);

console.log(evenArray)