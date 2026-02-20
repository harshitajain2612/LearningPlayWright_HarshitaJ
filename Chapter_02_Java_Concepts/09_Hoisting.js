//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

//In the case of variables declared with var, they are hoisted and initialized with undefined. This means that if you try to access a variable declared with var before its declaration, it will return undefined instead of throwing an error.

console.log(x); // Output: undefined
var x = 5; // The declaration of x is hoisted, but its assignment is not. So, x is initialized with undefined until the assignment is executed.

//In contrast, variables declared with let and const are also hoisted, but they are not initialized. This means that if you try to access a variable declared with let or const before its declaration, it will throw a ReferenceError.


console.log(person); // Output: Alice
let person = "Alice";