//Transforming String

let str = " Hello, World! ";

console.log(str.toUpperCase());

console.log(str.toLowerCase());

//Trim whitespace

console.log(str.trim());

console.log(str.trimStart());
console.log(str.trimEnd());

//Replace

let msg = "Test:FAIL. Retry : FAIL.";
console.log(msg.replace("FAIL","PASS")); //Test:PASS . Retry : FAIL. (FIRST only)


console.log(msg.replaceAll("FAIL","PASS"));

console.log(msg.replace(/FAIL/g, "PASS")) ; //replace all with regex(regular exprression) -------------used in web automation
//regex will always replace all

//Concatenation

"Hello" + " " + "World"; //1st way
"Hello".concat(" ", "World"); //2nd way
`${"Hello"} ${"World"}`; // 3rd way

let url = "www.vwo.com//app.vwo.com?q=search=kimi"

console.log(url.replace(/app/g, "qa")) ; // replace using regex - used in automation - real time example

//Splitting and joining

console.log("pass,fail,skip".split(",")); //[ 'pass', 'fail', 'skip' ]

 
console.log("Hello".split("")); //[ 'H', 'e', 'l', 'l', 'o' ]

console.log("test_login_pass".split("_").join(" ")); //test login pass

//template literal (joining with format)

let parts = ["2024","08","04"];
let date = parts.join("-");
console.log(date);//2024-08-04

