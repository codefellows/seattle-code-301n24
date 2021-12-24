# Lecture Notes from Monday 12/23/2021: Class 05
All times listed below are for Pacific Standard Time zone.

## Holiday Break!
- Saturday 12/25/2021: NO CLASS!! 
- Monday 12/27/2021: Continueing class 05 with a lab demo/lecture.
- Tuesday 12/28/2021: Class 05 lab day in Remo
  - That means that lab-05 is due Wednesday 12/29/2021.
- Wedneday 12/29/2021: Starting class 06 with Code Challenges
- Thursday 12/30/2021: Continueing class 06 with our lab demo/lecture.
- Saturday 01/01/2021: NO CLASS!! 
- Monday 01/03/2022: Class 06 lab day in Remo
  - That means that lab-06 is due Tuesday 01/04/2022.

## Warm Up 6:30-6:45p
This code sample is written in C#. Read through the code and determine the output for the function.

```
public static string Value(string value, int position)
{
    string[] myArray = new string[5];

    if (position >= myArray.Length)
    {
        return "Not a valid index";
    }

    for (int i = 0; i < myArray.Length; i++)
    {
        if (i == position)
        {
            myArray[position] = value;
        }
    }
    return $"Your value of {value} was accepted";
}

Value("sample string", 5);
Value("another string", 2);
```

## Code Review 6:45pm-7:15pm
- Demonstrating the solution code for lab-04. 
-  Filter by Numbers of Horns
  - Using the Form component of react-bootstrap, build a drop down menu so that the user can choose to filter by number of horns.
  - When the user chooses one of the options, the correct images should be displayed.

## Remo Lab 7:15pm-8:15pm
- Take this time to finish up your lab from class-04 and resubmit.
- Apply any lessons learned from Code Review to your lab.
- Grab a TA if you are stuck.
- Try out the Stretch Goals!!
  - YOU GOT THIS! Just try it out!
- If you've already completed your lab:
  - Help another student who hasn't completed their lab yet.
  - Work on another assignment like a reading assignment or Career assignment.
  - Review today's Code Challenge [video demo](https://www.youtube.com/watch?v=_uICFozlNYE&list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k&index=9).

## Shred Talk on Code Challenge 8:15-8:30pm
- Introducing `array.reduce()`.
  - The reduce method executes a reducer function for array element.
  - The reduce method returns a single value: the function's accumulated result.
  - The reduce method does not change the original array.
- Reduce takes in a reducer function that is expecting an `accumulator` and the `currentValue`.
  - The `accumulator` variable is used to collect/add/accumulate the result of the previous iteration's function call.
  - The `currentValue` is the current iteration's value that reduce is running it's reducer function on.
- In addition to the reducer function, `array.reduce()` also takes in a second parameter, the `initalValue`.
  - The `initialValue` is the value of the accumulator in the first iteration.
  - Think of it as the place that the `accumulator` uses to store all the values as it accumulates them.
  - This is an optional parameter.
    - If `initialValue` is not specified, `accumulator` is initialized to the first value in the array, and `currentValue` is initialized to the second value in the array.


## Remo Lab 8:30pm-9:30pm
- Don't forget to work on a new branch!
  - `git checkout -b reduce`
- Don't forget to pull down the new challenges!
  - `npm run get-challenge 05`
  - You only need to run this command ONCE to grab all of the Code Challenges for this assignment.
- Take this time to start on your Code Challenges 05.
- Ask for TA help if you get stuck!

### As always, if you have any questions or concerns, please hit me up on Slack.
