class BaseTest{
    setup(){
        console.log("Base: open Browser");
    }
    teardown(){
         console.log("Base: close Browser");
    }
}

class UITest extends BaseTest{
 setup(){
    super.setup();//super.--> helps to call the parent method/function //it prints - Base: open Browser
        console.log("UI: maximize window"); //UI: maximize window
    }
    teardown(){
        super.teardown(); //Base: close Browser
         console.log("UI : take Screenshot");//UI : take Screenshot
    }


}

let test  = new UITest();
test.setup(); // 
console.log("------");
test.teardown();