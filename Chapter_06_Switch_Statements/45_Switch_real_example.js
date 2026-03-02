// we are working with api validation, we get the response codes

let responseCode = 404 ;


switch(responseCode) {
case 200:
console.log("200 ok");
break;
case 404:
console.log("404 not found")
break;
default:
console.log("Status code doesn't match")
}