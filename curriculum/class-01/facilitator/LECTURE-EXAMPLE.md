### Welcome and Kickoff (60 min)

- **Official Kickoff Presentation** (30 min)
- **Full Student Introductions** (30 min)

### All about 301 (30 min)

- The new schedule
  - **WHY?**
    - Mimics the life of a dev with an offshore team
    - Forces you to re-acclimate with the material the next day
    - Time Management
    - Organization
- In-Class schedule and assignments
  - Career Coaching
  - Readings
    - Done in a reading notes repo
  - Warmups
    - Every language!
  - Code Challenges (and shred talks)
    - Node and Test Driven Development
    - Practice!
  - Lab Assignments
    - New workflows (Trello) on the way
- Grading standards
  - Minimum requirements
  - Take care of your TAs by following instructions

### Shred Talk (15 min)

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md) to teach the material
  - Since this is the first day of the course, students also need a complete demonstration of the Code Challenge Workflow. 
  - It might be helpful to do the first challenge with the students. Walk them though how to solve the problem and run the test. 
  - This will be the first time most of them will have seen tests in action, so take the time to point out what the test is doing. Show them how to read the test and run the tests in their terminal. Don't spend too much time on what `npm` is at this point, but mention that we will circle back to it next week.
  - Refer to the [Demo Guide](DEMO.md) for guidance
  
### Classes (20 min)

- **Why** (5 min)
  - Classes are the building blocks for React
  - They are part of ES6 and allow for Object Oriented Programming
- **What** (10 min)
  - A blueprint for creating objects
  - A system where we can define objects in relation to each other using subclasses using the keyword `extends`.
- **How** (10 min)
  - [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
  - Prepair a short demo on classes or use the one provided. Be sure to discuss class structure, subclasses and inheritance.

### Arrow Functions (20 min)

- **Why** (5 min)
  - There are multiple ways to write functions
  - Allows us to write concise one line functions
  - Contextual `this` behaves differently
- **What** (10 min)
  - A different way to write a function
  - Contextual `this` will bubble up to the next non-arrow function
- **How** (10 min)
  - Review the arrow-functions lab with the students

### React and Component Based UI (40 min)

- **Why** (5 min)
  - React is a growing trend in the industry for front end development.
  - Allows us to break things down into individual components that can easily be resued and tested.
  - Can update state without reloading the entire page.
- **What** (10 min)
  - React (and Angular and Vue) are "Component Based Libraries"
  - They take care of binding data (state) to The DOM
    - React uses a Virtual DOM to do so, re-rendering things when data changes
  - As a developer, we get many advantages
    - Separation of Concerns
    - Reusable parts
  - Components
    - Header = `<Header />`, etc
      - Just like calling `Header()` from in a JS function, but easier
  - Modularity
    - How do we bring in dependencies?
    - `import x from 'y'` - equivalent of `require('thing')` on the node side
      - other components (which you can then render)
      - css
    - Where do we put them?
      - Wherever you want them
      - (It's Annoyance Driven Development)
- **How** (30 min)
  - Begin with a discussion of the WRRC and it how it relates to React
    - The web is just a series of requests and responses. 
    - In order to go from React code that we see on our computer to a site that we see in the browser, there is a series of requests and responses happening.
      - who is the client? who is the server?
      - The client makes a request
      - The files are served
  - Demonstrate how to use `create react app` to make a React template
    - Be sure to spend some time going through each thing that `create react app` gives you and discuss the components you want to keep and the ones that we are not going to use
  - Talk about what it means when we say a class `extends React.Component`
  - Pull up an application and get student ideas on ways we can break it down into components
    - Here is a `Header` - a `Footer` - a `Main`
    - Encourage students break it down even further so that each button could be a component.
  - Build the [demo](../demo) 
- **Experimentation and Discovery Ideas**
  - Discussions can arise about Modularity, Connections between components
