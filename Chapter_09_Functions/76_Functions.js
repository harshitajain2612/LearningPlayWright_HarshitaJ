//Without function - repeated logic

let score1 = 85;

let result1 =  score1>=70 ? " pass" : "fail" ; //ternary operator
console.log(result1);

//so if there are so many conditions, we will have to write so many line, instead of that we will write a single line unsing function below.


let score2 = 90;
function getResult(scrore){

    return score2>=70 ? " pass" : "fail" ;
}

getResult(45);//Fail

getResult(95);//Pass