let browser = ["chrome","firefox", "safari", "opera", "edge"];
console.log(browser.length);//5

browser.pop();
console.log(browser);//[ 'chrome', 'firefox', 'safari', 'opera' ]

browser.shift("chrome");
console.log(browser);//[ 'firefox', 'safari', 'opera' ]

browser.unshift("chrome");
console.log(browser); //[ 'chrome', 'firefox', 'safari', 'opera' ]

browser.splice(1,2,"a","b");
console.log(browser); // [ 'chrome', 'a', 'b', 'opera' ]

for (let i =0; i<browser.length; i++)
{
   console.log(browser[i]); 
   if (browser[i]==="opera")
console.log("opera is removed from the selenium")
}