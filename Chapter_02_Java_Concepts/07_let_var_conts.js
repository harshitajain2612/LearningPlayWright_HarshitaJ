//let, var, const


//var - Function Scoped

var a = 10; //Global Scope

//Definition of the function

function F1(){
    console.log(a);
    var a = 20; //Local Scope
    console.log(a);
    if(true){  var a = 30; //Local Scope
        console.log("F ->" ,a);
    }   
}
//Calling the function
F1();


let b = 50; //Global Scope

//Definition of the function

function F2(){
    console.log("Hello");
    let b = 20; //Local Scope
    console.log(b);
    if(true){  let b = 60; //Local Scope
        console.log("F ->" ,b);
    }   
}
//Calling the function
F2();

