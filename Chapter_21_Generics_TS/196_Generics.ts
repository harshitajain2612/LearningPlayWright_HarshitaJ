function getFirstResult(name: string) : string {
    return "amit";
}

//above im not sure, we are not sure that we have to call this function with string only

getFirstResult("kimi");
//getFirstResult(123);


function getFirstResults<T> (results : T[]) : T {
    return results[0]!;
}

let furstCode = getFirstResults<number>( [200,404,500]);
let firstTest = getFirstResults<string> (["Login","Signp","Cart"]);


console.log("First Code",  furstCode );
console.log("First Code",  firstTest );

//First Code 200
//First Code Login

