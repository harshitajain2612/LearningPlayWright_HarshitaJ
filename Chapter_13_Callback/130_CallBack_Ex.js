function greetTester(name, callback){
    console.log("Welcome," + name);
    callback();
}

greetTester("Dev", function(){
    console.log("lets start testing");
})

//callback with parameters

function runTest(testName, callback){
    let status = "PASS";
    callback(testName,status);
}

runTest("Logintest",function(name,result){
    console.log(name + "->" +result)
})

//Sync callback - for Eaach

let bugs = ["UI glitch","AI timeout", "Wrong re-direct"];
bugs.forEach(function(bug , i){
    console.log("Bug #" + (i+1) +":" +bug)
})

console.log("Total bugs: " + bugs.length);