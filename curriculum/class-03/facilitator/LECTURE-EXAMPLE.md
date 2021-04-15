# Lecture Notes: Axios and Bootstrap

## Warm-Up 

- **Student Analysis** (5 min)
  - Show or print the [warm-up code](../warm-up/warm-up.md)
- **Debrief** (5-10 min)
  - Refer to the [Warmup Notes](../warm-up/NOTES.md)
  - Optionally demo the running code at Repl.it

## Shred Talk 

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

## Code Review 

- Students will have attempted their first code challenge following Class 02. Use your code review time to not only review a few of the challenges, but to re-implant the TDD workflow with the class.
  - Every day a new branch
  - Every challenge a new folder
  - TDD
  - Submit a PR for grading
  - Do not merge your code!

## Mapping over data 

- **Why** (5 min)
  - React is an excellent templating framework that allows us to take large datasets and map over them to display them
- **What** (10 min)
  - a built in array method that returns a new array
  - allows you to change the shape of the data
- **How** (30 min)
  - Start with the code from code review and point out how repetitive and tiring entering in all of the information about each horned beast was. 
    - If the code you used during code review had already figured out how to use .map(), you can use that code and work backwards. Demonstrate how the instructions would actually lead you to create repetitive code (like the solution code), and show how the student used .map() to simplify that code.
  - Refactor the code, importing the data.json file and use .map() to render each component to the page. 
  - This will be their first introduction to accessing properties from an object in an array so spend lots of time going over where each value is coming from in addition to the syntax of using .map() in the JSX.
  - You might want to spend some time giving students a chance to practice accessing nested properties in an object since this can be an especially challenging concept.
- **Experimentation and Discovery Ideas**
  
## Passing Functions as Props 

- **Why** (5 min)
  - at times the child component needs to interact with information in the parent component
  - at times the child component needs a way to update state in the parent component
- **What** (10 min)
  - the parent component sends a function into the child component on the props that will allow the child component to interact with information in the parent component by invoking that function.
- **How** (50 min)
  - Demonstrate this concept via the demo: passing-functions
  - Be aware that this concept is really challenging for students to wrap their heads around so spend lots of time following the flow of information from the parent component to the child component and back up to the parent component. Use a lot of whiteboard drawings.
  - This is also a good time to remind them how stacked learning works, and that it is alright if they don't understand this concept completely right now. They will very soon.

**Experimentation and Discovery Ideas**
  - Once you have completed the demo, play around with passing other functions through props. Get ideas from the students. What are other things that the child component might want from the parent component? 

  - If you have time, introduce ternary statements, and demonstrate how to use conditional rendering in JSX using a ternary statement. If you don't have time for this, make sure you cover this concept during code review tomorrow
