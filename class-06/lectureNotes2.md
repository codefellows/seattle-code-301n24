# Lecture Notes from Monday 01/03/2022
All times listed below are for Pacific Standard Time zone.


## Recovering from the Holidays
Today and Thursday will be our lab days this week. We will resume our normal lab schedule on Saturday. 


## Q&A 6:30-7:00pm
- Add your deployed Netlify app url as an HTTP Referrer to your API token settings. This step is necessary to prevent any unauthorized use of your token. Also add `localhost` while testing from your development environment. 
  - Make sure you add `http://localhost:3000/` as a referrer. The slash at the end is super important or it won't work.
  - If your React app is running on a different port, you will need to add that port as well.
- Add your API key to your Netlify deployment. Under "Site settings" > "Build & deploy" > "Environment", you need to add "Edit variables" to add your API key, giving it the same name you used in your local .env file.
  - Remember, "env" is just short for "enviroment". These are your enviroment variables.
- If you haven't already gotten all your API keys for City Explorer, check out the reading for class-07. 
  - You will need a WeatherBit API key for lab 07!
- <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.locationObject.lat},${this.state.locationObject.lon}&zoom=12`} alt={this.state.locationObject.display_name}/>


## Remo Lab 7:00pm-9:30pm
- Take this time to work on your lab from Class-06 with your partner(s).
- One dev will drive while the other navigates. 
- Switch driver/navigator roles in between Trello card completions. 
- This lab is due no later than Tuesday, January 4th by 6:30pm(PST).
- Don't forget the 15 minute rule!
- Ask for TA help if you get stuck!


## Career Assignment
- Career: Networking Opportunities due this Friday!
- Partner Power Hour - ?

### As always, if you have any questions or concerns, please hit me up on Slack.
