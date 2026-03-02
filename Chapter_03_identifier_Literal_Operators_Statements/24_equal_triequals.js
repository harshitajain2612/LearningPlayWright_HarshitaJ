//difference between == and ===
//The == operator is the loose equality operator, which compares two values for equality after performing type coercion if necessary. This means that if the values being compared are of different types, JavaScript will attempt to convert them to a common type before making the comparison. For example, 5 == "5" would return true because the string "5" is coerced to the number 5 before the comparison.    

//The === operator is the strict equality operator, which compares two values for equality without performing type coercion. This means that if the values being compared are of different types, the comparison will return false. For example, 5 === "5" would return false because the number 5 and the string "5" are of different types.

//In general, it is recommended to use the === operator for comparisons in JavaScript to avoid unexpected results due to type coercion.   


let a = 5;

//console.log(5=5);

console .log(5=="5"); // Output: true --loose equality operator checks for value only
console.log(5==="5"); // Output: false --strict equality operator checks for both value and type


console.log(null==undefined)    // Output: true
console.log(null===undefined)   // Output: false //strict equality operator checks for both value and type, while loose equality operator checks for value only. Since null and undefined are of different types, they are not strictly equal, but they are loosely equal because they both represent the absence of a value.   

console.log(5==5.0); // Output: true
console.log(5===5.0); // Output: true bcz the data type of both the values is number and the value is also same