//Basic Async/Await

async function getTestResults(){
    return "pass";
}


//async function always returns a promise

getTestResults().then(function (result){
    console.log(result);
})

//rather than using above then(), we can use await

async function runTest() {
    let result =  await Promise.resolve("Login test passed");
    console.log(result);

    let result2 =  await Promise.resolve("Dashboard test passed");
    console.log(result2);
}