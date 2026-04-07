const MAX_ATTEMPTS = 5;

let attempt = 0;
let success = false;

do {
  attempt++;
  let randomValue = Math.random();

  console.log(`Attempt ${attempt} - Random Value: ${randomValue.toFixed(2)}`);

  if (randomValue > 0.6) {
    success = true;
    console.log("API Call Successful ✅");
  } else {
    console.log("API Call Failed ❌ - Retrying...");
  }

} while (!success && attempt < MAX_ATTEMPTS);


// Final Result
console.log("\n===== FINAL RESULT =====");

if (success) {
  console.log(`Success after ${attempt} attempt(s).`);
} else {
  console.log(`Failed after ${MAX_ATTEMPTS} attempts. Max retries reached.`);
}