let sideLength1 =  10, sideLength2 = 10, sideLength3 = 10;

if (sideLength1===sideLength2 && sideLength2===sideLength3){
    console.log("triangle is Equilateral");
}
else if (sideLength1 === sideLength2 || sideLength2 === sideLength3 || sideLength1 === sideLength3){
    console.log("triangle is Isosceles");
}
else {
    console.log("Triangle is Scalene");
}


