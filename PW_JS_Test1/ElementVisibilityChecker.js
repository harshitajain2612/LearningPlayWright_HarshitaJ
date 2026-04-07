let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

let state;
let action;

// Determine element state
if (isPresent === true && isDisplayed === true && isEnabled === true) {
  state = "READY";
  action = "Safe to interact with element.";
}
else if (isPresent === true && isDisplayed === true && isEnabled === false) {
  state = "DISABLED";
  action = "Element is disabled. Verify business rule or wait for enable condition.";
}
else if (isPresent === true && isDisplayed === false) {
  state = "HIDDEN";
  action = "Element is hidden. Check visibility condition or UI rendering.";
}
else {
  state = "NOT FOUND";
  action = "Locator issue or element not loaded.";
}

// Determine severity using ternary operator
let severity = (!isPresent)
  ? "CRITICAL"
  : (!isDisplayed || !isEnabled)
    ? "WARNING"
    : "OK";

// Final Report
console.log("===== UI ELEMENT VALIDATION REPORT =====");
console.log(`State    : ${state}`);
console.log(`Severity : ${severity}`);
console.log(`Action   : ${action}`);