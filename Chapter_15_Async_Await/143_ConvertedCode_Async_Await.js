function openBrowser(){
    return new Promise(function (resolve) {
        resolve("Opened the browser");
    });
}

function goToLogin(){
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials(){
    return new Promise(function (resolve) {
        resolve("Credential entered");
    });
}

function clickLogin(){
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}

/*openBrowser()
.then(function(msg1){
    console.log("Step1 : ", msg1);
    return goToLogin();
})
.then(function(msg2){
    console.log("Step2 : ",msg2);
    return enterCredentials();
})
.then(function(msg3){
    console.log("Step3 : ", msg3);
    return clickLogin();
})
.then(function(msg4){
    console.log("Step4 : " , msg4);
})
.catch(function(error){
    console.log("error:", error);
}).finally(function(){
    console.log("Done Execution")
});

//Step1 :  Opened the browser
//Step2 :  Login page loaded
//Step3 :  Credential entered
//Step4 :  Logged in successfully
//Done Execution

//or 
//we can call the functions like below as well but not recommanded
let goToLogin = openBrowser().then(function (msg1){
console.log(msg1);
});

let enterCredentials = goToLogin.then(function (msg2){
console.log(msg2);
});*/

//the below code is written using async and await
//async is used before function and await is used before promise

async function runLoginFlow(){
    let msgA = await openBrowser();
    console.log("Step1 : " , msgA);
     let msgB = await goToLogin();
      console.log("Step2 : " , msgB);
        let msgC = await enterCredentials();
         console.log("Step3 : " , msgC);
           let msgD  = await clickLogin();
            console.log("Step4 : " , msgD);
}
runLoginFlow();