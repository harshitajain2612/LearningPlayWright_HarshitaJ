//In TypeScript,
//  you can make one interface inherit properties from another using the extends keyword.

interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  id: 1,
  name: "Harshita",
  role: "SuperAdmin"
};

// Multiple inheritance

interface Person {
  name: string;
}

interface Employee {
  empId: number;
}

interface Manager extends Person, Employee {
  teamSize: number;
}

//🔹 Extending with optional properties

interface User {
  id: number;
  name: string;
}

interface Customer extends User {
  phone?: string;
}


//🔹 Method inheritance

interface Animal {
  speak(): void;
}

interface Dog extends Animal {
  breed: string;
}

//💡 Real-world example (very useful)

interface ApiResponse {
  status: number;
  message: string;
}

interface UserResponse extends ApiResponse {
  data: {
    id: number;
    name: string;
  };
}