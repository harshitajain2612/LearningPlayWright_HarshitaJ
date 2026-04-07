//Callback

function placeOrder(items, callback){//function  definition
    console.log("placing an order"); //placing an order
    callback();//function call
}
//we can use any name instead of callback, we can use any function name.

//callback should be called at the last
//whenever u are done, call me !!

//Define

function print(){
    console.log("Normal function - done with the sandwich");
}
//First way of function
placeOrder("Burger", print); //callback - done with the sandwich

//second way - anonymous function - which doesn't have a name

placeOrder("Burger", function(){
     console.log("anonymous - I am a function without name")
})

//Third way - Arrow function

placeOrder("Burger", ()=> {
     console.log("Arrow function - I am an arrow function")
})



//we can have unlimited number of callbacks