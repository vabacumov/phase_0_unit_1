// I paired [by myself, with:] on this challenge.
Yohan Yi
// __________________________________________
// Write your code below.
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", 1, true, "Mary"];






// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// As can be seen from above, I wasn't working on this challenge alone. It was indeed a great choice to pair up on.
// Me and my partner got going quickly, it was pretty obvious what needed to be done for each test, so I can't say 
// that we had much trouble getting through this at all. Our strategy was to switch the driver/navigator roles about
// halfway through the challenge, so in this sense, it was very effective. In fact, we were very confident in completing
// this assignment. Our knowledge level required in order to get through this challenge was rather solid, as we didn't 
// seem to run into any trouble whatsoever. However, in the end, I think that we both found this assignment to be quite 
// enjoyable and useful becase it allowed us to repeat and make sure we solidify the material that we've already learned.
// 
// 
// 
// 


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}



assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)
