let n1 = 5;

for (let i = 1; i <= n1; i++) {
    let row = "";

    // spaces first
    for (let j = 1; j <= n1 - i; j++) {
        row += "  ";   // important for alignment
    }

    // stars
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row.trim());
}