# ✍️ Notes

1. What does CLI stand for?
    - Command Line Interface
    - Command Line Interpreter
    - Command Line Input
    - AKA Linux Terminal

2. What is the command line used for?
    - CLI is used by software developers and system administrators to configure computers, install software, and access features that are not available in the graphical interface.

3. What is the command that creates a new React app?
    - npx create-react-app name-my-app

4. What does create-react-app do?
  - Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. When we use create-react-app tool it creates a hierarchy of files and folder in an out-of-the-box, working application for us.

5. What does npx stand for?
    - Node Package Executer

6. What does npx do?
    - NPX comes built into npm. It is a node package runner and can execute any package/directory/library from the npm registry(the internet) without installing the package globally on your computer.

7. What does npm stand for?
    - Node Package Manager

8. What does npm do?
    - npm is the dependency/package manager you get out of the box when you install Node.js. It is a command line tool that aids you in installing packages both globally and locally; and manages their versions and dependencies.

9. What are the differences between npm and npx?
    - NPM is a tool that is used to install packages and NPX is a tool that is used to execute packages.

10. What is the command that starts the React server?
    - npm start

11. What URL do I navigate to in order to view my React app in the browser?
    - http://localhost:3000 (unless you already have something running on that port)

12. What is the purpose of a package.json?
    - It records important metadata about a project which is required before publishing to NPM. It also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package. It specifies the dependencies being used in the project which helps npm setup the same environment on a different machine for our project.

13. What are node modules?
    - The node_modules folder is used to save all downloaded packages from NPM in your computer for the JavaScript project that you have.

14. What is the .gitignore?
    - This file specifies intentionally untracked files that Git should ignore. Any files listed in the .gitignore will NOT be pushed up to GitHub. This is useful to keep things like your secret keys safe, or to prevent pushing dependencies, like node_modules, to GitHub.

15. What is the purpose of the public directory?
    - This folder contains the HTML file, index.html. This is the page template and must be named exactly this because it is the template file which is served up when we start our script to launch our app. It is considered best practice not to create multiple html files in the public folder.  You would normally only work in this folder when importing css libraries, images and fonts from JavaScript.

16. What is the purpose of the public/index.html?
    - It is the page template. Only files inside the public folder can be used from public/index.html. When the application starts this is the first page that is loaded. This will be the only html file in the entire application since React is generally Written using JSX. This file has a line of code `<div id=”root”></div>`. This line is very significant since all the application components are loaded into this div.

17. What is the purpose of the src directory?
    - In simplest form it’s the mind of our app. It's containing all the components, tests, css files etc. 

18. What is the purpose of the src/index.js?
    - It is the JavaScript entry point and the JavaScript file corresponding to index.html. This is the most top level script that controls all the components under it.

19. What is significant about this line of code?
`ReactDOM.render(<App />, document.getElementById(‘root’));`
    - It is saying that the App Component has to be loaded into an html element with an id of root. This corresponds with the div element, that has the id of root, in the index.html. We call this a “root” DOM node because everything inside it will be managed by React DOM. Applications built with just React usually have a single root DOM node. To render a React element into a root DOM node, pass both to ReactDOM.render().

20. What is `ReactDOM`?
    - ReactDOM is an API that provides DOM specific methods that can be used at the top level of a web app, to manage those DOM elements. ReactDOM provides the render method and a few others. ReactDOM.render() controls the contents of the container node you pass in. 

21. What is a difference between render() and ReactDOM.render()?
    - ReactDOM.render renders your components to the DOM while a component's render returns the elements that make up the component.

22. What is React.StrictMode?
  - Strict mode is a developmental tool and you don't need to worry about it impacting your production build. It is a helper component that will help you write better react components, you can wrap a set of components with <StrictMode /> and it will:
    - Verify that the components inside are following the recommended practices and warn you if not in the console.
    - Verify the deprecated methods are not being used, and if they're used strict mode will warn you in the console.
    - Help you prevent some side effects by identifying potential risks.

23. What can I get rid of when I am ready to start customizing my React application?
  - public/favicon.ico
  - public/logo192.png & logo512.png
  - public/manifest.json
  - public/robots.txt
  - src/App.test.js
  - src/logo.svg
  - src/setupTests.js
  - src/reportWebVitals.js
  - App.css: delete everything from line 5 and down
  - inside of index.js: 
    - this text: 
      ```
      // If you want to start measuring performance in your app, pass a function
      // to log results (for example: reportWebVitals(console.log))
      // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
      reportWebVitals();
      ```
    - this import:
      ```
      import reportWebVitals from './reportWebVitals';
      ```
  - inside of App.js:
    - this import:
      ```
      import logo from './logo.svg';
      ```
    - this code:
      ```
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      ```

24. Where can I find build instructions and other helpful React tips?
    - in the README.md that is generated from CRA

25. How do I close down the React server?
    - type control + C in the Terminal

# Resources
- [w3Schools: CLI](https://www.w3schools.com/whatis/whatis_cli.asp)
- [What Is package.json?](https://heynode.com/tutorial/what-packagejson/)
- [CRA File Structure Explained](https://medium.com/@abesingh1/create-react-app-files-folders-structure-explained-df24770f8562)
- [A quick guide to help you understand and create ReactJS apps](https://www.freecodecamp.org/news/quick-guide-to-understanding-and-creating-reactjs-apps-8457ee8f7123/)