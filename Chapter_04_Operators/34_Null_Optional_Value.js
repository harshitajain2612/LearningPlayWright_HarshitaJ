

let val = null ?? "Default Value";
console.log(val); // Output: "Default Value" (nullish coalescing operator returns the right-hand side value when the left-hand side value is null or undefined)
//nullish coalescing operator (??) is used to provide a default value when the left-hand side value is null or undefined. In this case, since val is null, the operator returns "Default Value". If val had been any other value (like 0, false, or an empty string), it would have returned that value instead of the default.

let val2 = undefined ?? "Default Value";//optional value is null
console.log(val2); // Output: "Default Value" (nullish coalescing operator returns the right-hand side value when the left-hand side value is null or undefined)