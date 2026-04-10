let order  =  new Promise(function(resolve , reject){
let foodReady = true;
if (foodReady){
    resolve("Pizza is delivered");
}
else  {
reject("Order cancelled")
    }

})

console.log(order); //Promise { 'Pizza is delivered' }

//A promise is an object, it wraps a value that will be available later.

//Resolve and rejects -They are functions (parameters) provided by JavaScript when you create a Promise