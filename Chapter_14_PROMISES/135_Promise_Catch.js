let apiCall = new  Promise(function(resolve, reject){
reject("500 Error");

})

apiCall.then(function(data){
    console.log("data is fetched");
}).catch(function(error){
    console.log("data is not fetched");
}); ///data is not fetched

//.catch() runs only when the promise is rejected

//.then() is completely skipped here.
