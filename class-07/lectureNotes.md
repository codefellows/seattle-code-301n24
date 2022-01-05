# Lecture Notes from Tuesday 01/04/2022: Class 07
All times listed below are for Pacific Standard Time zone.


## Recovering from the Holidays
Thursday will be the lab day for class 07. We will resume our normal lab schedule on Saturday. 


## Warm Up 6:30-6:45p
This code sample is written in Java. Read through the code and determine the output for this function.

```
import java.util.*;

public class Count {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();
        for (int i = 0; i < 20; i++) {
            int randomNumber = (int) Math.floor(50 * Math.random());
            numbers.add(randomNumber);
        }
        System.out.println(numbers);

        HashMap<String, Integer> tally = new HashMap<>();
        tally.put("even", 0);
        tally.put("odd", 0);

        for (int i = 0; i < numbers.size(); i++) {
            String key;
            int value = numbers.get(i);
            if (value % 2 == 0) {
                key = "even";
            } else {
                key = "odd";
            }

            int votesSoFar = tally.get(key);
            tally.put(key, votesSoFar + 1);
        }

        System.out.println("Total even: " + tally.get("even"));
        System.out.println("Total odd: " + tally.get("odd"));
    }
}
```


## Code Review 6:45pm-7:15pm
- Student-lead Code Review for lab 06 


## Remo Lab 7:15pm-8:15pm
- Take this time to finish up your lab from class-06 and resubmit if needed.
- Apply any lessons learned from Code Review to your lab.
- Grab a TA if you are stuck.
- If you've already completed your lab:
  - Help another student who hasn't completed their lab yet.
  - Work on another assignment like a reading assignment or Career assignment.
  - Review today's Code Challenge [overview](https://github.com/codefellows/code-301-guide/blob/main/curriculum/class-07/challenges/README.md).


## Shred Talk on Code Challenge 8:15-8:30pm
- Introducing `slice()`, `splice()`, `split()` and `join()`
- STRING.SPLIT(): splits a string into an array of substrings, and returns the new array.
  - DOCS:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    - https://www.w3schools.com/jsref/jsref_split.asp
  - INPUT: 
    - separator(Optional): specifies the character where the string will be split
    - limit(Optional): limits the number of split items included in the returned array
  - OUTPUT:
    - An Array of strings, split at each point where the separator occurs in the given string.
  - KEY POINTS:
    - The separator characters are removed as the string is being "split".
    - The original string is not modified.
- ARRAY.JOIN(): will iterate through an array and create a new string by concatenating the value of each element in the array with the character that you specify.
  - DOCS:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    - https://www.w3schools.com/jsref/jsref_join.asp
  - INPUT: 
    - separator(Optional): specifies the character where the array elements will be joined. If omitted, the elements are separated with a comma
  - OUTPUT:
    - The string conversions of all array elements are joined into one string.
  - KEY POINTS:
    - If an element is undefined, null or an empty array, it is converted to an empty string.
    - Given no separator, join() will insert commas.
    - The original array is not modified
- ARRAY.SLICE(): method returns selected elements in an array, as a new array.
  - DOCS:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/SLICE
    - https://www.w3schools.com/jsref/jsref_SLICE.asp
  - INPUT: 
    - start(Optional): index at which to start slicing.
    - end(Optional): index before which to end the slice.
  - OUTPUT:
    - A new array containing the sliced elements.
  - KEY POINTS:
    - A negative index can be used as either input. Positive indexes start at the front of the array, negatives start at the end of the array.
    - If start is undefined, slice starts from the index 0.
    - If end is omitted, slice extracts through the end of the sequence (arr.length).
    - Slice does not alter the original array.
    - NOTE! There is a slice method for both arrays and strings.
- ARRAY.SPLICE(): changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
  - DOCS:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    - https://www.w3schools.com/jsref/jsref_SPLICE.asp
  - INPUT: 
    - start: index at which to start changing the array.
    - deleteCount(Optional): the number of elements in the array to remove from start.
    - itemsToBeAdded(Optional): The elements to add to the array, beginning from start.
  - OUTPUT:
    - An array containing the deleted elements.
    - If only one element is removed, an array of one element is returned.
    - If no elements are removed, an empty array is returned.
- KEY POINTS:
  - splice() overwrites the original array.
  - returns an array containing the deleted elements.


## Career Assignments
- Career: Networking Opportunities due this Friday!
- Partner Power Hour - ?
  - waiting to hear back from Sian if we will be having a PPH speaker this Saturday or not. 


## Remo Lab 8:30pm-9:30pm
- Don't forget to work on a new branch!
  - `git checkout -b array-methods`
- Don't forget to pull down the new challenges!
  - `npm run get-challenge 07`
  - You only need to run this command ONCE to grab all of the Code Challenges for this assignment.
- Take this time to start on your Code Challenges 07.
- Ask for TA help if you get stuck!


### As always, if you have any questions or concerns, please hit me up on Slack.
