let arr =  [1,2,3];
console.log(arr); //1,2,3
//Add to End

arr.push(4);
console.log(arr); //1,2,3,4

//Remove from End
arr.pop();
console.log(arr);

arr.push(5,6);
console.log(arr); //1,2,3,4

//Add to beginning


arr.unshift(0);
console.log(arr); //0,1,2,3,4,5,6


//Remove from beginning

arr.shift(0);
console.log(arr);//1,2,3,4,5,6

//splice (start, deleteCount, ....itemsToAdd)
arr.splice(2,1); //remove 1 element from 2nd index so 3 will be removed.

console.log(arr);//1,2,4,5,6

arr.splice(2,0,99);
console.log(arr); //1, 2, 99, 5, 6

arr.splice(1,2,10,20);
console.log(arr);