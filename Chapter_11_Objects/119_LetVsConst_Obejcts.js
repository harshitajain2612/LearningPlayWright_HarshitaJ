const config1 = { browser : "chrome", timeout : 3000};

//Modifying properties - allowed in objects

config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 4;
console.log(config1);

//below reassignment is not allowed using const
//config1 = { browser : "safari"};
//console.log(config1);
 


//let vs const


//below reassignment is not allowed using let

let config = { browser : "chrome", timeout : 3000};
config = { browser : "safari"};
console.log(config);