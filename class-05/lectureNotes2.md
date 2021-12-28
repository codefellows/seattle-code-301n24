# Lecture Notes from Monday 12/27/2021
All times listed below are for Pacific Standard Time zone.

## Lecture & Lab Demo 6:30-8:30pm
- Ternary/Conditional Rendering in City Explorer app
  - City Explorer accepts a city name, draws a map, and then lists out some interesting data about the city, pulled from a remote data source (client + server!).
  - Today we will use a `sample.json` for dummy data. Next week, we will use real data coming from an API.
  - Use conditional logic to wait to display to the results until after the user has entered a city
- Routers in your Portfolio app
  - Jumping in to a new code base can be daunting! How do we start to explore what is going on?
  - Routing (deciding what "page" to render) is a common feature of every application and web site. In React, it happens differently from traditional web pages.
  - What is Routing?
    - A link that switches content.
    - When clicked, a link will render a component in a spot on the page.
    - Can change out a single component within a page.
    - Or, it can can switch out a full page of content.
  - But how does it work under the hood?
    - react-router-dom v5.3 docs here: https://v5.reactrouter.com/web/example/basic
    - At the core of every React Router application should be a router component. For web projects, react-router-dom provides `<BrowserRouter>` and `<HashRouter>` routers. The main difference between the two is the way they store the URL and communicate with your web server.
    - A `<BrowserRouter>` uses regular URL paths. These are generally the best-looking URLs, but they require your server to be configured correctly. Specifically, your web server needs to serve the same page at all URLs that are managed client-side by React Router. Create React App supports this out of the box in development, and comes with instructions on how to configure your production server as well.
    - This site has 2 pages, all of which are rendered dynamically in the browser (not server rendered).
    - Although the page does not ever refresh, notice how React Router keeps the URL up to date as you navigate through the site. This preserves the browser history, making sure things like the back button and bookmarks work properly.
    - To use a router, just make sure it is rendered at the root of your element hierarchy. Typically you’ll wrap your top-level `<App>` element in a router.
    - A `<Switch>` looks through all its children `<Route>` elements and renders the first one whose path matches the current URL. Use a `<Switch>` any time you have multiple routes, but you want only one of them to render at a time.
    - If the current URL is `/about`, this route is rendered while the rest are ignored.
    - If none of the previous routes render anything, the "/" route acts as a fallback.
      - A route with path="/" will *always* match the URL because all URLs begin with a /. So that's why we put this one last of all. 
      - Another possible solution is to use `<Route exact path="/">` (like we are doing in the Portfolio) which does match the entire URL.
    - You can think of the `Home` and `About` components as "pages" in your app.


## Remo Lab 8:30pm-9:30pm
- Take this time to start on your lab from Class-05.
- This lab is due no later than Wednesdat, December 29th by 6:30pm(PST).
- Don't forget the 15 minute rule!
- It really helps to work with other students!
- Ask for TA help if you get stuck!


### As always, if you have any questions or concerns, please hit me up on Slack.
