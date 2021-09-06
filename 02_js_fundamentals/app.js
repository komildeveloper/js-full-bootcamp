'use strict';

/* let hasDriversLicense = false;
const passTest = true;
console.log(hasDriversLicense); // false

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can Drive :D');
console.log(hasDriversLicense); // true

// const interface = 'Audio';
// const new = 'Hello';
// const private = 534;
// const if = false;
 */

// FUNCTIONS
// INTRO

function logger() {
  console.log('My name is Komil');
}

// calling / running / invoking function
/* logger();
logger();
logger(); */

function fruitProcessor(apples, oranges) {
  /* console.log(apples, oranges);
  const juice = `My juice with ${apples} apples and ${oranges} oranges
  Hmmmm, mazzamiiii!`;
  return juice; */

  // Easy way
  return `My juice with ${apples} apples and ${oranges} oranges
  Hmmmm, mazzamiiii!`;
}

/* const myJuice = fruitProcessor(4, 2);
console.log(myJuice); */

const appleJuice = fruitProcessor(2, 4);
const orangeJuice = fruitProcessor(1, 5);
console.log(appleJuice);
console.log(orangeJuice);

// This is also function
/* const num = Number('17');
console.log(num); */
