async function sayHello(){
    return "Hello QA!";
}

sayHello().then(function (msg){
    console.log(msg)
});//Hello QA!

//above code shows that we can call async function with then()

//----------------------------------------------------------------------

async function getStatus(){
    let status = await Promise.resolve(200);
    console.log("Status code:" , status);
}

getStatus(); //Status code: 200

//----------------------------------------------------------------------


async function testFlow() {
    let step1= await Promise.resolve ("Opened Browser");
    console.log(step1);


    let step2= await Promise.resolve ("Clickeed  Login");
    console.log(step2);


    let step3= await Promise.resolve ("Verified  Dashboard");
    console.log(step3);
}
testFlow();

//Opened Browser
//Clickeed  Login
//Verified  Dashboard

//the above code is for sequential

//----------------------------------------------------------------------

async function riskyTest(){
    try{
        let data = await Promise.reject("Element not found");
        console.log(data);
    }
    catch(err){
        console.log("Test failed : ", err);
    }finally {
        console.log("test complete")
    }
    }


riskyTest(); //Test failed :  Element not found
//test complete


//----------------------------------------------------------------------------
console.log("A");

async function test(){
    console.log("B");
    await Promise.resolve();
    console.log("C");
}


test();
console.log("D");
//A
//B
//C
//D

//-------------------------------------------------------------------------------

async function runAll(){
    let [a,b,c] = await Promise.all([
Promise.resolve("Login:  Ok"),
Promise.resolve("Cart:  Ok"),
Promise.resolve("Checkout:  Ok")
    ]);
    console.log(a);
     console.log(b);
      console.log(c);
}

runAll();

//Login:  Ok
//Cart:  Ok
//Checkout:  Ok

//-------------------------------------------------------------------------------


async function healthCheck(){
    let results = await Promise.allSettled([
        Promise.resolve("Auth :UP"),
        Promise.reject("Auth :UP"),
        Promise.resolve("Cache :UP")

    ]);
    results.forEach(function (r){
        let status = r.status === "fullfilled" ? "correct" :"wrong";
    let msg = r.value || r.reason;
console.log(status + " " +msg);
    });
}

healthCheck();


//-------------------------------------------------------------------------------


async function checkEndPoints(){
    let endpoints = [" /login", "/users", "/orders"];

    for (let i =0; i<endpoints.length ; i++){
        let result = await Promise.resolve(endpoints [i] + " ->200");
        console.log(result);
    }
    console.log("All checks done")
}
checkEndPoints(); //All checks done

//-------------------------------------------------------------------------------

//Async IIFE function (immediately invoked function)

(async function(){
    let msg = await Promise.resolve("Quick async test");
    console.log(msg);
})();

console.log("outside")

//outside
//Quick async test


//-------------------------------------------------------------------------------
async function add(a,b){
    return a +b;
}

async function main(){
    let result = await add(10,20);
    console.log("Sum:" , result);

    let result2 = await add(result, 30)
      console.log("Total:" , result2);
}

main();
//Sum: 30
//Total: 60

//so async function can return something