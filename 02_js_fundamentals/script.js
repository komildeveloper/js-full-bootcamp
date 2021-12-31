'use strict'

/*
let hasDriversLicense = false
const passTest = true

if (passTest) hasDriverLicense = true
if (hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio'
// const private = 534
*/

/*
// FUNCTIONS
function logger() {
  console.log('My name is Jonas')
}

// calling / running / invoking function
// logger()
// logger()
// logger()

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`
  return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice) */

/*
// FUNCTION DECLARATIONS & FUNCTION EXPRESSIONS
// FUNCTION DECLARATION
function calcAge1(birthYear) {
  return 2021 - birthYear
}

const age1 = calcAge1(2001)
console.log(age1)

// FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2021 - birthYear
}

const age2 = calcAge2(2002)
console.log(age1, age2) */

/*
// ARROW FUNCTIONS
// FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2021 - birthYear
}

// ARROW FUNCTIONS
const calcAge3 = birthYear => 2021 - birthYear
const age3 = calcAge3(2001)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear
  const retirement = 65 - age
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(2001, 'Komil'))
console.log(yearsUntilRetirement(2002, 'Iroda')) */

/*
// FUNCTION CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
  return fruit * 4
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
  return juice
}

console.log(fruitProcessor(2, 3)) */

/*
// REVIEWING FUNCTIONS
const calcAge = function (year) {
  return 2021 - year
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear)
  const retirement = 65 - age

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`)
    return retirement
  } else {
    console.log(`${firstName} has aleready retired`)
    return -1
  }
}

console.log(yearsUntilRetirement(2001, 'Komil'))
console.log(yearsUntilRetirement(1951, 'Sobit')) */

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

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas) {
  if(avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if(avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins');
  }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// TEST 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas); */
