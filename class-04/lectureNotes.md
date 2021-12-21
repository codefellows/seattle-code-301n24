# Lecture Notes from Monday 12/20/2021
All times listed below are for Pacific Standard Time zone.

## Warm Up 6:30-6:45p
- Read through this code as if you are the interpreter. Find all of the mistakes in this code and write down the correct syntax for each mistake.

### App.js

```
import Header from './header.js';

class App extends React.Component {
  constructor {
    super(props)
    this.state={
      counter=0
    }
  }

  addCount = () => {
    this.setState({ counter: counter++ });
  }

  render() {
    return(
      <button click={addCount}>Click Me</button>
      <p>this.state.counter<p>
      <Header title="the best counter app in the world!">
    )
  }
}

export App;
```

### Header.js

```
class Header extends React.Component {
  render(){
    <h1>{title}</h1>
  }
}

export Header;
```

## Code Review 6:45pm-7:15pm
- Demonstrating the solution code for lab-03. 
-  Display a Modal
  - Import the data.json file into your App component and send that data into the Main component
  - Map over the JSON data in your Main component to render each beast
  - Send a function into your Main component that allows the user to update state in the App
  - Create a SelectedBeast component and include it in your App
  - Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Boothstrap

## Remo Lab 7:15pm-8:15pm
- Take this time to finish up your lab from class-03.
- Apply any lessons learned from Code Review to your lab.
- Grab a TA if you are stuck.
- Resubmit your lab if needed.
- Try out the Stretch Goals!!
  - YOU GOT THIS! Just try it out!
- If you've already completed your lab, work on another assignment like a reading assignment or Career assignment.

## Shred Talk on Code Challenge 8:15-8:30pm
- Introducing `array.sort()`.
- `array.sort( [compareFunction] )` sorts an array in place -- mutating the array. There is no return value.

### The `compareFunction` is a function that is used by sort to evaluate sibling values in turn, and sort in the appropriate order.
- If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
- If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. 
- If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.

### Compare Function Setup

```js
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

```

### Caveats and Notes
- The speed and technique of the sort functionality internally is determined by JavaScript, so you can't depend on a consistent "complexity" or "time"
- compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined.

## Remo Lab 8:30pm-9:30pm
- Don't forget to work on a new branch!
  - `git checkout -b sort`
- Don't forget to pull down the new challenges!
  - `npm run get-challenge 04`
  - You only need to run this command ONCE to grab all of the Code Challenges for this assignment.
- Take this time to start on your Code Challenges 04.
- Ask for TA help if you get stuck!

### As always, if you have any questions or concerns, please hit me up on Slack.
