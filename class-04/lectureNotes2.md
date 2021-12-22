# Lecture Notes from Tuesday 12/21/2021
All times listed below are for Pacific Standard Time zone.

## Lecture & Lab Demo 6:30-8:30pm
### Forms in react
  #### Why?
    - it is the best way to get information from a user (the usual way)
    - authentication (userName and password)
  #### What?
    - a way to interact with a user to collect data
  #### How?
    - we can still use `form` or we can use third-party library component, like bootstrap

### Event Listeners in React
  - onClick, onSubmit, onChange
  - attach a listener via an attribute on a component/element
  - onClick
    - when someone clicks on an element/component do something
  - onSubmit
    - when someone submits a form, remember this is just like a form in js 
      - `e.preventDefault()`
  - onChange
    - fires the handler any time a change is made to an input field
  - Pros and Cons
    - onSubmit useful for lots of information
      - captures the values from the entire form and waits for the user to tell the app it is ready to submit data before capture
    - onChange captures state for every additonal character in the input
      - onChange is a little more 'reacty' when the value is being updated by the user we can make that our state and then use the value on input element to reflect the current state

## Remo Lab 8:30pm-9:30pm
- Take this time to start on your lab from Class-04.
- This lab is due no later than Thursday, December 23th by 6:30pm(PST).
- Don't forget the 15 minute rule!
- It really helps to work with other students!
- Ask for TA help if you get stuck!


### As always, if you have any questions or concerns, please hit me up on Slack.
