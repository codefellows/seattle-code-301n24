# Demos: Componentization and HTML5 Forms

The demo contains an extended version of the to-do app. 

Build this demo out in multiple phases.

## Add the "add" and "getOne" functionality

- First, build out the To Do app, adding the ability to add a new item.
- Then, a new route and view that can view a single item on it's own
- Now, you have 3 views -- List, Add, Detail
  - Discuss the user workflow, and which should be used on which routes
  - This is a great time for discovery

## Modularize the views

- EJS allows for the use of "partials", which are template snippets that can be combined to form a single page.
- There are many approaches to this.
- Our demo uses the approach of each page being a single view (full markup), which "includes" the partials with the common functionality.
   ```
   <head>
     <%- include('../layout/head') %>
   </head>
   ```
- Another approach would be a single "view", that we can send in the name (`pageName`) of the content type (detail, list, add, etc) and have it pull in a partial based on that.  In this way, the HTML site-wide is consistent with the only variable being the page-specific content
   ```
   <main>
    <%- include(pageName) %> 
   </main>
   ```
as well as how to view the details of a single task
