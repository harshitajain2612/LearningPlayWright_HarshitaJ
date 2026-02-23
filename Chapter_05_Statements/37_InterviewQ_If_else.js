if ("hello") console.log("string is truthy"); //"hello" = truthy
if (42) console.log("Number is truthy"); 
if({}) console.log("Empty object is truthy");
if ([]) console.log("string is truthy"); //"hello" = truthy

if("") console.log("Won't print"); // '' --> falsy result

if (null) console.log("Won't print"); // '' --> falsy result

if (undefined) console.log("Won't print"); // '' --> falsy result

if (NaN) console.log("Won't print"); // '' --> falsy result

if(0) console.log("Won't print"); // '' --> falsy result

