
//When step 2  is not dependent on step 1  result
//We have to remove the awaits to make it run in parallel

function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name , "200 OK!");

        },1000)
    })
}

async function sequentialTest(){
    console.log("Starting of the test");
    let start = Date.now();

    let [r1,r2,r3] = await Promise.all([
        apiCall("Auth Service"),
        apiCall("User Service"),
        apiCall("Payment service")
    ])
    console.log(r1);
        console.log(r2);
            console.log(r3);


    console.log("Time: ~" +(Date.now()- start) + "ms");

}

sequentialTest();


//Starting of the test
//Login
//Dashboard
//Report
//Time: ~3029ms

//we wont use this parallel in playwight

//we will use sequential only


//Promise.all - use only in few cases