Promise.allSettled([
    Promise.resolve("Test A Passed"),
     Promise.reject("Test B Failed"),
      Promise.resolve("Test C Passed"),
]).then(function(results){
  results.forEach(function(r, i){
    console.log("Test " + (i+1) + ":", r.status, "-", r.value || r.reason )
  });

});
//r.status tells - whether promise:"fulfilled" ✅ or "rejected" ❌
//|| = OR operator -It returns the first truthy value
//r.value || r.reason - use value if present, otherwise use reason
//r.value || r.reason ensures we print success value or failure reason depending on promise status.

//this is like a test report = you want results for All tests, not just stop at the first failure

