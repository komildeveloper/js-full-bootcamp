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
/* function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  return `My juice with ${applePieces} apples and ${orangePieces} oranges`;
}
const myJuice = fruitProcessor(2, 3);
console.log(myJuice); */

// Reviewing Functions
/* const calcAge = birthYear => {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} retires`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return retirement;
  }
};

console.log(yearsUntilRetirement(2001, 'Komil'));
console.log(yearsUntilRetirement(1951, 'Sobit'));
 */

// INTRO ARRAYS
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(2002, 2001, 1988, 2008);
console.log(y);

console.log(friends[0]); // 'Michael'
console.log(friends.length);
console.log(friends[friends.length - 1]); // 'Peter'

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Komil';
const komil = [firstName, 'Sobitov', 2037 - 2001, 'developer', friends];
console.log(komil);
console.log(komil.length);

// EXERCISE
const calcAge = birthYear => {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2001, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1])
];
console.log(ages);
