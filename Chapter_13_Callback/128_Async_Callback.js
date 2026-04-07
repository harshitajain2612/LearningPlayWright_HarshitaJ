//Asynchronous Callbacks - NEFT
//I will do this..u carry on.

console.log("test-1 : started");

setTimeout(function() {
    console.log("Test 2: API response received")
}, 2000);

console.log("test-3 : started");

//output
//test-1 : started
//test-3 : started
//Test 2: API response received

//the above example is the async callback example