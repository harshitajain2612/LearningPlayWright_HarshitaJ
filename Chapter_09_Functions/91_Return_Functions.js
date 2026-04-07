function getStatus(code){

    if (code>=200 && code < 300) return "success";
    if (code>=400 && code < 500) return "client error";
    if (code>=500) return "internal server error";
}

getStatus(200);
getStatus(404);
getStatus(500);
//-------------------------------------------------------------------------------
//2nd tricky question

function logTest(name1){

    console.log(`Running: ${name1}`)
    //no return statement
}

logTest("Hi");
//-----------------------------------------------------------------------------
//Return multiple values using an array or objects

function aaa(){
    return [1,2,3,4,5,6]//array
    return ("name : kimi");//object
}