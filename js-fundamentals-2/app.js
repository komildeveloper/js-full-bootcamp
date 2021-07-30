'use strict';

/** let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = false;
// const new = 'hello'; */

// FUNCTIONS
/** function logger() {
  console.log('My name is Komil');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(3, 4));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('17');
console.log(num); */

// FUNCTION DECLARATIONS vs. EXPERSSIONS

// Function declarations
/** function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(2001);

// Function experssions
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(2002);
console.log(age1, age2); */

// ARROW FUNCTIONS

// Function experssions
/** const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}; */

// Arrow function
/** const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(2001, 'Komil'));
console.log(yearsUntilRetirement(2002, 'Iroda')); */

// FUNCTIONS CALLING OTHER FUNCTIONS

/** const cutFruitPieces = fruit => {
  return fruit * 4;
};

const fruitProcessor = (apples, oranges) => {
  const applePiece = cutFruitPieces(apples);
  const orangePiece = cutFruitPieces(oranges);
  return `Juice with ${applePiece} piece of apples and ${orangePiece} pieces of oranges`;
};

const myJuice = fruitProcessor(20, 15);
console.log(myJuice); */

// REVIEWING FUNCTIONS
/** const calcAge = birthYear => {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2001, 'Komil'));
console.log(yearsUntilRetirement(1960, 'Iroda')); */
