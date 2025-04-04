//the javascrpt contains arothmetic opeartors +,-,*,**,/,%
//loose comparison

console.log(42=='42');

//strict comparision

console.log(42==='42');
//ternary operator
let age =90;
const value = age>=80?'senior':'junior';
console.log(value);

//logical operators
//&&,||,!,??
//logical with non boolean
console.log(false || 1);// 1
console.log('hello' || false); //hello 
console.log('vbfg' && 67); //67 
console.log(89 && undefined); //undefined
//null co-sling operator

let a =null;
let b = a?? 'gold';//if a is trust-worthy unlike null or undefined then it assigns value after?? operator here gold
console.log(b);
const userSelectedColor ='blue';
const defaultColor ='black';
const color = userSelectedColor || defaultColor;
console.log(color);


