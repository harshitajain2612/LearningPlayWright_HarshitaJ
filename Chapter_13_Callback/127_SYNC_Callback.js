let testResult = ["PASS","FAIL","PASS","SKIP"];

testResult.forEach(function (Result, index){ //its an anonymous callback function-no name, directly passed inside forEach
    console.log("Test" + index + "-->" + Result);
    
});
//Synchronous = runs immediately, line by line, top to bottom  (UPI/IMPS)
//The program waits for it to finish before moving to the next line.
//Every ForEach, map and filter we have used - those are sync callbacks.

