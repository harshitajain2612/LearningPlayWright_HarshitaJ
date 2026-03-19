
const greet = function(name1){
    return `Hello, ${name1}!`;
}

console.log(greet("kimi"));


//we can also write the function in  line like below instead of above

const greed = name1 => `Hello, ${name1}!`;

console.log(greed("kimi"));

const doubleIt = n => n*2;
console.log(doubleIt("18"));

//No param required

const getEnv = () => "Staging";
console.log(getEnv());

//suppose we have multi lines, we can use arrow function everywhere?
//multi line needs curly braces + return

const getResult= (score) => {

    if (score>=70) return "pass";
    return "fail"
}
console.log(getResult(90));//pass

console.log(getResult(60));//fail