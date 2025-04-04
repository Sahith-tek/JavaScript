//JavaScript object's allow us to store key-value pairs as properties and functions as behaviour
const dog  = {
    name:'Max',
    breed:'German',
    Weight:60,
    eat:function(){
        console.log('chomp')
    },
    bark(){
        console.log('woof')
    }
}
//we can create another object of the same type,without any code duplication by creating a function and passing arguments also called as 'FACTORY FUNCTIONS'
//whenever the passing arguments name's and the key names are similar ,javascript allows us to directly mention the keys as values 
function createDog(name,breed,Weight,){
    return{
   name: name,
    //or
    breed,
    Weight,
    
    }
}
const anotherDog = createDog('marley','Pumarian',20)
console.log(anotherDog)

//Constructor function name Start's with a capital letter indicates PAscal notation,usually preferred to create objects rather than factory function

function Dog (name,breed,age,weight){
    //uses this{}
    this.name=name,
    this.breed=breed,
    this.age=age,
    this.weight=weight
    this.eat=function(){
        console.log('chomp');
    }
//implicitly return's 'this' object
}
const newDog = new Dog('harry','Rotweiler',20,30);
console.log(newDog)
//Objects are Dynamic in Javascript ,Once we initialize an object we can add any number of properties and functions later
newDog.favFood = 'chicken';

newDog['favVillage'] ='Ooty';
newDog.play = function(){
    return 'starts playing'
    
    

}
// TO call a function use () 
newDog.play()
console.log(newDog.play())
console.log(newDog)