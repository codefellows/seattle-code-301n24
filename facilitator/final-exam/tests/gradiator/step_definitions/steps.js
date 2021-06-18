'use strict';

// const assert = require('assert');
const { I } = inject();

let nameText = null;
let descriptionText = null;

Given('the Client is on the home page', () => {
  I.amOnPage('/');
});

Given('the User passes {string} and {string} into inputs', (name, description) => { 
  nameText = name;
  descriptionText = description;
  I.fillField(`input[name=name]`, nameText);
  I.fillField(`input[name=description`, descriptionText);
});

Given('the User clicks the {string} button', (buttonText) => {
  I.waitForText(buttonText);
  I.forceClick(buttonText);
});

Given('the User refreshes the page', () => {
  I.refreshPage();
});

When('The User clicks on the added content', async () => {
  I.waitForText(nameText);
  I.click(nameText);
});

Then('the User should see the {string} list', (model) => {
  I.see(model);
});

Then('The User should see content added to the list', () => {
  I.waitForText(nameText);
});

Then('the previously added content is still in the list', () => {
  I.see(nameText);
})

Then('the content is no longer displayed', () => {
  I.dontSee(nameText);
})

Then('The User should see details of only that one Item', () => {
  I.waitForText(descriptionText);
});




