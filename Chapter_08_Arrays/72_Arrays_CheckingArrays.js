//Checking arrays:

//Check if something is an array or not

let result = Array.isArray([1,2,3]);
console.log(result);//true

let result2 = Array.isArray([""]);
console.log(result2);//true

let result3 = Array.isArray("a");

console.log(result3);//false

//every function and some function

let r = [80,90,85].every(s => s>=70);
console.log(r);//true


let r1 = [80,40,85].every(s => s<=70);
console.log(r1);//false //if any of the element does not satisfy the condition, it returns false

//Some - AAtleast one must pass

let s1 = [80,40,85].some(s => s>=70);
console.log(s1);//true


let s2 = [80,90,85].some(s => s<70);
console.log(s2);//true
