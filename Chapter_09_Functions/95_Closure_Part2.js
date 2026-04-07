function makeCounter(start = 0){

    let count  = start;

   // function increment(){
   //     count++;
   // }
   //    function decrement(){
   //     count--;
   // }
   //    function get(){
    //    return count;
   // }
    return {
        increment(){count++;},
        decrement(){count--;},
       get(){ return count;} 
    }
}

let counter =   makeCounter(0);

counter.increment();//1
console.log(counter.get());
counter.increment();
counter.increment();//3
console.log(counter.get());
counter.decrement();//2
console.log(counter.get());
