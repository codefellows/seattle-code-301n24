# Lecture Notes from Monday 12/13/2021
All times listed below are for Pacific Standard Time zone.

## Warm Up 6:30-6:45pm
- Let's look at some HTML and CSS and predict what we think will happen. 
- Take 5 minutes in your breakout rooms to discuss what you think the screen will look like, based off the code below.

### index.html

```html
<div>
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
</div>
```

### styles.css

```css
div {
  border: 10px solid yellow;
}

li { 
  border: 1px solid red;
  float: left;
  height: 25px;
  width: 100px;
}
```

## Code Review 6:45pm-7:15pm
- Demonstrating the solution code for lab-01. 
- Props is an object, special to React, that allows us to pass data down from parent components via a custom attribute on the child component. 
- The child component can access that data using `this.props.attributeName` syntax.
- Let's talk about how to render an image in React.
  - Photos can be imported into React components, from your src folder, just like any other resource.
  - You can also use an image's source URL and assign it to the `src` attribute on your img element.
  - Both ways are valid, but most jobs will have a style guide to follow that will determine which method they prefer.

## Remo Lab 7:15pm-8:15pm
- Take this time to finish up your lab from class-01.
- Apply any lessons learned from Code Review to your lab.
- Grab a TA if you are stuck.
- Resubmit your lab if needed.
- If you have already completed the lab, try out the Stretch Goals!!
  - YOU GOT THIS! Just try it out!

## Shred Talk on Code Challenge 8:15-8:30pm
- Introducing `array.map()`.
- Similar to `array.forEach()`, the `array.map()` method iterates over an array and runs a callback for each element.
- The difference is that `.map()` will always return you a new array of the same length as the original array, comprised of the return values from each function call.
  - The original array is never mutated.
  - You always get back a new array.
  - Remember, `.forEach` does NOT give us back an array. It returns `undefined` and that is why we have to push the results of each function call into a new, local array.

## Remo Lab 8:30pm-9:30pm
- Don't forget to work on a new branch!
  - `git checkout -b map`
- Don't forget to pull down the new challenges!
  - `npm run get-challenge 02`
- Take this time to start on your Code Challenges 02.
- Ask for TA help if you get stuck!


### As always, if you have any questions or concerns, please hit me up on Slack.
