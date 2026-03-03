let score = 90;

if ( typeof score !== "number"){
    console.log("please provide the number, string not allowed");
    return;
}

if (score<0 || score>100)
    {
    console.log("Score can be less than 0 and greater than 100");
    return;
}

if(score>=90 && score <=100){
    console.log("Grade A")
}
else if(score>80 && score <=89){
    console.log("Grade B")
}else if
(score>=70  && score <=79){
    console.log("Grade C")
}else if (score>=60  && score <=69){
    console.log("Grade D")
}
else if (score>=0 && score <=59){
    console.log("Grade F")
}else{
    console.log("invalid marks")
}

//template literal

console.log(`for the score ${score} "Grade is --> ",${grade}`);
