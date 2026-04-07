//Searching and checking

let url = "https://staging.vwo.com/api/login?retry=true";
//includes
console.log(
url.includes("staging")); //true

console.log(url.includes("production")); //false

//startsWith / endsWith


url.startsWith("https"); //true
url.startsWith("http://"); //false

url.endsWith("true"); //true

//indexOf / lastIndexOf

console.log(url.indexOf("a"));//10

console.log(url.lastIndexOf("a")); //24

console.log(url.indexOf("nothere"));//-1 bcoz there is no index present in this string


//search() - accepts regex, retruns index

console.log(url.search(/login/)); // regular expression so it will retrun the o/p = 28, it means after 28th index, login is present


console.log(url.search(/\d+/)); //\d match with decimal [0-9]
