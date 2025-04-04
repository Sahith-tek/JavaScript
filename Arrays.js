let arryExample=['string1','string2',12,78.90,true];
console.log(arryExample);
console.log(arryExample.length);
console.log(arryExample[4]);
//if we try to access index out of bound of array it prints ex: undefinedarryExample[9]

//Functions

function sayHi(name) {
    return( 'hi'+name);
}
let value = sayHi('Human');
console.log(value);
//if we dont explicitly return a value for a funtion in javascript by default it returns undefined
function returnUndedined(val){
    let name =val;
}
let g = () => ({
    value: 26,
    og:'hello',
});
console.log(g().og);
console.log(returnUndedined());
//Even or Odd 
function Even (array1 ) {
for(const val of array1){
    if(val%2==0){
        console.log('Even number :'+val)
    }else{
        console.log('Odd number :'+val)
    }
}
}
Even([1,2,3,4,5,6,7,8,9,10])