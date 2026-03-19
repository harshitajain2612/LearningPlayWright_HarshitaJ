function getStatus(code){

    if (code>=200 && code < 300) return "success";
    if (code>=400 && code < 500) return "client error";
    if (code>=500) return "internal server error";
}

getStatus(200);
getStatus(404);
getStatus(500);

//2nd tricky question

function logTest(name1){

    console.log(`Running: ${name1}`)
    //no return statement
}

let result  =  logTest("Login")
console.log(result); //output would be undefined beacuse the return is not used

//3rd tricky question (below one is possible because of hoisting concept)

console.log(greet("Alice"));

function greet(name1){
     return `Hello : ${name1}`
}


//4th one(Very important)

sayHi("Kimi");

const sayHi = function(name){
    return `Hello : ${name1}`
}

//it will give error because hoisting doesnt work with expressions like const and let, it only works with the function