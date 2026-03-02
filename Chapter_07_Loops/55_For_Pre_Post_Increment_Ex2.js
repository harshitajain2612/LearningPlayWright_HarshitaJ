//For loop help you to repeat a block of code a certain number of times. It consists of three parts: initialization, condition, and increment/decrement.

//Syntax:
//for (initialization; condition; increment/decrement) {
//    // code to be executed
//}
let a = 10;
let b = ++a; //increment operator
console.log(a); //11
console.log(b); //11

// Expression and result table
//line no | expression | result
//1       | let a = 10; | a is assigned the value 10
//2       | let b = ++a; | a is incremented to 11, then b is assigned the value of a (11)
//3       | console.log(a); | prints 11
//4       | console.log(b); | prints 11   

let a1  = 10;
console.log(a1++ +a1);

let a2 = 10;
console.log(a2++ + ++a2); //10 + 12 = 22
console.log(a2); //12

// Expression and result table

let a3 = 10;

console.log(++a3 + ++a3); //11 + 12 = 23

console.log(a3); //12

// Expression and result table


let a4 = 10;
console.log(a4--);
console.log(a4); //10

let a5 = 10;
console.log(--a5);
console.log(a5); //9

