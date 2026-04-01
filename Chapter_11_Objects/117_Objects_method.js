const obj = {a:1,b:2,c:3};

console.log(Object.keys(obj)); //[ 'a', 'b', 'c' ]

console.log(Object.values(obj));//[ 1, 2, 3 ]
console.log(Object.entries(obj)); //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

//we can also iterate over the object using for-in and for each loop.
for (const key in user){
    console.log(`${key}, ${user[key]}`);

} //prefer to user this one
//-----------------------------------------------
//Object key/values/entires

Object.keys(user).forEach( key => {

    console.log(key);
})
//-----------------------------------------------------
Object.entries(user).forEach(([key, value ] )=> {

    console.log(`${key}, ${value}`);
})
//the last one is rarely used
