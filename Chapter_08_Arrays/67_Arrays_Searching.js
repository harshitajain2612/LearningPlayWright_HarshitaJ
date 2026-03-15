//Searching

let result = ["pass","fail","pass","error","fail"]


//indexOf - returns 1st index  or if its not found then -1

result.indexOf("fail"); //1
console.log(result);
result.indexOf("skip"); //-1
console.log(result);
//lastIndexOf - searches from the end
result.lastIndexOf("fail");//4
console.log(result);

//includes - results boolen

result.includes("error");
console.log(result);//true
result.includes("skip");//false

//find - returns first matching element

let num = [10,25,35,40];

num.find(a => a > 20);
console.log(num);//25 - returns only first number

//findIndex

num.findIndex(a => a > 20);//1 - index of the first elememt which is greater than 20
num.findLast(a => a > 20);//45 - value of the last element
num.findLastIndex(a => a > 20);//3 - index of the last elememt