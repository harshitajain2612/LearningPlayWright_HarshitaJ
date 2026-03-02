0 ==""  //true (loose equality operator checks for value only, so it converts the string "0" to the number 0 before comparison)
0 === "0" //false (strict equality operator checks for both value and type, so it does not convert the string "0" to the number 0 before comparison)            
0 =="0" //true (loose equality operator checks for value only, so it converts the string "0" to the number 0 before comparison)

0 == false //true (loose equality operator checks for value only, so it converts the boolean false to the number 0 before comparison)
0 === false //false (strict equality operator checks for both value and type, so it does not convert the boolean false to the number 0 before comparison)

null == ubdefined //true (loose equality operator checks for value only, so it considers null and undefined to be equal)
null === undefined //false (strict equality operator checks for both value and type, so it does not consider null and undefined to be equal)\

"\t\n" == 0 //true (loose equality operator checks for value only, so it converts the string with whitespace characters to the number 0 before comparison)
"\t\n" === 0 //false (strict equality operator checks for both value and type, so it does not convert the string with whitespace characters to the number 0 before comparison)  

//Rule breakers
//1. Do not use reserved keywords as variable names
//2. Do not use undefined and null as variable names
//3. Do not use infinity as a variable name

null  == 0; //false (loose equality operator checks for value only, so it does not consider null to be equal to 0)
undefined == 0; //false (loose equality operator checks for value only, so it does not consider undefined to be equal to 0)
null == ""; //false (loose equality operator checks for value only, so it does not consider null to be equal to an empty string)
undefined == ""; //false (loose equality operator checks for value only, so it does not consider undefined to be equal to an empty string)
undefined == false; //false (loose equality operator checks for value only, so it does not consider undefined to be equal to false)
null == false; //false (loose equality operator checks for value only, so it does not consider null to be equal to false)
NaN == NaN; //false (NaN is not equal to anything, including itself, so it returns false)
NaN === NaN; //false (NaN is not equal to anything, including itself, so it returns false)