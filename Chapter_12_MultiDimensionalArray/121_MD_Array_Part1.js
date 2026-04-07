let grid = [

    [10,20,30],
    [40,50,60],
    [70,80,90]
]; //3*3

//Access - [row][column]
console.log(grid[0][0]); //10

console.log(grid[1][2]);//60


console.log(grid[2][1]);//80

grid[0][0] = 90;
console.log(grid[0][0]); //90

console.log(grid);//[ [ 90, 20, 30 ], [ 40, 50, 60 ], [ 70, 80, 90 ] ]

console.log(grid.length); //this gives the number of rows present in the array which is 3

console.log(grid[0].length); //number of columns in row 0


console.log(grid[grid.length-1][grid[0].length-1])//3-1=2,3-1=2 => [2][2] = 90

let testMatrix = [
    ["login","pass",200],
    ["checkout","fail",404],
    ["search","pass",180]
]

for (let i = 0 ; i <testMatrix.length ; i++){

    for (let j = 0 ; j < testMatrix[i].length ; j++){
        console.log(testMatrix[i][j])
    }
    console.log();
}

console.log("----------------------------");


for(let row of testMatrix){
    for (let cell of row){
        process.stdout.write(cell + " ") //Print the value of cell with a space in the terminal”
    }
    console.log() //added new line
}

//ForEach loop

testMatrix.forEach(row => {
    row.forEach(cell =>process.stdout.write(cell + " ") );
    console.log();
}


);
