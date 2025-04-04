if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callBack){

        const result =[];

        for(let i=0;i<this.length;i++){
            result[i] = callBack(this[i], i)
        }

        return result;
    }
}

const arr = [1,2,3,4];

console.log(arr.myMap((num) => num*3))