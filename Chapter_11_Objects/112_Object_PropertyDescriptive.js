let obj = {name : "Login"};

console.log(Object.getOwnPropertyDiscriptive(obj , "name"));
//{
    value : "Login"
   // writable : true,      <--can change the value
   //enumerable : true,    <--shows in for..in/Object.keys()
   // Configurable : true   <--can delete or redefine
//}