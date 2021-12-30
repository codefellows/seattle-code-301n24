# Lecture Notes from Wednesday 12/29/2021: Class 06
All times listed below are for Pacific Standard Time zone.

## Holiday Break Schedule
- Wednesday 12/29/2021: Starting class 06 with Code Challenges
- Thursday 12/30/2021: Continueing class 06 with our lab demo/lecture.
- Saturday 01/01/2021: NO CLASS!! 
- Monday 01/03/2022: Class 06 lab day in Remo
  - That means that lab-06 is due Tuesday 01/04/2022.

## Warm Up 6:30-6:45p
# Warm-Up Exercise

Your teammate is new to React and has asked for your advice on this code. How would you advise them to break this code into components?

## app.js

```jsx
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      imageOne:"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
      imageTwo: "https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg",
      imageThree: "http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi",
      imageOneVotes: 0,
      imageTwoVotes: 0,
      imageThreeVotes: 0
    }
  }
  render() {
    return(
      <>
        <h1>Vote on Your Favorite Animal!</h1>
        <p>We have three adorable animals here. Vote on your favorite one and watch their likes go up!</p>
        <div onClick={() => this.setState({ imageOneVotes: this.state.imageOneVotes + 1 })}>
          <h2>UniWhal</h2>
          <span>likes: {this.state.imageOneVotes}</span>
          <img src={this.state.imageOne}>
        </div>
        <div onClick={() => this.setState({ imageTwoVotes: this.state.imageTwoVotes + 1 })}>
          <h2>Baby Rhino</h2>
          <span>likes: {this.state.imageTwoVotes}</span>
          <img src={this.state.imageTwo}>
        </div>
        <div onClick={() => this.setState({ imageThreeVotes: this.state.imageThreeVotes + 1 })}>
          <h2>Baby markhor</h2>
          <span>likes: {this.state.imageThreeVotes}</span>
          <img src={this.state.imageThree}>
        </div>
      </>
    )
  }
}
```

## Code Review 6:45pm-7:15pm
- Code Review Code Challenges from Class-05, `array.reduce` 
- ES6/React Review Gameshow - ?

## Remo Lab 7:15pm-8:15pm
- Take this time to finish up your lab from class-05 and resubmit.
- Apply any lessons learned from Code Review to your lab.
- Grab a TA if you are stuck.
- Try out the Stretch Goals!!
  - YOU GOT THIS! Just try it out!
- If you've already completed your lab:
  - Help another student who hasn't completed their lab yet.
  - Work on another assignment like a reading assignment or Career assignment.
  - Review today's Code Challenge [video demo](https://www.youtube.com/watch?v=8lVbQYfS0Rg&list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k&index=2).

## Shred Talk on Code Challenge 8:15-8:30pm
- Introducing Value vs Reference
- Docs and helpful resources:
  -  https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293
  -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
  -  https://www.w3schools.com/js/js_object_definition.asp
  -  https://developer.mozilla.org/en-US/docs/Glossary/Primitive
- Pass by Reference 
  -  the location reference is transferred to the new variable; efficient; one-step process
  -  assigning one variable to another would give us 2 different ways to access or change the same value
  - is similar to creating an ALIAS to the original. When your Mom calls you “Pumpkin Pie” although your name is Margaret, this doesn’t suddenly give birth to a clone of yourself: you are still one, but you can be called by these two very different names.
- Pass by Value 
  -  a new value is added to memory, and indicated by the new variable, more flexible
  -  every time we assign a variable to another variable, we have a new copy, that can be independently modified. 
  -  The price we pay for this flexibility is all the additional memory required to store all those copies.
  - Picture it like twins: they are born exactly the same, but the first twin doesn’t change when the second twin changes.
- How does JavaScript decide which method to use? Assign a new reference? Or make a new copy?
  - It decides based on what kind of value is being assigned.
    - If the value is large, complicated, or could change its memory footprint, it's assigned by reference, so no copy has to be made. The new variable points to the same place in memory as the source variable.
    - If the value is unchangeable (immutable), fixed size, and easy to store, it's assigned by copy. The new variable points to a new spot in memory, that contains a fresh copy of the source value. We call this "assigned by value".
- Primitive types: booleans, numbers, strings, and a few others...
- Objects: Arrays, functions, and of course object literals, and a few others ...
- Primitive types are always passed by value, and Object types are always passed by reference.


## Remo Lab 8:30pm-9:30pm
- Don't forget to work on a new branch!
  - `git checkout -b value-vs-reference`
- Don't forget to pull down the new challenges!
  - `npm run get-challenge 06`
  - You only need to run this command ONCE to grab all of the Code Challenges for this assignment.
- Take this time to start on your Code Challenges 06.
- Ask for TA help if you get stuck!

### As always, if you have any questions or concerns, please hit me up on Slack.
