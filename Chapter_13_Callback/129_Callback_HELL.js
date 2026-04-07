//Real QA scenario : E2E Login flow : app.vwpo.com

function openBrowser(callback){
    console.log("opening the briwser");
    setTimeout(function () {
        console.log("step 1 : browsser starting")
        callback();
        
    }, 500);
}

function goToLoginPage(callback){
    setTimeout(function () {
        console.log("step 2 : Login page loaded")
        callback();
        
    }, 500);
}

function enterCredentials(callback){
    setTimeout(function () {
        console.log("step 3 :Credentialsd entered")
        callback();
        
    }, 500);
}

function clickLoginButton(callback){
    setTimeout(function () {
        console.log("step 4 :Login button clicked")
        callback();
        
    }, 500);
}

openBrowser(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLoginButton(function(){
                console.log("Test Completed")
            })
        })
    })

});

//the above code is called as callback hell

//see how the code shifts right with every step above.
//thats the pyramid of doom.
//imagine 10 steps completely undreadable, thats why the PROMISES and async/await kewords were invented