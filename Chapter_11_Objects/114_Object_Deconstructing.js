const user = {name1 :"John", age :30 , city :"NYC"};

//basic deconstucting
const { name1, age }  = user;
console.log(name1);
console.log(age);

//renaming the variables

const { name1 :userName, age : userAge }  = user;
console.log(userName); //userName is an alias or alternate names
console.log(userAge); //userAge is an alias

//Default values

const { Country = "USA"}  = user;
console.log(Country);