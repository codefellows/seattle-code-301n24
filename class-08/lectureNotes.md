# Lecture Notes from Saturday 01/08/2022: Class 08
All times listed below are for Pacific Standard Time zone.

## Feedback Review 9:00-9:15am
- Week 2:
  - "Lack of a textbook, or at least book recommendation to refer to for most concepts"
  - "I think the reading assignments aren't needed/helpful"
  - "I think i'd like some more difficult code challenge stretch goals at the very end"
  - "My only suggestion is, if possible, to upload lecture videos as soon as they are done compiling"
  - "I basically needed my hand held to finish Lab"
  - "it takes me longer to learn new concepts; feels like I'm a week behind or something."
- Week 3:
  - "it would be nice to do the (Code Challenge) review in class."
  - "A well-written primer with definitions and pseudocode to refer back to would be super helpful."
  - "I am having an extremely hard time with the code challenges partly because I don't fully understand what each problem is asking me to do."
- Week 4:
  - 4 students did not fill out the feedback this week :(
  - "I would like to actually go through the code challenges in class."
  - "Textbook and/or tip sheets on how to do some things, like generic steps for setting up a server."
  - "Going back and forth to find class videos for replay (between Canvas and Slack). Better to have all videos and password pairs in Canvas."
  - "This week's reading (the code fellows write up .slice, etc.) was full of examples that were wrong, so it added a lot of confusion."
- Watch this quick [Instagram Post](https://www.instagram.com/reel/CM5BwOWnLgo/?igshid=1btcpag8opsmp)
- SUGGESTED READING!
  - [Medium Article: Escaping the Coding Desert of Despair](https://medium.com/startup-grind/adamhurwitz-escaping-the-desert-dd381b92080f)


## Code Review 9:15-10:00am
- Complete Build-out of Lab 07


## Lab 08 Demo 10:00am-11:30am
- By using APIs in creative ways, you can make really interesting apps, but leave the data management to the experts.
- REST give us a common language and set of methods to access all of it, with WRRC.
  - API's follow a very similar set of rules -- REST.
    - With HTTP, you can GET, POST, PUT, PATCH, DELETE
    - With Data, you can Create, Read, Update, or Delete
    - With REST
      - You Create using POST
      - You Update using PUT or PATCH
      - You Delete using DELETE
      - You Read using GET
  - REST stands for REpresentational State Transfer.
  - It means when a RESTful API is called, the server will transfer to the client a representation of the state of the requested resource.
  - The representation of the state can be in a JSON format, and probably for most APIs this is indeed the case.
  - In order for your APIs to be RESTful, you have to follow a set of constraints when you write them. 
  - The REST set of constraints will make your APIs easier to use and also easier to discover.
  - Resource: https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f
- Thunder Client
  - Docs: https://github.com/rangav/thunder-client-support#usage
  - Similar to Postman or Insomnia
  - We will use Thunder Client more as we move into using other HTTP methods.
  - Click "New Request" to get started
    - Paste the base URL into GET request bar.
    - Fill in your Query Parameters with your key and params.
    - Hit "Send" and view the response object in the Response Tab.
    - Inspect the "shape" of the data and see if it conforms to your needs.
- What changed from the previous class?
  - We will be refactoring our data fetchers from simply require() on a static `.json` file into pulling data from a live API with axios, and having to wade through a promise to do so.
    - Don't forget about `async` and `await`!
    - Read more about Promises here:
      - https://www.w3schools.com/js/js_promise.asp
      - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  - We will truly be feeding the city explorer front end live data.
  - This is an ongoing requirement for the week.
  - Not a lot of code movement (really a single change to the fetching functions).
- Extra practice with the Movies API!
  - We are doing the exact same thing with Movies that we accomplished with Weather.
  - You can even model your Movies code from your Weather code.
- Deploy to Heroku
  - Just like Netlify, you will deploy your server code via GitHub.
  - Don't forget to add your enviroment variables to Heroku!
    - You do NOT need to add your PORT variable because Heroku will insert their own server port in order to host your application.
    - Your PORT variable MUST be named `PORT` in your server.js code because that is what Heroku looks for when serving your application. 
  - Follow the Trello cards VERY CAREFULLY for a successful deploy!


## Shred Talk 11:30-11:45
- Introducing Regular Expressions 101
- Regular expressions AKA "Regex", are a means of identifying patterns in strings. We commonly use them to validate input, replace character patterns with other characters or refer to character patterns in a string.
- Every programming language used Regex.
- DOCS:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
  - https://www.w3schools.com/jsref/jsref_obj_regexp.asp
- Check out Regex101 to test out your Regex pattern!
  - https://regex101.com/
  - NOTE: If you are using regex101 to test your patterns, you MUST change the Flavor to ECMAScript(JavaScript) FIRST!!
- SYNTAX: /pattern/modifier(s);
- VOCABULARY EXPLAINED:
  - The pattern to search for:   bananas	 
  - A regular expression:   /bananas/	 
  - A globally matched regular expressions:  /bananas/g
- MODIFIERS: used to perform case-insensitive and global searches
  - g	Perform a global match (find all matches rather than stopping after the first match)
  - i	Perform case-insensitive matching
  - m	Perform multiline matching
- BRACKETS: used to find a range of characters
  - [abc]	Find any character between the brackets
  - [^abc]	Find any character NOT between the brackets
  - [0-9]	Find any character between the brackets (any digit)
  - [^0-9]	Find any character NOT between the brackets (any non-digit)
  - (x|y)	Find any of the alternatives specified
- METACHARACTERS: are characters with a special meaning
  - .	Find a single character, except newline or line terminator
  - \w	Find a word character
  - \W	Find a non-word character
  - \d	Find a digit
  - \D	Find a non-digit character
  - \s	Find a whitespace character
  - \S	Find a non-whitespace character
- QUANTIFIERS: Indicate numbers of characters or expressions to match.
- REGEXP OBJECT METHODS: patterns are used with the exec() and test() methods of RegExp
- STRING OBJECT METHODS: match(), matchAll(), replace(), replaceAll(), search(), and split() methods


## Partner Power Hour 12:15pm
- Your First Tech Job - Tips For Success
- w/ Code Fellows Alumni, Raven Robertson
- Raven graduated from Code Fellows on the Python track and ended up working in cybersecurity at Oracle. 


## Remo Lab 1:00pm-6:00pm
- Don't forget to take a lunch break!
  - or a nap break!
- Coordinate with you partner(s) on when is the best time to meet in Remo to work on the lab.
- Utilize your partner(s) for the Code Challenges too!
- Don't forget to take frequent breaks!
  - Drink some water!
  - Get some fresh air!
  - Feel the sunshine (or rain) on your face!


## Career Assignments
- Have you set up your 1-on-1 with me yet? 


### As always, if you have any questions or concerns, please hit me up on Slack.
