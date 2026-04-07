//Hoisting
//Function declarations are hoisted
//you can call them before they are defined
//function expressions are arrow functions are not hoisted.

greet ("Kimi"); //declaration - hoisted works before definition

function greet(name1){

    retrun `Hello : ${name1}`;
}

sayHi("Bob") //Type error : its not a function

const sayHi = function(name){
     retrun `Hello : ${name1}`;
}