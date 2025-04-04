

//default promise behaviour 

// function wait (seconds) {
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{resolve();reject() ;console.log("promise resolved")},seconds)
//     })
// }

// wait(5000).then(()=>console.log('Promise executed')).catch(()=>console.log("promise rejected")).finally(()=>console.log("run's everytime"))

class MyPromise {
    constructor(executorFunction){
        this._state ='pending';
        this._successCallbacks =[];
        this._errorCallbacks =[];
        this._finallyCallbacks =[];
        this.value = undefined;

        executorFunction(
            this.resolverFunction.bind(this),
            this.rejectorFunction.bind(this)
        )

    }

    then(callback){
        if(this._state=='resolved'){
            callback(this.value);
            return this;
        }
        this._successCallbacks.push(callback)
        return this
    }

    catch(callback){
        if(this._state=='rejected'){
            callback(this.value);
            return this;
        }
        this._errorCallbacks.push(callback)
        return this;
    }

    finally(callback){
        if(this._state!=='pending'){
            callback()
        }
        this._finallyCallbacks.push(callback);
        return this;
    }
    //provide the parameter to the function call
    resolverFunction(value){
       
        this.value=value
        this._state='resolved';
        this._successCallbacks.forEach((cb)=>cb(value))
        this._finallyCallbacks.forEach((cb)=>cb())
    }

    rejectorFunction(value){
        this.value=value;
        this._state='rejected';
        this._errorCallbacks.forEach((cb)=>cb(value));
        this._finallyCallbacks.forEach((cb)=>cb());
    }
}

function wait(seconds){
    const p = new MyPromise((resolve,reject)=>{
        resolve("haaa")
    })

    return p;
}

const p = wait(5)

console.log('Registering then callbacks ')

    p.then((e)=>console.log('first then',e))
    .then(()=>{console.log('Second then');return "retured value"})
    .catch((e)=>console.log("Promise rejected",e))
    .finally(()=>console.log("i will execute anyway"))
    
//Partiall