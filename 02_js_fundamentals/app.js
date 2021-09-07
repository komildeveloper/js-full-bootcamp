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

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/
