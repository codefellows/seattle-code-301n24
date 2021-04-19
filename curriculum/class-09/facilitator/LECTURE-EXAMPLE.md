# Lecture Guide: Advanced Topics

### Warm-Up

- **Student Analysis** (5 min)
  - Show or print the [warm-up code](../warm-up/warm-up.md)
- **Debrief** (5-10 min)
  - Refer to the [Warmup Notes](../warm-up/NOTES.md)
  - Optionally demo the running code at Repl.it

### Shred Talk

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

### Promises and Async

- **Why** (5 min)
  - Node/Express takes advantage of javascript's asynchronous coding pattern
  - We don't want to always write "blocking" code
  - We don't always need to wait for code to complete
  - Javascript is really good at it -- we can use this idea to multi-task
- **What** (10 min)
  - The Event Loop and Call Stack
    - Detect async patterns and push that to the side for a while
  - Promises and Callbacks
- **How** (30 min)
  - Run a promise demo that showcases how things can be out of order
  - Focus on the syntax and when/how we process data
  - `.then()` and `.catch()` and how they interact with the process
  - How does Javascript process code?

* The first thing we need to agree on is that not everything happens in sequence.
* We have already experienced some measure of "Event Driven" programming (event listeners) where code that you write doesn't actually run until something triggers it (or even, never)
* There are other instances where code doesn't run in the order it appears, or that you think it does.
* Javascript (both Node and in the browser -- they share the "V8" engine) has the ability to recognize code that might take a while to run.
  * It runs this code in a separate process, off to the side
  * When it finishes, the code that was written to handle the result then gets to run.
  * In the meantime, Javascript allows your other code to go on in sequence.
* This system is known as the "Event Loop"
  * The Javascript system runs code that can be run.
  * When it encounters something asynchronous, it starts it off to the side
  * Continues with other code
  * Picks up the async stuff when it gets back.
  * And so on.
* (This is a great time to be drawing a simple picture of this)
  * Don't do a full call stack / callback queue drawing, just the basic loop

- One way that Javascript handles asynchronous tasks is with "Promises"

* A "promise" is exactly that ... your code promises to do some work and then either say "Ok I did it, here's some data" or "I failed"
  * OK = "Resolve"
    * Any data "resolved" is given to you to process
    * A code block called `.then()` handles a good promise and gets that data
  * "I Failed" = Reject
    * `.catch()` handles the rejections and gets any error as it's param
    * A `.catch()` can "return" a good value and then any subsequent `.then()` blocks can continue to work.
    * In essence, `.catch()` can patch things up if it wants.
  * **promise demo**

## Refactoring

**Code refactoring** is the process of restructuring existing computer code—changing the inner workings without changing its external behavior. Refactoring is intended to improve nonfunctional attributes of the software.

In Other Words ...

* It's getting annoying to scroll this enormous server app
* Our functions are big and doing multiple tasks
* It's really, really unreadable
* Every API we add ... adds to these problems

### Refactoring

- Conduct the refactoring demo and discuss some of the strategies
- Once students get a feel for refactoring, break them into small groups and put them into breakout rooms. Give them a chunck of code to refactor and 10 mintues to do it. When you meet back, go over the different solutions.

**Refactoring Basics**

The refactoring demo gives you a few examples of things to look for when refactoring. You do these and more every day in code review, but it's good to take a step back and dissect them.

**Variable Caching**

Start by building a simple object. We'll use it during this demo.

```javascript
const Person = function(name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.getName = function() { return this.name; };

let person = new Person('Fred', 51);
```

This is bad code -- while it's no less efficient than the refactored version, you are relying on a method and it's return value in multiple places in the same function.

```javascript
function sayName(person) {
  if (person.age >= 50) {
    return person.getName().toUpperCase();
  } else {
    return person.getName().toLowerCase();
  }
}

console.log(sayName(person));
```

better -- cache a reference to it, just once. This seems trivial, but this allows the `getName()` function or the person object to change, leaving you with one place to make changes, not 'n'

```javascript
function sayNameBetter(person) {
  let name = person.getName();
  if (person.age >= 50) {
    return name.toUpperCase();
  } else {
    return name.toLowerCase();
  }
}

console.log(sayNameBetter(person));
```

even better -- use a ternary

```javascript
function sayNameEvenBetter(person) {
  let name = person.getName();
  return person.age >= 50 ? name.toUpperCase() : name.toLowerCase();
}

console.log(sayNameEvenBetter(person));
```

**PROMISES**

Here's a simple example that alters the way we call nested promises. While both works, one of these is much more readable. Specifically, it takes advantage of the fact that `.then()` always returns to the next `.then()` so you can easily write functions that return things to your chain.

```javascript
function doSomethingAsync(person) {
  return Promise.resolve(person);
}

doSomethingAsync(person)
  .then( data => {
    data.name = data.name.toUpperCase();
    console.log('ugly upper', data.name);
    return data;
  })
  .then(differentData => {
    differentData.name = differentData.name.toLowerCase();
    console.log('ugly lower', differentData.name);
  });
```

This is much more readable, even if it did require us to make some extra functions. Heck ... they might even be reusable.

```javascript

doSomethingAsync(person)
  .then( data => changeNameToUpper(data.name) )
  .then( name => print(name) )
  .then( name => changeNameToLower(name) )
  .then( name => print(name) )

function changeNameToUpper(name) {
  return name.toUpperCase();
}

function changeNameToLower(name) {
  return name.toLowerCase();
}

function print(words) {
  console.log('pretty', words);
  return words;
}
```


### Modules

- You can either build out the jobs board demo from scratch or have it already written. Either way, the goal is to modularize the back-end.
  - Start by pulling a big chunk of code out of the server (ie. everything that has to do with the callback). Then go though the code line by line to make sure you have all the dependancies that you need in your new file to run the function.
  - If students are feeling good about this, you can break it down further: pull the constructor function into its own module. 
  - What else can be pulled into its own module? How can we make it so that each function is only doing one thing?
  - Each time you make a change, run the code to make sure that it continues to work. If it is broken, chase the bug and fix it before moving on.

- If you have time, you can repeat this process with the code that you did for code review. This will give students a head start on the lab and help them see how this idea of modularization can be applied to different code bases.
