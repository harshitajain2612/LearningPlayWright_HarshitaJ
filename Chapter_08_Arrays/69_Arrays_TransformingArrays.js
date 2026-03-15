let scores = [45,82,91,60,73];

//map - transforms every elememt and returns a new array

let grades = scores.map(s => s> 70 ? "Pass" : "Fail");

console.log(grades);


//filter - keeps elements that pass a test

let passing = scores.filter(s=> s>70);

console.log(passing);


//reduce - accumulates to a single value

let total = scores.reduce((sum, s) => sum + s, 0);

console.log(total);


//the below one is not used in the automation but just for knowledge purpose

//flat - flattenes nested arrays
let nested = [[1,2],[3,4],[5]];

console.log(nested.flat());

