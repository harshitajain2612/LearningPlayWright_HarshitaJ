interface UI{
    id : number;
    name1: string;
    phone? : number
    email? : string
} 

const u1 :UI = {
    id : 1,
    name1 : "harshita"
}; //valid 
const u2: UI = {
  id: 2,
  name1: "Rahul",
  email: "rahul@example.com"
}; // also valid

//Optional + methods

interface User {
  name: string;
 greet?: () =>string; // optional method
}

interface ApiUser {
  id: number;
  username: string;
  phone?: string;
  address?: string;
}