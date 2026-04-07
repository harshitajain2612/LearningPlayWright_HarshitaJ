let a = 5; //5
let b = a++ + ++a;//5+7 = 12                

let c = a++ + ++a + ++a + ++a + a++; //7 + 8 + 9 + 11 + 11 = 48

console.log(b);
console.log(a);
console.log(c);