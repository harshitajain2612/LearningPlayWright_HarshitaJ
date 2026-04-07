let suite1 = [{ name: "login", status: "pass" }];

let suite2 = suite1.map(test => ({ ...test }));

suite2[0].status = "fail";

console.log(suite1[0].status); // pass

//Shallow copy → copies reference (objects shared)

//Deep copy → copies actual values (independent)

//Spread operator creates a shallow copy, so nested objects still share references.
//  To avoid this, we need a deep copy using map, structuredClone, or JSON methods."


//we use this map + spread opeartor to avoid shared references and prevent mutation issues in arrays of objects.