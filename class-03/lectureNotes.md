# Lecture Notes from Monday 12/16/2021
All times listed below are for Pacific Standard Time zone.

## Warm Up 6:30-6:45pm
- This code sample is written in Python. Read through the code and determine the output for each function.
- Take 5 minutes in your breakout rooms and discuss what you think the output will be.

```
DOCTORS = [
    {'number': 1, 'actor': 'William Hartnell', 'begin': 1963, 'end': 1966},
    {'number': 2, 'actor': 'Patrick Troughton', 'begin': 1966, 'end': 1969},
    {'number': 3, 'actor': 'Jon Pertwee', 'begin': 1970, 'end': 1974},
    {'number': 4, 'actor': 'Tom Baker', 'begin': 1974, 'end': 1981},
    {'number': 5, 'actor': 'Peter Davison', 'begin': 1982, 'end': 1984},
    {'number': 6, 'actor': 'Colin Baker', 'begin': 1984, 'end': 1986},
    {'number': 7, 'actor': 'Sylvester McCoy', 'begin': 1987, 'end': 1989},
    {'number': 8, 'actor': 'Paul McGann', 'begin': 1996, 'end': 1996},
    {'number': 9, 'actor': 'Christopher Eccleston', 'begin': 2005, 'end': 2005},
    {'number': 10, 'actor': 'David Tennant', 'begin': 2005, 'end': 2010},
    {'number': 11, 'actor': 'Matt Smith', 'begin': 2010, 'end': 2013},
    {'number': 12, 'actor': 'Peter Capaldi', 'begin': 2013, 'end': 2013},
    {'number': 13, 'actor': 'Jodie Whittaker', 'begin': 2017, 'end': 2018},
]

def get_names():
    for doc in DOCTORS:
        print(doc['actor'])
        
get_names()


def get_number(doctors):
    return len(doctors)
    
get_number(DOCTORS)
```

## Code Review 6:45pm-7:15pm
- Demonstrating the solution code for lab-02. 
- Display images  
  - The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.
- Vote for your favorite beast
  - Create state inside of the HornedBeast component that keeps track of the number of times an image was clicked.
  - Put a heart in each horned beast with the number of times it was “favorited” next to it.
- Bootstrap
  - Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.
- Deploy to Netlify

## Remo Lab 7:15pm-8:15pm
- Take this time to finish up your lab from class-02.
- Apply any lessons learned from Code Review to your lab.
- Grab a TA if you are stuck.
- Resubmit your lab if needed.
- Try out the Stretch Goals!!
  - YOU GOT THIS! Just try it out!
- If you've already completed your lab, work on another assignment like a reading assignment or Career assignment.

## Shred Talk on Code Challenge 8:15-8:30pm
- Introducing `array.filter()`.
- Similar to `array.forEach()` and `array.map()`, the `array.filter` method iterates over an array and runs a callback for each element.
- The callback receives the currentValue and the index of the array element as a parameter.
- .filter() will always return you a new array, comprised of elements from the original array that match your criteria 
  - Think about it this way: which elements in the array match the filter condition?

## Remo Lab 8:30pm-9:30pm
- Don't forget to work on a new branch!
  - `git checkout -b filter`
- Don't forget to pull down the new challenges!
  - `npm run get-challenge 03`
  - You only need to run this command ONCE to grab all of the Code Challenges for this assignment.
- Take this time to start on your Code Challenges 03.
- Ask for TA help if you get stuck!

### As always, if you have any questions or concerns, please hit me up on Slack.
