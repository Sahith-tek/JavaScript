
function Increment(){
    let count =0 ;

   //This is a closure :- a function binded by its lexical scope
    return function(){
        count++;
        return count;
    }
}

const x = Increment();
// console.log(x())
// console.log(x())
// console.log(x())

//provides a controlled access , without giving access to variables , this is how closures are usefull
function createCounter(stepSize =1,initialVaue =0){

    return function(){
        initialVaue=initialVaue+stepSize;
        return initialVaue
    }
}

const s = createCounter(3,10)
console.log(s())
console.log(s())
console.log(s())
console.log(s())