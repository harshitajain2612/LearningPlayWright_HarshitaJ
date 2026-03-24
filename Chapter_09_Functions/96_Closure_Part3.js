function maxRetyTracker(max){

    let attempts = 0 ;
    function tryAgain(testName){
        attempts++;
        if(attempts>max){
            return `${testName} exceeded max retries (${max})`;
        }
        return `Attempt ${attempts}/${max} for ${testName}`;
    }
    return tryAgain;
}

let retry = maxRetyTracker(3);
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));