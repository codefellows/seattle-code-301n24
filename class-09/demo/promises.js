'use strict';

// function runs() {
//   setTimeout(() => {
//     console.log('done after 1 second');
//   }, 2000);
//   console.log('runs immediately');
// }
// runs();

// define a functino called longRun that defines a parameter called status
function runsLong(status) {

  // define a variable call promise that is the return from the Promise condructor
  //   the promise, takes in a callback function, the callback receives a resolve and a reject.
  let promise = new Promise((resolve, reject) => {
    // this constructor will use the callback to pass arguments into the resolve and reject functions
    if (status) { // if status is truthy run our async code and resolve a value


      // this a function that takes a callback, and a number, and runs that callback after that number of millseconds occurs. 
      setTimeout(() => {
        resolve('done after 1 second');
      }, 2000);


    } else { // if status is not truthy, pass a message into our reject function
      reject('Error: no status set');
    }
  });
  return promise;
}

// runsLong()
//   .then((message) => console.log(message))
//   .catch((err)=> console.error(err));

async function doSomething() {
  let message = await runsLong('all good');
  console.log(message);
  return message;
}

function log(text) {
  let message = 'A message a been logged! : ' + text;
  console.log(message);
  return message;
}

// doSomething()
//   .then(log)
//   .then((newMessage) => console.log(newMessage));



  // Promise.all will let you runs an array of promise concurrent, they will finish on their own instead of the order they are added to the array.

  function runsShort() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Runs short')
        resolve();
      }, 500)
    });
  }

  function runsLonger() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('runs longer')
        resolve();
      }, 2000);
    });
  }

   function runsLongest() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('runs longest');
        resolve();
      }, 4000);
    });
  }

  runsShort()
    .then(() => runsLonger())
    .then(() => runsLongest());

let promises = [];

promises.push(runsLongest());
promises.push(runsLonger());
promises.push(runsShort());

// Promise.all is a function on the Promise constructor, takes in an iterable of "promise".
Promise.all(promises);
