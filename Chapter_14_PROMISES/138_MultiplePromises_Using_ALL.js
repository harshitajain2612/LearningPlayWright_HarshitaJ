let checkAuth = Promise.resolve("Auth OK");

let checkDB = Promise.resolve("DB OK");

let checkCache  = Promise.resolve("Cache OK");

Promise.all([checkAuth,checkDB,checkCache]).then(function(results){
    console.log("All Checks:" ,results)
});

Promise.all([
    Promise.resolve("OK"),
     Promise.reject("DB Down"),
      Promise.resolve("OK")
]).then(function (msg1) {
    console.log(msg1);

    }).catch(function(error){
         console.log("Failed:" ,error);
    }).then(function (msg2) {
    console.log(msg2);

    })//Failed: DB Down
//undefined
//Since one promise fails, Promise.all:

//❌ immediately goes to .catch()
//skips the .then() above it, .catch() handles the error and returns nothing (undefined) by default
//Next .then() runs - msg2 is the return value of .catch(),👉 Since .catch() didn’t return anything so msg2 = undefined

//Interview One-Liner

//“If .catch() doesn’t return anything, the next .then() receives undefined



