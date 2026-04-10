let testRun = new Promise(function(resolve, reject){
reject("Assertion Failed");

});


testRun.then(function(msg) {
    console.log(msg); //resolve
}).catch(function(error){
     console.log(error);//reject
}).finally(function(){
    console.log("I will be executed anyhow"); //finally - always executed
})

//output -Assertion Failed
//I will be executed anyhow