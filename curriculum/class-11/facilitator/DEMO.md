# Demos: Server-side templating with EJS

There are four demos in the `demos` folder for today. Here is the suggested order:

## Forms

The `forms` demo shows how to format an HTML5 form with `method` and `action` attributes, which students have likely not seen before. Point out the parent-child relationship between the `label` and `input` elements, as they have likely only seen these elements as siblings in Code 201.

- Submit the form with both a `get` and a `post` method and view these in the network tab of the browser
  - Compare and contrast the headers and body
  - Compare and contrast where the data "lands" on the server
- Do not forget to discuss this line of code:

   ```app.use(express.urlencoded({extended:true}));```

- When forms submit data, the browser uses URL encoding to format the users input as a string, since strings are the primary thing sent between client and server.
- Express will then parse the string to turn it into a JS object.
- Setting the `extended` option to `true` alerts express to reconstitute deeply-nested objects from the browser's form data.
- Point out that when there is a dash in the name attribute (such as "first-name"), the key will come back in quotes since we will need to use bracket notation to access that property.

## Templating

The `templating` demo includes a basic grocery list. This demo is intended to introduce students to EJS usage and syntax. The demo includes rendering an array of strings as well as rendering an array of objects. These are displayed in two separate views, so use this as an opportunity to discuss conditional rendering with EJS syntax. Then, refactor `list.ejs` using conditional logic.

## Google Books

The `google-books` demo serves as the starter code for lab 11. Students should feel comfortable working with APIs at this point, but will need a bit of direction for the Google Books API. Write a line or two of the Book model, such as the placeholder and showing how to use ternaries or short circuit evaluation to provide fall-backs if the API does not return any data. Publish all of these demos in the lecture repository for reference.

## Regex

If your RegEx lecture in class 4 was thorough enough, you may not need to expand on regular expressions for today's set of code challenges.
