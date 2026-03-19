//Slicing and combining

let arr = [1,2,3,4,5]; // 0-4

console.log(arr.slice(1,3));

//Slice(start of the index, end of the index)--> returns the new array , doesnt mutate and in actual it is like - slice(start,end-1)
//index start from 0
//if we dont provide end, it will automatically take from start to end.

console.log(arr.slice(2,4));//2nd index - 3 and 4-1 =3rd index = 4


console.log(arr.slice(2)); //2nd index se aage jo bhi hai sab print honge


console.log(arr.slice(-2)); //4,5   --> ( minus index starts in reverse)

console.log(arr.slice(-3)); //3,4,5 

console.log(arr.slice(0)); //[ 1, 2, 3, 4, 5 ] - start from 0 and go untill end

console.log(arr.slice(-5)); //[ 1, 2, 3, 4, 5 ] - start from 0 and go untill end
//----------------------------------------------------------------------------------------------
//Concatination

let arr1 = [ 1, 2, 3, 4, 5 ];

let a = [1,2];

let b = [3,4];

let c = a.concat(b,[5,6]);

console.log(c);
//---------------------------
let d = a.concat(b);
console.log(d);


//spread concatination (modern way)

let e = [...a, ...b];
console.log(e);

//Join

let f = ["pass","fail","skip"].join(",");

console.log(f);

let f2 = ["pass","fail","skip"].join(" | ");
console.log(f2);
