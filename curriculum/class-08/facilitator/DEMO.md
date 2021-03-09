# Custom servers, node.js, and third party APIs

## Demo: 

1. Begin by explaining that we are going to get information about who our representatives are. Do a quick google search to find a public API that will give us that information. 

1. Walk through the process with the students of getting an API key. Use that key and Postman to test the routes to see what kind of information we can get. 
- This is a great time to talk about what a `query` is and where is lives in a url

1. Now that we know what kind of information we can get and what we need to supply to get that information, it is time to build our front end. 

1. Build out the front end with the student but stop when it is time to get the information. 

**What are the problems of getting the information right now?**

- The students should realize that if our front end tries to get the information from the thrid party API, there is no way to hide our API key. 

**Time to build a custom server**

1. Whiteboard out the WRRC

1. Build the server and bring in `superagent` to make your request.
- Make sure you console.log the results from `superagent` to show students that the information that we are looking for lives in the body. 
- Send that information back to the front end. 