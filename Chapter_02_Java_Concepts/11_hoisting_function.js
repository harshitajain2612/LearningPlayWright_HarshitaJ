//Step1-- Declaration of function
// 
function getUserStatus() {

console.log(status_code);
var status_code = "active";
console.log(status_code);

}

//Step2-- Calling the function
getUserStatus();

//In the above code, we have a function getUserStatus that declares a variable status_code using var. When we call the function, it first tries to log the value of status_code before it is declared and initialized. Due to hoisting, the declaration of status_code is moved to the top of the function scope, but its assignment is not. Therefore, when we log status_code before its assignment, it returns undefined. After the assignment, it logs "active".        