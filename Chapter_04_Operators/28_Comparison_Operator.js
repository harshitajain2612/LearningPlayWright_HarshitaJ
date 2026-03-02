// = - assigment operator
// == - loose equality operator(sikh vs hindu)
// === - strict equality operator(sikh and hindu, language and religion both are different)

// >, < <=,<=, !=, !==, >, <, >=, <= - comparison operators

console.log(5 > 3); // Output: true

console.log(5 < 3); // Output: false

console.log(5 >= 5); // Output: true        

console.log(5 <= 5); // Output: true

console.log(5 != 3); // Output: true    
console.log(5 != 5); // Output: false

console.log(5 !== "5"); // Output: true (strict inequality operator checks for both value and type, so it does not consider the number 5 and the string "5" to be equal)
console.log(5 !== 5); // Output: false (strict inequality operator checks for both value and type, so it considers the number 5 and the number 5 to be equal)
console.log(5 !="5");
// Output: false (loose inequality operator checks for value only, so it converts the string "5" to the number 5 before comparison and considers them to be equal)

//!= - loose inequality operator, which compares two values for inequality after performing type coercion if necessary. This means that if the values being compared are of different types, JavaScript will attempt to convert them to a common type before making the comparison. For example, 5 != "5" would return false because the string "5" is coerced to the number 5 before the comparison and they are considered to be equal.

//!== - strict inequality operator, which compares two values for inequality without performing type coercion. This means that if the values being compared are of different types, the comparison will return true. For example, 5 !== "5" would return true because the number 5 and the string "5" are of different types and are not considered to be equal.

console.log(5 !== "5"); // Output: true (strict inequality  operator checks for both value and type, so it does not consider the number 5 and the string "5" to be equal)
console.log(5 === 5); // Output: true (strict equality operator checks for both value and type, so it considers the number 5 and the number 5 to be equal)



//console.llog( 5 !=== "5"); // SyntaxError: Unexpected token '=='