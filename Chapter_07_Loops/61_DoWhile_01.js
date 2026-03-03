/*let retry = 0; // initialization
do{
console.log("Execute a code");
console.log("Code executed successfully....." +retry);
retry++;
}
while(retry<3);*/ // 3 times execution of the loop, even if the condition is false, the code will execute at least once.

let a = 10;

do {

    console.log("Value of a is " + a);
    a++;

}while (a<10); // the code will execute at least once, even if the condition is false.


