if(!Array.prototype.myForEach){
     Array.prototype.myForEach = function(cb) {
        for(let i = 0;i < this.length; i++){
            //will pass value and index 
            cb(this[i] , i);
        }
     }
}

const arr = ['apple' , 24 , true , 25.89 ];

arr.myForEach((value , index) => console.log(`value at index ${index}: ${value}`) )
