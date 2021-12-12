// ===== REVIEW LOOPS =====
// Loops offer a quick and easy way to do something repeatedly.
// Loops are handy, if you want to run the same code over and over again, each time with a different value.
// There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. 
// There are 5 different loops that we work with in JavaScript:
  // for loop: loops through a block of code a number of times 
  // while loop: loops through a block of code while a specified condition is true
  // do...while: also loops through a block of code while a specified condition is true
  // for...in: loops through the properties of an object
  // for...of: loops through the values of an iterable object

// ===== FOR LOOPS =====
// The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

// SYNTAX / PSEUDOCODE
// for (initialExpression; conditionalExpression; iteratorExpression) {
//   code block to run at every iteration;
// };

// When a for loop executes, the following occurs:
  // STEP 1: The initializing expression is executed once and initializes a loop counter.
  // STEP 2: The conditional expression is evaluated. If it evaluates to true, the loop statements execute. If it evaluates to false, the for loop ends.
  // STEP 3: The statements inside the code block execute.
  // STEP 4: Then the iterator expression is executed and either increments or decrements the loop to the next iteration.
  // STEP 5: Lastly, we circle back up to step 2 and the for loop continues to run until the condition returns false.

  // NAME ME SOMETHINGS YOU CAN PASS TO A FUNCTION AS AN ARGUMENT...
  // string, number, aray, object, variable, function

// ===== CALLBACK FUNCTIONS =====
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished
// The most popular place we will use a callback function is with JavaScript's built-in methods.


// CALLBACK FUNCTION DEMO
const desserts = ['Oreos', 'Cheesecake', 'Uncrustables', 'Cookie Dough'];

let deepFry = (dessert) => {
  dessert = 'Fried ' + dessert;
  console.log(dessert)
};

// deepFry(desserts)

let listMyFavDesserts = (callbackFunction, arr) => {
  for (let i = 0; i < arr.length; i++) {
    callbackFunction(arr[i]);
  }
}

listMyFavDesserts(deepFry, desserts);


// =====.FOREACH() =====
// It takes a callback as a parameter, which in turn receives the value and the index/iterator, and runs it on every element.

let myArray = ['a','b','c'];

myArray.forEach((currentValue, idx) => {
  console.log('the index is: ', idx);
  console.log('the currentValue is: ', currentValue);
});


// CONVERTING A FOR LOOP TO .FOREACH()
const studentsArray = ['McCall', 'Taytum', 'Marissa', 'Daniel', 'Ian', 'Layton', 'Mason'];

newArray = [];

// for loop
// for (let i = 0; i < studentsArray.length; i++) {
//   newArray.push(studentsArray[i])
// } 

// forEach
studentsArray.forEach(student => {
  newArray.push(student);
})

console.log(studentsArray)
console.log(newArray)

