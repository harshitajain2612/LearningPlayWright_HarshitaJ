//write a function makeLimitRater(limit) that returns a function.
//Each cell  to the returned function should track the usage and return true if under limit 
// , false when limit is execeeded.

function makeLimitRater(limit){

    let call = 0 ;
    function check(){
        call++;

        return call <= limit;
    }
    return check;
}
let limiter = makeLimitRater(3);

console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());

//the above one we will be using in the API
