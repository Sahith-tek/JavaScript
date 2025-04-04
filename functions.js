let person1 = {
    name :'Sai',
    greet :function(){
        console.log(`Hello ${this.name}`)
    }
}

let person2 = {
    name :'Raju'
}


//Calls a method of an object immediately, by substituting another object for the current object.
person1.greet.call(person2)


//bind returns a function reference , with the 'this' context we have set here person2 , so that we can call anytime
const bindGreet = person1.greet.bind(person2)

setTimeout(()=> person1.greet() , 2000)

// bindGreet()
