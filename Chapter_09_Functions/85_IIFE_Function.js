//Immediately Invoked function expression (IIFE)

//they dont need to be called

function name1(){
    console.log("Hi")
}//Hi

name1();

//but using IIFE below

(function (){
    console.log("Hi")
})(); //remove the user defined name, add the brackets() and call urself using - ();

//or

//real time

(function (){
    console.log("Staging")
})();