//* * * * *
 //* * * *
  //* * *
   //* *
   // *


   let n = 5;

for (let i = 0; i < n; i++) {
    let row = "";

    // spaces
    for (let j = 0; j < i; j++) {
        row += " ";
    }

    // stars
    for (let k = 0; k < n - i; k++) {
        row += "* ";
    }

    console.log(row);
}