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

## Refactoring

**Code refactoring** is the process of restructuring existing computer code—changing the inner workings without changing its external behavior. Refactoring is intended to improve nonfunctional attributes of the software.

In Other Words ...

* It's getting annoying to scroll this enormous server app
* Our functions are big and doing multiple tasks
* It's really, really unreadable
* Every API we add ... adds to these problems

### Demo 1: Refactoring

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


### Demo 2: Modules

- You can either build out the jobs board demo from scratch or have it already written. Either way, the goal is to modularize the back-end.
  - Start by pulling a big chunk of code out of the server (ie. everything that has to do with the callback). Then go though the code line by line to make sure you have all the dependancies that you need in your new file to run the function.
  - If students are feeling good about this, you can break it down further: pull the constructor function into its own module. 
  - What else can be pulled into its own module? How can we make it so that each function is only doing one thing?
  - Each time you make a change, run the code to make sure that it continues to work. If it is broken, chase the bug and fix it before moving on.

- If you have time, you can repeat this process with the code that you did for code review. This will give students a head start on the lab and help them see how this idea of modularization can be applied to different code bases.
