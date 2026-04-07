//1. if APIStatusCode >=200 && APIStatusCode<300(using basic function)

function getStatusCode(status){

    if(status >=200 && status<300)
        console.log("code is fine");
}

getStatusCode(201);

getStatusCode(500);

//2. function as expression

const getStatusCode2 = function (status2){

    if(status2 >=200 && status2<300)
        console.log("code is fine");
}

getStatusCode2(201);

getStatusCode2(500);


//3. we can write like below using arrow function:


const getStatusCode4 = (status4) => {

    if(status4 >=200 && status4<300)
        console.log("code is fine");
}

getStatusCode4(201);

getStatusCode4(500);

//or  below using return 
const getStatusCode1 = status1 => {
if(status1 >=200 && status1<300) return "pass";
    return "fail"

}

console.log(getStatusCode1(400));