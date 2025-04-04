let firstName,lastName;
firstName='sahith';
lastName='Box';
console.log(lastName);
const UPPER_CASE =56.78;
console.log("const data cannot be re-assigned or modified");
let veryLargeNumber =12324535556n;
console.log(veryLargeNumber);
console.log(typeof(veryLargeNumber));
let someValue;
console.log(typeof(someValue));
let nullValue = null;
console.log(typeof(nullValue));

const uniqueKey = Symbol();
console.log(typeof(uniqueKey));

//Referenced data types
let course ={
    name: 'JavaScript for beginners',
    hours: 3
};

//dynamically typed
let dynamic ='string';
dynamic=56;

//objects accessing if we dont know the property until runtime
course['name'] = 'JavaScript 1:1';
