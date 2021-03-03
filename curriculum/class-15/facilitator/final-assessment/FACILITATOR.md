# 301 Final Exam

## The 301 final exam consists of two parts

### Part 1: The Final Exam App - 50pts

The first part is the Final Exam App and asks students to build an express server that uses superagent to collect information from an API. They need to display that information on an .ejs page in alphabetic order and allow users to click on an individual item to save it to their favorites. When they save it to their favorites, the item gets put in a database and rendered on a different .ejs page.

#### Score breakdown

- test 1: render data from an API to a page: 15pts
- test 2: render it in alphabetic order: 5pts
- test 3: redirect back to the results page: 10pts
- test 4: render saved items on a separate page: 20pts

#### To Test

To test this part of the exam, install the dependencies, and run `npm test` in from the root of the finalExamApp directory. The test uses Puppeteer to run some basic behavioral tests to assert the above.

> **For Windows Users**, getting the tests to work requires a special installation of *Chromium* in WSL. Please have your Windows students follow the instructions in the the assignment.

##### NOTE

It is possible for students to do the work correctly and not pass the tests if they did not follow the directions. The tests are looking for very specific elements and that the server is listening on a very specific port (3002).

### Part 2: The Final Exam Questions - 50pts

The second part of the exam consists of code challenge type questions that are a review of the course content with a focus on jQuery and Mustache. Some of the questions are taken directly from the code challenge review questions while others are more challenging versions of those questions.

Each student will be given 5 of these questions worth 10pt each. The build script will ensure that each student will get a random assortment of these questions all with the same difficulty level. The build scrip obeys the following rules:

- one question from 1-serverReview
- one question from 2-jQueryChallenge
- one question from 3-jQueryReview
- either question 4 and 6 - OR - question 5 and 7

#### How To Test

To test this part of the exam, students must install the dependencies and run the command `npm test` from the root of the finalExamQuestions directory.

### Generating a Student Test

To generate a set of tests for your class, complete the following steps:

1. In your terminal, change to the `curriculum/class-15/facilitator/final-assessment` directory in the 301 guide
1. Run `npm install` to install the dependencies
1. Run `node build.js`

The application will ask you 2 questions:

1. What folder do you want to put your tests in?
   - This requires an absolute path to a folder on your computer
1. The names of your students
   - Enter each student name (as a single word), separated by spaces

Once completed, in your `target` folder, you will find a .zip file for each student, containing their customized test, which you may then distribute to them over **slack**

Students will be submitting a .zip file back to you in canvas for grading
