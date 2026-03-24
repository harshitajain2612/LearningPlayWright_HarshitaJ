function outer(){

    let message = "Hello"
    console.log("Outer called")

    function inner(){
        console.log(message);
    }
    return inner; //closure (we can return inner function/any function can also be returned)
}

//outer();--it can be called from outside
//inner();--cant be called - not allowed

let newFunction = outer();
newFunction();