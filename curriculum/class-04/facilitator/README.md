# Facilitators Guide: Form Components in React

## Overview


## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation



## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../facilitator/LECTURE-EXAMPLE.md) notes.

### Warm-Up

- **Student Analysis** (5 min)
  - Show or print the [warm-up code](../warm-up/warm-up.md)
- **Debrief** (5-10 min)
  - Refer to the [Warmup Notes](../warm-up/NOTES.md)
  - Optionally demo the running code at Repl.it

### Shred Talk - .sort()

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

### Code Review

### Forms and Modals

## Deployment

Today, we deploy with GitHub Pages. The steps are as follows:

1. `package.json` needs a couple of new 'scripts' to be added
   - `predeploy` does the build
   - `deploy` runs `gh-pages` to deploy the app to GitHub Pages on the `gh-pages` branch
1. `.github/workflows/react.yml`
   - This .yml file tells GitHub Actions how to build and deploy
   - It requires a developer token in the "Secrets" section of the repo (under settings)
1. Once you check-in to master, it'll build your app and deploy it automatically on every merge


## Lab Notes

## What changed from the previous class?


## What might students struggle with today?


## Past bugs, issues or surprises...

## General Comments and Notes

- Tie in the WRRC during code review. By now, students should be fairly familar with this basic WRRC and ready for our discussion of what a server is next week.
