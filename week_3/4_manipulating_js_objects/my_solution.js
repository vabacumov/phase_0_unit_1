
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}


/* Pseudocode

Give adam a name property with the value "Adam".

Add a spouse property to terah and assign it the value of adam.

Change the value of the terah weight property to 125.

Remove the eyeColor property from terah.

Add a spouse property to adam and assign it the value of terah.

Add a children property to terah and and use object literal notation to assign this variable the value of a JavaScript Object object with no properties

Add a carson property to the value of the terah children property and assign it the value of an object with the property name with a value of "Carson".

Add a carter property to the value of the terah children property and assign it the value of an object with the property name with a value of "Carter".

Add a colton property to the value of the terah children property and assign it the value of an object with the property name with a value of "Colton".

Add a children property to adam and assign it the value of terah children. */

// __________________________________________
// Write your code below.
var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children;


// __________________________________________
// Reflection: Use the reflection guidelines
// This challenge went really smooth for me. I didn't run into any problems.
// Since the pseudocode was already available, it wasn't very hard to translate it
// into the actual code. My strategy was just adding a line of code and running the 
// test step-by-step making sure everything works along the way. I only had to 
// turn to an additional resource to remind myself how to remove a property from an 
// object, so I went to W3Schools.com. Overall, I was very confident going through this  
// challenge and it reminded me a lot of Challenge 3, although I completed that one with 
// a partner. This assignment was not at all tedious but I can't say that I had too much 
// fun completing it either.


//__________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)