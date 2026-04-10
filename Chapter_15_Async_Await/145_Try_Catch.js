//Error handling - try / catch

//With promise you use .catch().
//with async/await you use try/catch - exactly like regular javascript error handling

async function testAPI(){
    try{
let result = await Promise.reject("503 service unavailable");
console.log(result)
    }catch(error){
        console.log("Error :" ,error);
    }
finally {
    console.log("cleanup");
}
}

testAPI();
//503 service unavailable
//Cleanup

//try/catch/finally maps directly to then()/.catch()/.finally() - same login and cleaner syntax