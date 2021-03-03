# Demos: Advanced Topics

## Pagination

> `demo/website` and `demo/server`

To implement pagination, we're going to need to add logic to both the Website and the Server.

**The Website** will a button for the user to click on to get more data, and will then need to ask the server for more results, telling the server which "page" or "set" of results to get. It will need to remember what it's asked for and is showing. By default, just show/ask for the first page.

At the top of app.js, declare a couple of globals. You'll want to keep track of what "page" we're on in that restaurant column. And also, the `getRestuarants` function is expecting a `location` object to be passed to it. Normally, that happens right after we do a search. For pagination, we need to remember what was last searched for and pass that along.

```javascript
// We need some globals for pagination purposes...
let page = 1;
let lastLocation = {};
```

**Button Click Handler** - Invokes the `getRestaurants` function with the last location we used in the search field. Note the `() => {}` which we use because we want to call the get function with a param.

```javascript
$('#getMoreRestaurants').on('click', () => {
  ++lastLocation.page; // This will make it page 2, 3, etc as they click the button
  getRestaurants(lastLocation);
});
```

The `fetchCityData()` function needs to change slightly to add the page number to the `location` object. This gets passed directly to the server

```javascript
  $.ajax(`${API}/location`, ajaxSettings)
    .then(location => {
      location.page = page; // Add the page to the object being sent to the fetch methods
      lastLocation = location;
      ...
```

**The Server** changes only slightly. For the restaurant handler, we simply need to set the page number (defaulting it to the first page). This particular API doesn't have a "page" setting, but instead has a **start** and a **count**, so we have to simulate pages by using those numbers. As with the UI, we'll start the page off at 1, so that our math works.

Once we have a good start number (1, 3, 5, etc), then just pass it along to the query string on the request, and that's it.

Note that other APIs will very likely do pagination differently. Students will need to read documentation to figure it out!

```javascript
const numPerPage = 2;
const page = request.query.page || 1;
const start = ((page - 1) * numPerPage + 1);
```

Notice also, that we refactored the 2 separate data calls into a common `getResource()` which matches the `app.js` pattern found in the deployed City Explorer App that the students are coding against.

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
