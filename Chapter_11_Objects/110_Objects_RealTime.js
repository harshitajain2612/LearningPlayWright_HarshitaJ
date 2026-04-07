let config = {};
config.browser = "Chrome";
config.timeout = 3000;
config.timeout = 5000; //will pick the latest one
console.log(config);

delete config.browser; //we can delete the key like this


console.log(config);