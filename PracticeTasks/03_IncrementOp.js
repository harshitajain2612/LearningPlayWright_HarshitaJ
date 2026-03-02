let a = 5; //5
let b = a++ + ++a;//5+7 = 12                

let c = a++ + ++a + ++a + ++a + a++;

console.log(b);
console.log(a);
console.log(c);