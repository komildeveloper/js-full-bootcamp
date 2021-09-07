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

/* function logger() {
  console.log('My name is Komil');
} */

// calling / running / invoking function
/* logger();
logger();
logger(); */

/* function fruitProcessor(apples, oranges) { */
/* console.log(apples, oranges);
  const juice = `My juice with ${apples} apples and ${oranges} oranges
  Hmmmm, mazzamiiii!`;
  return juice; */

// Easy way
/*   return `My juice with ${apples} apples and ${oranges} oranges
  Hmmmm, mazzamiiii!`;
} */

/* const myJuice = fruitProcessor(4, 2);
console.log(myJuice); */

/* const appleJuice = fruitProcessor(2, 4);
const orangeJuice = fruitProcessor(1, 5);
console.log(appleJuice);
console.log(orangeJuice); */

// This is also function
/* const num = Number('17');
console.log(num); */

// Function Declarations && Function Experssions

// function declaration
/* function birthYear(birthYear) {
  return 2035 - birthYear;
}

const age1 = birthYear(2001);
// console.log(age1);

// function experssion
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calcAge2(2001);
console.log(age1, age2); */

// Arrow function
/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2001);
console.log(age3); */

/* const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} retires`;
};

console.log(yearsUntilRetirement(2001, 'Komil'));
console.log(yearsUntilRetirement(2006, 'Said')); */

// Functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  return `My juice with ${applePieces} apples and ${orangePieces} oranges`;
}
const myJuice = fruitProcessor(2, 3);
console.log(myJuice);
