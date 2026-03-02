var a = "Hello World";

if(true){

    console.log(a);
    var a = "Hello World 2";//it will still print the value from global scope because of hoisting
    console.log(a);

}