//sorting

let fruits = ["banana","apple","cherry"];

fruits.sort();

console.log(fruits);

//Alphabetical by default


let num = [10,1,21,2];
num.sort();//[ 1, 10, 2, 21 ] --> wrong.. compares as strings--sort converts the number into string if we want to sort it naturally then we will have to use below functions

//console.log(num);

num.sort((a,b) => a - b); //Acending

console.log(num);

num.sort((a,b) => b - a); //Descending

console.log(num);

