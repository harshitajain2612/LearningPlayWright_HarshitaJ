let count = 42;
let negative = -100;
let zero = 0;


let h = 0xFF;
let COLOR_hex = 0XFF000;
console.log(h); // 255

//single quotes
let single = 'Hello, World!';
//double quotes
let double = "Hello, World!";   
//let name = 'It's a nice day!'; // SyntaxError: Unexpected identifier 's'

let name = "it's a nice day!"; // This is correct

//Template literals
let name1 = "Harshita";
let greeting = `Hello, ${name1}!`;
console.log(greeting); // Output: Hello, Harshita!

let math = `2+2= ${5 + 3}`;
console.log(math); // Output: 2+2= 8


//i want to store the path of my file in a variable
let filePath = "C:\\Users\\Harshita\\Documents\\file.txt"; // Using double backslashes to escape the backslash character
console.log(filePath); // Output: C:\Users\Harshita\Documents\file.txt  

let address = "https://app.vwo.com/#login"; // This is a string literal representing a URL
console.log(address); // Output: https://app.vwo.com/#login
//----// - URL
//----\\ - Path separator in Windows file systems

//String literals edge cases
let empty = ""; // This is an empty string literal
let whitespace = "   "; // This is a string literal containing only whitespace characters   
let zeroString = "0"; // This is a string literal representing the character '0'
let booleanString = "true"; // This is a string literal representing the characters 't', 'r', 'u', 'e'
let nullString = "null"; // This is a string literal representing the characters 'n', 'u', 'l', 'l'
let undefinedString = "undefined"; // This is a string literal representing the characters 'u', 'n', 'd', 'e', 'f', 'i', 'n', 'e', 'd'
let bigIntString = "1234567890123456789012345678901234567890"; // This is a string literal representing a large number
let symbolString = "Symbol(mySymbol)"; // This is a string literal representing a symbol        
