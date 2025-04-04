//for loops
// let numbers =[1,2,3,4,5];
// for(let idx=0;idx<numbers.length;idx++){
//     console.log(numbers[idx]);
// }
//while loops
// let p=0;
// while(p<10){
//     console.log(p);
//     p++;
//     if(p>5){
//         break;
//     }
// }
//do-while
// k=0
// do{
    
//     console.log(k);
//     k++;
// }while(k<10)
//for-in loops
//A javaScript object is which wrapped in curly braces and consists of key-value pairs
const object ={
    key1:'string value',
    key2:23,
    key3:55
}
//we can access elements in an object using:
console.log(object.key1)
console.log(object['key2'])
console.log(object['key3']);
//Or a for-in loop
//the values in the object are retrives as strings
for( value in object){
    console.log(object[value])
}
//for-of loop to iterate directly elements of an array without the use of array-index 
let array =[12,'value',45.75,true]
for(const value of array){
    console.log(value)
}
//use of continue
//when the compiler gets to see the continue it will skip the current iteration and continue to the next iteration
let arr =[1,2,3,4,5,6,7,8,9];
for(const val of arr){
    if(val%2===0){
        continue;
    }
    console.log(val);
} 
//implementing min and max in an array
let min=100;
let max=0;
for(const val of arr){
if(val>max){
    max=val;
}
if(val<min){
    min=val;
}
}
console.log('min: ' ,min,'max: ' ,max)