// let sorted = responseTimes.sort(); --By default, .sort() sorts elements as strings (lexicographically), NOT as numbers.

//So your array becomes something like: [1200, 320, 450, 85, 99]

//You want numeric sorting, but JavaScript is doing string sorting by default.

let responseTimes = [320, 85, 1200, 450, 99];

let sorted = responseTimes.sort((a, b) => a - b);

console.log("Fastest:", sorted[0]);//85

//"JavaScript’s sort() converts elements to strings by default, 
// so for numeric sorting we must provide a compare function like (a, b) => a - b."