//Pure function always returns the same output for the same input and has no side effects


//Pure - no side effects, predictable output


function calculatePassRate(total, passed){

    return ((passed/total)*100).toFixed(2);
}

console.log(calculatePassRate(10,7));
console.log(calculatePassRate(10,7)); //here we are directly giving the values while calling the function
// so these are the pure functions

//but when we externalise the variable which is to be used in any function, it becomes impure, please see the ex below

function isPassing(Score){
    let score = 20;

    return score>=threshold;

}

let threshold = 70;
console.log(isPassing(threshold));

threshold = 10;
console.log(isPassing(threshold));

