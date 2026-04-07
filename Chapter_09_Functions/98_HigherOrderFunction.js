//Higher order function

//A function that takes a function as an argument or retruns a function.

//Here we use function as a parameter

function runWithLogging(testFn, testName){
    console.log (`Starting: ${testName}`);
    let result = testFn();
     console.log (`Finished: ${testName} -> ${result}`);
     return result; //closure

}

function loginTest(){
    return "pass";

}
function loginTestFailed(){
    return "failed";

}

runWithLogging(loginTest, "Login Test");
runWithLogging(loginTestFailed, "Dashboard Login Test");