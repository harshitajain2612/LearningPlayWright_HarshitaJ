function add(a,b,c){
    return a+b+c ;
}

let num  =  [1,2,3];

add(...num);

console.log(add(num));//1,2,3undefinedundefined
console.log(add(...num));//6


//--------------------------------------------------

function hasError(...codes){
    return codes.some(c => c>=400);
}

let response = [200,300,401]

hasError(...response);