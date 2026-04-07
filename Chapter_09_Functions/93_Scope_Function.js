//Scope in functions

let env = "staging"; //global scoped

function setupConfig() {

    let timeout = 3000;
    console.log(env);//can access global
     console.log(timeout);//can access local
}

setupConfig();

//1 . interview question-
//Can we print timeout outside of this function
console.log(env);//accessible becoz it is global scoped
console.log(timeout);//it is blocked scope, not accessible outside so it will give the reference error


//2 . interview question-

//Nested Scope

function outer(){
    let x = 10;
}
function inner(){
    let y = 20;
    console.log(x); // inner can access outers variables
}

inner();
console.log(y); //not allowed bcoz it is blocked scope