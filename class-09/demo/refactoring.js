'use strict';

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
}

// this function only needs to run person.getName() once, and caches it instead of calling it tweice within our conditionals.
function sayName(person) {
  let name = person.getName();
  if (person.age > 50) {
    console.log(name.toUpperCase());
  } else {
    console.log(name.toLowerCase());
  }
}

function sayNameBetter(person) {
  let name = person.getName();
  // ternary statement of one line conditions
  console.log(person.age > 50 ? name.toUpperCase() : name.toLowerCase());
}

let person = new Person('Jacob', 54);

// sayName(person);
// sayNameBetter(person);

function processPerson(data) {
  let name = data.name.toUpperCase();
  console.log('Processsing person : ', name);
  return name;
}

function nameToUpper(person) {
  return person.name.toUpperCase();
}
function logPerson(person) {
  console.log('Processsing person : ', person.name);
}

let processedName = processPerson(person);

let upperName = nameToUpper(person);
logPerson(person);
