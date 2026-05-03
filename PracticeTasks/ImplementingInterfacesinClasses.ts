//When a class implements an interface, it agrees to follow its structure.


//implements = “this class must define all properties & methods of the interface”

//Step 1: Define interface
interface User {
  id: number;
  name: string;
  greet(): string;
}

//Step 2: Implement in class

class Person implements User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  greet(): string {
    return "Hello " + this.name;
  }
}

//Step 3: Use it

const p = new Person(1, "Harshita");
console.log(p.greet());

//Hello Harshita