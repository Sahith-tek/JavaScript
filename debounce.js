function debounce(fn , delay) {
    let timer;
    //The returned function has the context of variables , parameters and this context of outer class
    //because of closures
    return function(...args){
        clearInterval(timer);
        timer = setTimeout(()=>
        fn.apply(this , args) , delay)  // Call the function after the delay

    }
}

function greet (name){
    console.log(`Hello ${name}`)
}

const functionRef = debounce(()=>greet('Sahith') , 4000)

functionRef()
functionRef()
functionRef()
functionRef()