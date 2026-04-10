let p = new Promise(function(resolve, reject) {
    resolve(42);
});

p.then(function(answer) {
    console.log("answer:", answer);
});//answer: 42

//----------------------------------------------------------------------------------------

let p1 = new Promise(function(resolve, reject) {
    reject("Something broke");
});

p1.catch(function(error){
    console.log("Caught:", error);
}); //Caught: Something broke
//----------------------------------------------------------------------------------------
let p3 = Promise.resolve(5);
p3.then(function(val){
    return val*10;
}).then(function(val){
   console.log("Result: " , val)
}) //Result:  50

//----------------------------------------------------------------------------------------

Promise.resolve(1)
.then(function(val){
    console.log (val);
    return val + 1;
}).then(function(val){
    console.log (val);
    return val + 1;
}).then(function(val){
    console.log (val);
})//1
//2
//3


//----------------------------------------------------------------------------------------


Promise.resolve("start").then(function (val){
    console.log(val);
    throw new Error("Broke at step 2"); //Here you are creating an Error object

}).then(function (){
    console.log("THIS WILL NOT RUN");
}).catch(function (error){
    console.log("ERROR CAUGHT :" , error.message); //message is a built-in property of the JavaScript Error object
})//ERROR CAUGHT : Broke at step 2


//----------------------------------------------------------------------------------------

Promise.reject("Test Failed")
.then(function(data){
    console.log("Data :" , data)
}).catch(function (error){
    console.log("Error :" ,error)
}).finally(function() {
    console.log("Cleanup done");
})
//Error : Test Failed
//Cleanup done

//since its a reject one so it will directly call the catch and finally will always execute

//----------------------------------------------------------------------------------------

Promise.resolve("Quick win").then(function(msg){
    console.log(msg);
})//Quick win


Promise.reject("Quick loss").catch(function(msg1){
    console.log(msg1);
})//Quick loss


//----------------------------------------------------------------------------------------

let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Login: PASS");
let t3 = Promise.resolve("Login: PASS");

Promise.all([t1,t2,t3]).then(function (results){
    console.log(results);
})//[ 'Login: PASS', 'Login: PASS', 'Login: PASS' ]

//If in above program any one of the promise is reject then it will print only catch..wont print any of the then()


//----------------------------------------------------------------------------------------


Promise.allSettled([Promise.resolve("API 200")
    ,Promise.reject("API 500"),
    Promise.resolve("API 201"),]).then(function (results){
        results.forEach(function (r){
            let val = r.status === "fullfilled" ? r.value : r.reason;
            console.log(r.status + "->" +val);
        })
    
});

//fulfilled->undefined
//rejected->API 500
//fulfilled->undefined

//allSettled --> Get the result even if there are failures so all of them will be printed