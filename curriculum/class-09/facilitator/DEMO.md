# Demos: Advanced Topics

## Refactoring Basics

The refactoring demo gives you a few examples of things to look for when refactoring. You do these and more every day in code review, but it's good to take a step back and dissect them.

### Variable Caching

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

### PROMISES

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
