//Objects

//Key and value pair

let student1 =  { name: "Kimi",age: 65 };
let student2 =  { name: "Harshita" };
let student3 = { name: "Harshita", age : 67,phone : 9753865884 };

//key will not be in the double quotes in the javascript object
//if we wrap it with the double quotes, it becomes the json object

//note - we should not combine the JS onjects with the javascript object like below:
let TS = { "name" : "kimi", "age" : 90}

//below is the json object format where key is wrapped with the double quotes

let JsonObj = { "name": "Harshita", "age" : 67,"phone" : 9753865884 };

//-------------------------

let a = {status : "pass" };
console.log(a.status); //we can call the key using . 

console.log(a["status"]) // we can call the key using [""] as well (mostly used)

//keys are case sensitive


let a22 = {status: "pass", Status : "fail"}
console.log(a22["status"]);
console.log(a22["Status"]);

//Interview question - in objects, whenever u assign 1 object to another object , it will always copy the reference like below
let b = a ; //b copies the reference of the object but not the object
 //both a and b points to same memory
b.status = "fail"; //now b becomes fail

console.log(a.status);

//both objects are different - diff memory

let c = { status : "pass"};

let d = { status : "pass"};

console.log(c===d);



