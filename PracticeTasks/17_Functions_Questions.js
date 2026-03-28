console.log(greet("Alice"));
function greet(name) {
  return `Hello, ${name}!`;
}

//1. What is the output?


console.log(getStatus(200));
const getStatus = (code) => code >= 200 ? "ok" : "error";

//2. What is the output?

function analyze(scores = []) {
  return scores.filter(s => s >= 70).length;
}
analyze();

//3. What does this function return?


function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());


//. What is the output?
function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter1 = makeCounter();
counter();
counter();
console.log(counter1());


//
//5.Which is a pure function?
// a) function log(msg) { console.log(msg); } b) function add(a, b) { return a + b; } c) function getTime() { return Date.now(); } d) function push(arr, val) { arr.push(val); return arr; }

//6. What is the output?
function test(...args) {
  return args.length;
}
test("login", "pass", 200, true);
//7. What is the output?

const obj = {
  env: "staging",
  getEnv: () => {
    return this.env;
  }
};
console.log(obj.getEnv());

//8. What does this return?
function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
[1, 2, 3].map(double).map(addOne);

//9. What is the output?

function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`));

//10. What is the output?

function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer());