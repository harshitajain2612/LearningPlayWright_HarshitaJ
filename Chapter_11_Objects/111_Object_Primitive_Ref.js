//Primitive data types - call by value
//Primitive, number, string , boolean, null and undefined

let a = 10;
let b = a; //it will always create a new copy
 b = 99; //now b becomes 99 but a will be 10 only


 console.log(a);


 //objects - copy by reference , call by ref

 //Reference , object, array and function

 let obj1 = { val :10};
 let obj2 = obj1;

 obj2.val = 99;

 console.log(obj1.val);


