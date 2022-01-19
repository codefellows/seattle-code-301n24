# Lecture Notes from Tuesday 01/18/2022
All times listed below are for Pacific Standard Time zone.

## Lecture & Lab Demo 6:30-8:30pm
- Did anyone have trouble installing Mongo in the pre-work?
  - test this out by typing `mongo` in your terminal and if you don't get a response from Mongo, something went wrong.
  - type control + c to exit the mongo shell.
- CRUD: Create, Read, Update, and Delete are the four basic functions that models should be able to do, at most.
- In a REST environment, CRUD often corresponds to the HTTP methods POST, GET, PUT, and DELETE. These are the fundamental elements of a persistent storage system.
  - Read = GET
  - Create = POST
  - Update = PUT
  - Delete = DELETE
- https://www.mongodb.com/nosql-explained/nosql-vs-sql
- https://mongoosejs.com/docs/guide.html

### Hosted Mongo Databases: Atlas

While you can run Mongo on your own machines, it's quite common to run an instance of Mongo in the cloud so that you can take advantage of better hardware, more memory and higher speed networks. Mongo offers a hosted cloud database service called "Atlas" ... once you've got this setup, it's easy to connect your API servers from anywhere in the world to use it.

1. Sign Up
1. Setup the organization
   - Name your organization and project
   - These can be whatever you want to call them
   - Set Preferred Language (Javascript)
1. Pick the "Free" (Shared Cluster) option
1. Create Cluster
   - Choose AWS
   - Choose the closest region to your location (i.e. Oregon)
1. Create a DB User
   - Click the "Database Access" link
   - Add a new user
     - Choose Password Authentication
     - Choose a username and password
     - For access rights, choose "Atlas Admin"
1. Enable Network Access
   - Click Network Access Button
   - Click "Add IP Address"
   - Choose the "Allow Access from Anywhere" option
   - Click "Confirm"
1. Get your connection string
   - Click "Clusters" button on the left
   - Click on the "Connect" button on the cluster screen
   - To connect to your new database with the command line:
     - Choose the "Connect with Mongo Shell" option
     - Copy out the connection string
     - This will look something like this:
     - `mongo "mongodb+srv://cluster0.xtrut.mongodb.net/<dbname>" --username dba`
     - Replace `<dbname>` with the name of the database you want to use for your application, for example 'people'
   - To connect your Node or Express application:
     - Choose the "Connect your Application" option
     - This will look something like this:
     - `mongodb+srv://dba:<password>@cluster0.xtrut.mongodb.net/<dbname>?retryWrites=true&w=majority`
     - Replace `<password>` with the password you created earlier
     - Replace `<dbname>` with the name of the database you want to use for your application, for example 'people'
     - Use this as  `MONGODB_URI` in your .env file or at Heroku when you deploy

## Remo Lab 8:30pm-9:30pm
- Meet up with your partner(s) to complete today's lab requirements.
- Take this time to start on your lab from Class-11.
- Don't forget the 15 minute rule!
- It really helps to work with other students!
- Ask for TA help if you get stuck!

## Career Assignments
- Career: Targeted Job Search due this Friday!
- Partner Power Hour this Saturday!
  - How Log4j Broke the Internet

### As always, if you have any questions or concerns, please hit me up on Slack.
