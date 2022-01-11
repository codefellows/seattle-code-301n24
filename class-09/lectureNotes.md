# Lecture Notes from Monday 01/10/2022: Class 09
All times listed below are for Pacific Standard Time zone.


## Warm Up 6:30-6:45p
This code sample is written in Python. Read through the code and determine the output for this function.

```
def search(source: list, key: int) -> int:
    start = 0
    end = len(source) - 1

    while abs(start - end) > 1:
        mid = abs(start + end) // 2

        if key == source[mid]:
            return mid

        if key > source[mid]:
            start = mid + 1

        if key < source[mid]:
            end = mid - 1

    return -1
```


## Code Review 6:45pm-7:45pm
- Code Challenges #8? Which ones?
- Full lab 8 build out or student-led code review?
- Feature 3: Publish
  - Deploy your server. As a user, I want to access the City Explorer application on the web, so that anyone can explore from anywhere.s
  - Let's do it together!


## Remo Lab 7:45pm-8:15pm
- Take this time to finish up your lab from class-08 and resubmit.
- Apply any lessons learned from Code Review to your lab.
- Grab a TA if you are stuck.
- Try out the Stretch Goals!!
  - YOU GOT THIS! Just try it out!
- If you've already completed your lab:
  - Review today's Code Challenge [video demo](https://www.youtube.com/watch?v=NGvpqw8PQZU&list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k&index=6&ab_channel=CodeFellowsLectures).
  - Work on another assignment like a reading assignment or Career assignment.


## Shred Talk on Code Challenge 8:15-8:30pm
- OBJECT.KEYS: takes in an object as an argument and returns an array of keys (properties)
  - DOCS:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  - SYNTAX: `Object.keys(obj)`
  - INPUT: The object of which the enumerable's own properties are to be returned.
  - OUTPUT: An array of strings that represent all the enumerable properties of the given object.
- OBJECT.VALUES - Returns an iterable array of just the values from the object
  - DOCS:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
  - SYNTAX: `Object.values(obj)`
  - INPUT: The object whose enumerable own property values are to be returned
  - OUTPUT: An array containing the given object's own enumerable property values.
- OBJECT.ENTRIES - Returns an array of each "Entry" as an an array with a key and value
  - DOCS:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
  - SYNTAX: `Object.entries(obj)`
  - INPUT: The object whose own enumerable `[key, value]` pairs are to be returned.
  - OUTPUT: An array of the given object's own enumerable `[key, value]` pairs

## Remo Lab 8:30pm-9:30pm
- Don't forget to work on a new branch!
  - `git checkout -b objects`
- Don't forget to pull down the new challenges!
  - `npm run get-challenge 08`
  - You only need to run this command ONCE to grab all of the Code Challenges for this assignment.
- Take this time to start on your Code Challenges 08.
- Ask for TA help if you get stuck!


## Career Assignments
- Career: Attend a Networking Event
  - Due this Friday!
- Career: Behavioral Questions & Mock Interviews
  - Due this Saturday!


### As always, if you have any questions or concerns, please hit me up on Slack.
