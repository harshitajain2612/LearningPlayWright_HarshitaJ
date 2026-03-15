//Arrays
let fruit = []; //Empty []

let fresh_fruit = ["cherry","banana","apple"]

// 0,1,2 //indexs
// 0 - cherry

let arr = [10,20,30,40]; //0-3

console.log(arr.length);

console.log(arr[0]);
console.log(arr[4]);

//Array Constructor

let score = new Array(3); //create 3 new empty arrays

let score2 = new Array(1,2,3); //creates [1,2,3]

let numbers = new Array(100,200,300,400); //0-3: 4

console.log(numbers);

let test = Array.of(10,20,30,40,50);
console.log(test);
console.log(test[0]);


//Array.from();

let char = Array.from("hello"); // ["h","e","l","l","o"]
console.log(char);


let testResult = ["pass","fail","pass",skip]; //we can have duplicate items

let mixed = [1,"hello",true, null]; //JS Array can hold multiple types

//note - in java its not allowd to store mixed types

//Array literal

let browsers = ["chrome", "Firefix", "Safari"];


