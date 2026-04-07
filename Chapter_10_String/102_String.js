//Strings

let url  = "https://app.vwo.com";

let status = 'pass'; //in javascript we can store the string in the single quote as well.

let message = `Test completed in ${320}ms`; //template literal

//single qutoe
let a = 'hello';


//double quote

let b = "world";

//Template literals (backticks) - allows expressions and multiline
let name1 = "Alice";

let msg = `Hello, ${name1}! 2+2 = ${2+2}`;
console.log(msg);


//MultiLine

let report = `Test : Login
Status : Pass
Duration: 320ms`;


//String() constructor ( converts other types)

console.log(String(200));

String(true);//true

String(null);//null  --- String() is used to convert any value into a string
//String(true) converts boolean → string "true"
String(false)   // "false"
String(123)     // "123"
String(null)    // "null"
String(undefined) // "undefined"
String([1,2]); //"[1,2]"

