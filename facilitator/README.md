<a id="top"></a>
# Code 301: Intermediate Software Development

Feel free to open issues as a way to report bugs, recommend updates, and propose minor fixes.

When making branches, follow the convention of `name/feature`.

---

- [Course Overview & Objectives](#courseoverview)
- [Daily Lecture Structure](#lectures)
- [Course Materials in this Repository](#materials)
- [Course Operations](#operations)
- [Course GitHub Course Repo](#organization)
- [Course Grading & Prework; Other Academic Information](#grading)

<a id="courseoverview"></a>

## Course Overview

This course guides students through the collaborative process of creating dynamic web applications, focusing on the front end and back end independently, then creating full-stack applications.

The lab assignments for the course are in five main parts:

1. Building several client-side applications, including a personal portfolio.

1. Building a back end to consume several third-party APIs and communicate with a [static front end](https://codefellows.github.io/code-301-guide/curriculum/city-explorer-app/front-end/).

1. A stand-alone mobile-only application during week 3. Students will work with the same partner throughout the week on a full-stack application. This one-week sprint will help prepare students for project week and serve as an additional personal portfolio piece.

1. Fulfillment of lab requirements via pair programming. These assignments are also a foundation for tackling technical challenges, developing code-reading skills, and gaining knowledge of application architecture.

1. Daily coding challenges which focus primarily on regular expressions, string methods, array methods, and working with objects. Students will pseudocode their solution on the whiteboard and add their final solution to a personal repository. This assignment will allow 301 students to gain practice solving coding puzzles and feel comfortable discussing code on a whiteboard.

### Course Learning Objectives

At the end of this course, students will be able to:

1. Collaboratively design and create dynamic MERN web applications from scratch using component-based architecture built with professional-grade JavaScript.
1. Design dynamic front end and back end applications which can function together or independently and are deployed to cloud platforms.
1. Explain the fundamentals of how the world wide web works, over the internet.
1. Utilize dependency management techniques to build with third-party libraries such as ExpressJS, React, and Bootstrap.
1. Persist data in a document store, sourced from third-party APIs, or user-generated content.
1. Follow agile software development practices during week-long sprints, including pair-programming, stand-ups, daily retrospectives, project management with Kanban boards, regular refactoring, and working in a shared code base.
1. Enroll in a Code 401 course or attain an entry-level website development job or internship by completing the course requirements.

### Index of Topics

Links directly to class folders, by topic:

1. [Class 01](../curriculum/class-01)
1. [Class 02](../curriculum/class-02)
1. [Class 03](../curriculum/class-03)
1. [Class 04](../curriculum/class-04)
1. [Class 05](../curriculum/class-05)
1. [Class 06](../curriculum/class-06)
1. [Class 07](../curriculum/class-07)
1. [Class 08](../curriculum/class-08)
1. [Class 09](../curriculum/class-09)
1. [Class 10](../curriculum/class-10)
1. [Class 11](../curriculum/class-11)
1. [Class 12](../curriculum/class-12)
1. [Class 13](../curriculum/class-13)
1. [Class 14](../curriculum/class-14)
1. [Class 15](../curriculum/class-15)
1. [Project Week - Part 1](../curriculum/class-16)
1. [Project Week - Part 2](../curriculum/class-17)
1. [Project Week - Part 3](../curriculum/class-18)
1. [Project Week - Part 4](../curriculum/class-19)
1. [Project Week - Part 5](../curriculum/class-20)

[-top-](#top)

---

<a id="lectures"></a>

## Daily Lecture Structure

Daily lectures typically follow a three-part pattern: code review of the previous class's lab, introduction/demo of new material, and preparation for the daily lab assignment.

### Code Review

Ask for volunteers or select a student or pair of students for code review. You will act as the navigator while walking through the previous class assignment(s). This portion of lecture should facilitate a discussion-based code review that is inviting and engaging, in order to promote class participation. This will allow students to vocalize on-screen code and improve their development vocabulary.

Students will often have detailed technical questions about the previous class’s assignments, so be sure to familiarize yourself with the lab requirements regularly. A typical code review lasts around 30 minutes, but can go much longer. It may be necessary to do upwards of 60-90 minutes of code review if the students are not comprehending the previously assigned lab materials.

### Introduction and Demonstration of New Material

The subsequent portion of lecture should be focused on the introduction of new concepts. Students learn in a variety of different ways, so use a variety of delivery techniques and continue to encourage class participation by frequently checking for understanding and reiterating concepts as needed. A real-life story based on your relevant experiences may benefit the class here as well.

If the students seem eager to take a deeper dive into any given topic, feel free to perform live code demos, documentation reviews, and whiteboard diagrams as needed. Alternatively, these additions can be reserved for the end of the lecture as a part of preparing students for their next assignment.

### Preparation for Lab

Properly preparing students for their daily assignments is a vital part of every day. To get started, open up the daily lab requirements and be sure to read through each task description and paraphrase or discuss any confusing terminology. Ask students to brainstorm potential solutions. This can be done individually, with a nearby classmate, or as a group discussion. Depending on the number of technical requirements, you can also feel free to work through one (or more) of them in class. This process should generally take around 30-45 minutes, but feel free to spend as much time as needed.

Using the concepts and class structure summarized above, you will be ready to prepare students for the next 401 course or for a job in their career. Be patient, inviting, and passionate throughout the length of your course and it will be a big boost to your overall success. Have fun!

[-top-](#top)

---

<a id="materials"></a>

## Course Materials in this Repository

### Lecture Guides

*Note that the Lecture Guides are not intended to be student-facing, but can be adapted as such.*

Within each of the adjacent class directories you'll find a README document containing the following:

- Overview of the day
- Daily learning objectives
- Daily readings
- Lecture topics
- Link to the lab README document

There is also a subdirectory within each daily directory that contains code demos that you may elect to use.

### Lab Code

The feature tasks for each day's lab assignments are in the `labs/` directory of this repository. Some days may include starter code, or instructions to begin by cloning from a template repo.

[-top-](#top)

---

<a id="operations"></a>

## Course Operations

Here's organizational tasks to keep in mind for each day as the class progresses:

- For the student-facing lecture repo, in each daily directory, a README should be generated that has, at a minimum, a daily class agenda, learning objectives, and links to readings and resources. That document can be an adapted version of the READMEs in the adjacent daily `lecture/` directories of this repository.
- The day's paired lab and individual code challenge should be prepped and poised for publication into the daily lab repository at the appropriate time in lecture. The code challenge should be released towards the end of lecture to prevent students from working on the lab assignment during lecture. The pair-programmed lab should be released at the start of lab time.
- It is strongly encouraged that the instructor open and test both the lab assignment and the lab solution each day; that is a solid reminder of the focus of the day, and preps you for seeing what the students will be seeing later.
- Don't forget to check for code demos in each adjacent daily directory!
- Be mindful of any items to be published in Canvas, and verify that the due dates on those items are correct prior to publication.

[-top-](#top)

---

<a id="organization"></a>

## Course GitHub Course Repo & Setup

### Setting Up a New Class Repository

You should have a class repo (often referred to as the "course lecture repo") that lives in the company org account on GitHub. The name of the repository and subsequent informational fields should follow the patterns of the following example:

- **Name**: <https://github.com/codefellows/seattle-301d56> (org-name, slash, course-code)
- **About**: "Class lecture repo for seattle-301d56. Lead Instructor: Michelle Ferreirae"
- The README at the root level of your lecture repo should contain a high-level course description.
- The .eslintrc.json and .gitignore files at the root level of this repo should be copied to the root level of your course repo.
- Either at the time of creating the lecture repo, or day by day throughout the course, a directory should be created for each day as seen in the example above.

[-top-](#top)

---

<a id="grading"></a>

## Course Grading & Prework; Other Academic Information

### Assignment Group Weights

- The standard [course weightings](https://docs.google.com/spreadsheets/d/1pNHJiT1q4AZclJlqifzWQzBL6kDdACBANJsTLXUDcKU).

### Prework

- Here is the prework link: <https://codefellows.github.io/code-301-guide/curriculum/prework/>

- Prework assignments are graded like all others. This link should be shared with students by Admissions at the time of enrollment. It is wise to issue reminders to students to complete the prework in the days leading up to the start of the course.

### Attendance

- Generally, students are expected to maintain a 90% attendance rate.
- Please refer to [Instructor Handbook](https://docs.google.com/document/d/1PCUlbOdhbCe6FnXk3UDRpJfPSZqT0t7YiHhoUnCHCpY/edit#heading=h.2n5hqakdb88z) for more information.

### Quizzes

- Course quizzes are administered through Canvas. There is a total of three quizzes throughout the course, one per module. It is recommended that you review the quizzes so that you know exactly what the students will be seeing.

### One On Ones

- Depending on class size, you may need perform a weekly, or at the least, a midway one-on-one pulse check on all students. This is also an ***extremely*** useful means of addressing the concerns of students that are revealed on the weekly surveys.

- A good way to start these conversations is to first ask "How’s it going?"

- If they reply with only a "good" or “okay” you can follow-up with “Anything in particular you want to talk about?” and keep things light before diving into any details below.

- The site youcanbookme.com is a handy way of scheduling one-on-one meetings. Aim for 15-minute time slots.

### Reading Assignments

- Reading may be one of the primary language-learning processes that students will utilize to develop their skills. Each day, one or more reading assignment is due before the start of lecture. Students are expected to read actively to promote curiosity and class discussion. Their submission is completed by them and graded within your Canvas course. The reading submissions in Canvas are by default set up to be graded with either a ‘complete’ or ‘incomplete’ mark, and as a result, the late submission policy is not in effect for reading assignments.

### Late Submission Policy

- [See Code Assignment Grading and Expectations](https://docs.google.com/document/d/1hRA4mOM_EFNoRk20TFrC_uLx7m0hNtVuC_AK3PIUDc4/edit#heading=h.wrnsxxmin87m)

[-top-](#top)

---
