let value ="5";

switch(value){
    case 5 : 
    console.log("Number 5 matched");
    break;
    case "5" :
        console.log("String '5' matched");
        break;
}

//Value is string and its a strict match, it will print string 5 matched
//switch uses strict match ===