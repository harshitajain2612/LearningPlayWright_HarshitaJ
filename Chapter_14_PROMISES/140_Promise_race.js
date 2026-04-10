//Promise.race() = first one to finish wins

let fastServer = new Promise(function(resolve){
    setTimeout(function(){
        resolve("Fast 100ms")
        
    }, 100)
});


let slowServer = new Promise(function(resolve){
    setTimeout(function(){
        resolve("Slow 500")
        
    }, 500)
});

Promise.race([fastServer,slowServer]).then(function(winner){
    console.log("Winner :" , winner)
});

//above one is used in the self healing concept