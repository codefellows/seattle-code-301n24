# Lecture Notes from Tuesday 02/01/2022
All times listed below are for Pacific Standard Time zone.

## Lab Lecture & Code Demo 6:30-8:30
- Authorization
  - rights to access
  - permission for something
  - could only allow for certain permissions not all
- Authentication
  - verifying users
  - being sure someone is who they say they are (in computer terms)
    - user name and password
    - two-factor
      - additional layer of security
- "Plug & Play Code"
  - you don't necessarily need to understand every lil thing happening under the hood. 
  - the library did a lot of the heavy lifting for us so that we don't have to understand every line of code.
- Auth0 (auth-zero)
  - uses OAuth (oh-auth) under the hood
    - needs us to write lots of code to make it work in our app
  - is proteching sensitive data off the shoulders of smaller companies/smaller apps
  - leverage the security that other larger companies put into protecting data
  - givces us lots of prewritten code to "plug and play" in our app
  - client uses some tool to bridge the login gap between you and Google/Pinterest/Amazon/Paypal/GitHub/Facebook
  - a "handshake" occurs between google (or someone similar) and the client and a token is created
  - the client uses the token when requesting data from the backend
  - the backend verifies the token
    - FYI tokens can expire after some time
- Docs for Auth0 React SDK for Single Page Apps
  - https://auth0.com/docs/libraries/auth0-react#use-with-a-class-component
- jsonwebtoken docs
  - https://www.npmjs.com/package/jsonwebtoken

## Remo Lab 8:30pm-9:30pm
- Take this time to start on lab.
    - You are working with same partners from lab 11 & 12.
- One dev will drive while the other navigates. 
- Switch driver/navigator roles in between Trello card completions. 
- Don't forget the 15 minute rule!
- Ask for TA help if you get stuck!

### As always, if you have any questions or concerns, please hit me up on Slack.
