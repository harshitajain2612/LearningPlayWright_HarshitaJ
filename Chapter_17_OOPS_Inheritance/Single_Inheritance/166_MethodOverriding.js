//Polymorphism means - "One thing, many forms" - Same method → different behavior
//Types of Polymorphism in JavaScript
//1. Compile-time - method overloading - doesnt support in JS.
//2. Runtime Polymorphism (Main one in JS) - method overriding
//"Polymorphism allows the same method or function to behave differently based on the object or input."

class BaseTest{
    setup(){
        console.log("Base: open browser");
    }
}
class  APITest extends BaseTest{
         setup(){
        console.log("APITest: open browser");
    }
}
let test = new APITest(); //APITest: open browser

test.setup();