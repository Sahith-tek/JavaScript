function Throttle(fn, delay) {
    let timer = null;

    return function (...args) {
        if (timer===null) {
            fn(...args);
          timer = setTimeout(() => {
                timer = null; // Reset timer after delay
            }, delay);
        }
    };
}

function greet(name){
    console.log(`Hello ${name}`)
}
const ref = Throttle(()=>greet('James'),3000)

ref()
ref()
ref()
ref()