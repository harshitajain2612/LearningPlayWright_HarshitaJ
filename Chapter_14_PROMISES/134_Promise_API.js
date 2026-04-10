let apiCall = new  Promise(function(resolve, reject){
resolve ({status :200 , body : "User data"});

})

apiCall.then(function(response){//then is basically a name given to resolve
    console.log(response)
    console.log(response.status);
    console.log(response.body);
    
})

//.then runs only when the promise resolves successfully.