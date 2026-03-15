//Iterate - to go from 1 to another 

let tests = ["login","checkout","search"];

for (let i =0; i<tests.length;i++)
{
    console.log(tests[i]);
}

console.log("-------------------------------------------");

//foreach loop

tests.forEach(function(item, index) {
    console.log(`${index}  :  ${item}`);
});

console.log("-------------------------------------------");

//or we can write like below

for(let [i,test] of tests.entries()){
    console.log(i,test);
}

console.log("-------------------------------------------");

let students = ["a","b","c","d"];
for (let student in students){
    console.log(student, "-->",students[student]);
}

//above is very similar to --> of
//of gives you value and in gives you index.