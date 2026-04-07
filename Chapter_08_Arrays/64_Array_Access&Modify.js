//Accessing and Modifying 

let statuses = ["pass","fail","skip"];

console.log(statuses[0]);
console.log(statuses[1]);
console.log(statuses[2]);


console.log(statuses.at(-1));//skip = last element
console.log(statuses.at(-2));//fail - second last element
console.log(statuses.at(-3));//pass - third last element
console.log(statuses.at(-4)); //undefined


//Java doesnt have this above concept

//Modify

statuses[1] = "blocked";

console.log(statuses);

console.log(statuses.length);


