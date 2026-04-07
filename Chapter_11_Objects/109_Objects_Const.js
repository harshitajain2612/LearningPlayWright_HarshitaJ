const user = {
name : "John",
age : 30,
email :"john@example.com"

};

console.log(user);

//Accessing the properties

console.log((user.name));

console.log(user["age"]);

//Dynamic property access

const key = "email";
console.log(user[key]);

//Adding/modifying properties

user.city = "NYC";
user.age = 40;

console.log(user)
//objects and keys can be altered