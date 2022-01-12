# Lecture Notes from Monday 01/10/2022: Class 09
All times listed below are for Pacific Standard Time zone.


## Warm Up 6:30-6:45p
This code sample is written in Python. Read through the code and determine the output for this function.

```
def search(source: list, key: int) -> int:
    start = 0
    end = len(source) - 1

    while abs(start - end) > 1:
        mid = abs(start + end) // 2

        if key == source[mid]:
            return mid

        if key > source[mid]:
            start = mid + 1

        if key < source[mid]:
            end = mid - 1

    return -1
```


## Code Review 6:45pm-7:45pm
- Code Challenges #8? Which ones?
- Full lab 8 build out or student-led code review?
- Feature 3: Publish
  - Deploy your server. As a user, I want to access the City Explorer application on the web, so that anyone can explore from anywhere.s
  - Let's do it together!


## Remo Lab 7:45pm-8:15pm
- Take this time to finish up your lab from class-08 and resubmit.
- Apply any lessons learned from Code Review to your lab.
- Grab a TA if you are stuck.
- Try out the Stretch Goals!!
  - YOU GOT THIS! Just try it out!
- If you've already completed your lab:
  - Review today's Code Challenge [video demo](https://www.youtube.com/watch?v=NGvpqw8PQZU&list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k&index=6&ab_channel=CodeFellowsLectures).
  - Work on another assignment like a reading assignment or Career assignment.


## Shred Talk on Code Challenge 8:15-8:30pm
- OBJECT.KEYS: takes in an object as an argument and returns an array of keys (properties)
  - DOCS:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  - SYNTAX: `Object.keys(obj)`
  - INPUT: The object of which the enumerable's own properties are to be returned.
  - OUTPUT: An array of strings that represent all the enumerable properties of the given object.
- OBJECT.VALUES - Returns an iterable array of just the values from the object
  - DOCS:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
  - SYNTAX: `Object.values(obj)`
  - INPUT: The object whose enumerable own property values are to be returned
  - OUTPUT: An array containing the given object's own enumerable property values.
- OBJECT.ENTRIES - Returns an array of each "Entry" as an an array with a key and value
  - DOCS:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
  - SYNTAX: `Object.entries(obj)`
  - INPUT: The object whose own enumerable `[key, value]` pairs are to be returned.
  - OUTPUT: An array of the given object's own enumerable `[key, value]` pairs

## Remo Lab 8:30pm-9:30pm
- Don't forget to work on a new branch!
  - `git checkout -b objects`
- Don't forget to pull down the new challenges!
  - `npm run get-challenge 08`
  - You only need to run this command ONCE to grab all of the Code Challenges for this assignment.
- Take this time to start on your Code Challenges 08.
- Ask for TA help if you get stuck!


## Career Assignments
- Career: Attend a Networking Event
  - Due this Friday!
- Career: Behavioral Questions & Mock Interviews
  - Due this Saturday!


### As always, if you have any questions or concerns, please hit me up on Slack.

## Class 09 - DEMO: Promises / Refactoring our Code

### What is a Promise?

- Response from an API.
- Produces a single value from some time in the future.
- It an object.
- It's for handling asynchronous code????
  - code that waits for a response.

```js

// most current versions of js have this built in.
new Promise();

```

Tiara - Are there common bugs that pop up when using promises?
  - yeah there are, lots of syntax bugs from the period of doom (misplaced closing brackets, especially withou fat arrow functions).
Marni - Does chaining always use a period?
 - yes. Chained function are always connected with a period.
Jacob - Is there a limit on how much time you can set for the run when function?
Serget - Reading on Promises?

## Refactoring

What is it? Why do we refactor?

Taking code that already works, and making changes to the operations within without modifying the over all behaviors. The goal is to make our code "better".

```javascript

function getCharacter() {

}

getCharacters({name: 'Jacob'}); // ['J', 'a', 'c', 'o', 'b];

```

- What makes some code better than others?
  - Is my code easy to read?
    - How many things are your functions doing?
  - Is my code DRY (Do not repeat yourself?
    - If you repeat your code, it becomes hard to maintain
  - Is my code inefficient?
    - a loop that runs within another loop.


```js

const colors = [colors1, color2, color2, color4];
const char; // your character to check for

switch(char) {
  case 5:
    colors.push(color5);
  case 4:
    colors.push(color4);
  case 3:
    colors.push(color3);
  case 2:
    colors.push(color2);
  case 1:
    colors.push(color1);
  default:
    return throw new Error();
```


