//String conversions


//To srting
console.log((200).toString()); //"200"

console.log(true.toString()); // "true"

console.log(Number("42")) // 42

console.log(parseInt("42px")) //42

console.log(parseFloat("3.14rem")); //3.14

//interview question

let str = "hello";

str[0] = "H";

console.log(str); //hello  - print hello only because string are immutable in nature, they cant be changed


let upper = str.toUpperCase();
console.log(upper);