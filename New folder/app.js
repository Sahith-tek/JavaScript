//Dom manipulation 

//GetElementById()
//we can select an html element by its unique id and its an easy way to get started
//we will store this in some variable ,so that we can maipulate it
const title = document.getElementById('main-heading');

//now we have stored it int the variable we can manipulate ,add styles to it

console.log(title);

//GetElementByclassname()
//This getelementbyclassname returns an array of child elements which have the same class name


const listItem = document.getElementsByClassName('list-items');

console.log(listItem);
//GetElementByTagName
//Similar to class name but they appear in the same order in which they exist in html tree model
//here tags are the html tags like list tag li
const value = document.getElementsByTagName('li');

console.log(value);

//Queryselector can access any html tag class name and also id's if there exist many of them it select only first of all the occurances
//in a queryselector if we want to access id then prefix it with #
//if wnat to access class name prefix with .
const conatiner1 = document.querySelector('.list-items');
console.log('hello');
console.log(conatiner1);
//queryselectorAll will give all the nodes related to the parameter we provided
//like all the divs and all the class names