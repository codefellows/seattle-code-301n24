# Lecture Notes from Monday 01/17/2022: Class 11
All times listed below are for Pacific Standard Time zone.

## Warm Up 6:30-6:45
This code sample is written in C#. Read through the code and determine the output for this function.

```
static void Main(String[] args)
  {
    int[] arr = {10, 7, 3, 1, 9, 7, 4, 3};
    Console.Write("Initial Array : ");
    Console.WriteLine(String.Join(" ", arr));
    Sort(arr);
  }

  static void Sort(int[] arr)
  {
    for (int i = 0; i < arr.Length; i++)
    {
      for (int j = 0; j < arr.Length - i - 1; j++)
      {
        if (arr[j] > arr[j + 1])
        {
          int temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }

      Console.Write("After pass " + i + "  : ");
      Console.WriteLine(String.Join(" ", arr));
    }
  }
```
- Check out this really fun [Youtube video](https://www.youtube.com/watch?v=Iv3vgjM8Pv4&ab_channel=kamalyassin) of Hungarian folk dancers demonstrating how bubble sort works! 

## Code Review 6:45-7:30
- How are we feeling about caching from lab 10?
- Stuck on any nested for loops from code challenge 10?


## Remo Lab 7:30pm-8:15pm
- Take this time to finish up your lab from class-10 and resubmit.
- Apply any lessons learned from Code Review to your lab.
- Grab a TA if you are stuck.
- Try out the Stretch Goals!!
  - YOU GOT THIS! Just try it out!
- If you've already completed your lab:
  - Help another student who hasn't completed their lab yet.
  - Work on another assignment like a reading assignment or Career assignment.


## Shred Talk 8:15-8:30
- Introducing Chaining Methods!
- Method Chaining is a programming strategy that simplifies and embellishes your code. It is a mechanism of calling a method on another method of the same object.
- Pay attention to what data type the previous method is returning before calling the next chained method on it.
- Resource: [Geeks for Geeks](https://www.geeksforgeeks.org/method-chaining-in-javascript/#:~:text=Method%20Chaining%20is%20a%20programming,in%20which%20it%20is%20called.&text=And%20this%20would%20help%20in,method%20of%20the%20same%20object.)


## Remo Lab 8:30pm-9:30pm
- Don't forget to work on a new branch!
  - `git checkout -b chaining`
- Don't forget to pull down the new challenges!
  - `npm run get-challenge 11`
  - You only need to run this command ONCE to grab all of the Code Challenges for this assignment.
- Take this time to start on your Code Challenges 11.
- Ask for TA help if you get stuck!


## Career Assignments
- I still have a few people who need to schedule a 1-on-1 with me.
  - If you are one of those people, DM me tonight so we can get this wrapped up!
- Career: Targeted Job Search due this Friday!
- Partner Power Hour this Saturday!
  - How Log4j Broke the Internet


### As always, if you have any questions or concerns, please hit me up on Slack.
