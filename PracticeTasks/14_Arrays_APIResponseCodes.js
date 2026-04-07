let responses = [200, 201, 404, 500, 404, 200, 503];

// 1. All success check
let allSuccess = responses.every(code => code >= 200 && code <= 299);

// 2. First non-success
let firstError = responses.find(code => code < 200 || code > 299);

// 3. Unique error codes
let uniqueErrors = [...new Set(
  responses.filter(code => code < 200 || code > 299)
)];

console.log("All Success:", allSuccess);
console.log("First Error:", firstError);
console.log("Unique Errors:", uniqueErrors);


//.every() → checks ALL elements

//.find() → returns FIRST match

//Set → removes duplicates