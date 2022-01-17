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

/*
// ARRAYS
// INTRO ARRAYS
const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

const y = new Array(1991, 1984, 2008, 2021)
console.log(y)

console.log(friends[0]) // Michael
console.log(friends[2]) // Peter
console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay' // Mutate array
console.log(friends)

const firstName = 'Komil'
const komil = [firstName, 'Sobitov', 2022 - 2001, 'programmer', friends]
console.log(komil)
console.log(komil.length)

// Exercise
const calcAge = birthYear => {
  return 2022 - birthYear
}

const years = [1991, 2001, 2002, 1951, 1982, 1979]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3)

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1])
]
console.log(ages) */

/*
// ARRAY METHODS
// Add elements
// push() - method adds one or more elements to the end of an array and returns the new length of the array.
const friends = ['Michael', 'Steven', 'Peter']
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)

// unshift() - method adds one or more elements to the beginning of an array and returns the new length of the array.
friends.unshift('John')
console.log(friends)

// Remove elements
// pop() -  method removes the last element from an array and returns that element. This method changes the length of the array.
friends.pop()
const popped = friends.pop()
console.log(popped)
console.log(friends)

// shift() - method adds one or more elements to the beginning of an array and returns the new length of the array.
friends.shift()
console.log(friends)

// indexOf() - method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob'))

friends.push(23)
// includes() - method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))
console.log(friends.includes('23'))

if (friends.includes('Steven')) {
  console.log('You have a friend callad Steven')
} */

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/

/*
const calcTip = bill => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals); */

/*
// INTRODUCTION TO OBJECTS
const komilArray = [
  'Komil',
  'Sobitov',
  2022 - 2001,
  'programmer',
  ['Behzod', 'Bekzod', 'Usmon', 'Abdulaziz', 'Sardor', 'Murod']
]

const komil = {
  firstName: 'Komil',
  lastName: 'Sobitov',
  age: 2022 - 2001,
  job: 'programmer',
  friends: ['Behzod', 'Bekzod', 'Usmon', 'Abdulaziz', 'Sardor', 'Murod']
}

console.log(komil); */

// DOT VS. BRACKET NOTATION
/*
const komil = {
  firstName: 'Komil',
  lastName: 'Sobitov',
  age: 2022 - 2001,
  job: 'programmer',
  friends: ['Behzod', 'Bekzod', 'Usmon', 'Abdulaziz', 'Sardor', 'Murod']
}
console.log(komil)

console.log(komil.lastName)
console.log(komil['lastName'])

const nameKey = 'Name'
console.log(komil['first' + nameKey])
console.log(komil['last' + nameKey])

// console.log(jonas.'last' + nameKey)
const interestedIn = prompt(
  'What do you want to know about Komil, Choose between firstName, lastName, age, job and friends'
)

if (komil[interestedIn]) {
  console.log(komil[interestedIn])
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job and friends'
  )
}

komil.location = 'Uzbekistan'
komil['twitter'] = '@komil_developer'
console.log(komil)

// Challenge
// "Komil has 6 friend, and his best friend is called Behzod
console.log(
  `${komil.firstName} has ${komil.friends.length} friend, and his best friend is called ${komil.friends[0]}`
) */

/*
// OBJECT METHODS
const komil = {
  firstName: 'Komil',
  lastName: 'Sobitov',
  birthYear: 2001,
  job: 'programmer',
  friends: ['Behzod', 'Bekzod', 'Usmon', 'Abdulaziz', 'Sardor', 'Murod'],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
  //  return 2022 - birthYear;
  // }

  // calcAge: function() {
  // console.log(this)
  // return 2022 - this.birthYear
  // }

  calcAge: function () {
    this.age = 2022 - this.birthYear
    return this.age
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
  }
}

console.log(komil.calcAge())

console.log(komil.age)
console.log(komil.age)
console.log(komil.age)


// CHALLENGE
// "Komil is a 21-year old programmer, and he has a driver's license"
// console.log(
//  `${komil.firstName} is a ${komil.calcAge()} old ${komil.job}, and he has ${
//     komil.hasDriversLicense ? 'a' : 'no'
//   } driver's license`
// )

console.log(komil.getSummary()) */

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  }
}

mark.calcBMI()
john.calcBMI()

console.log(mark.bmi, john.bmi)

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi}) BMI`
  )
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}) BMI`
  )
} */

/*
// LOOPS
// ITERATION: THE for LOOP
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`)
} */

// LOOPING ARRAYS, BREAKING AND CONTINUING
const komil = [
  'Komil',
  'Sobitov',
  2022 - 2001,
  'programmer',
  ['Behzod', 'Bekzod', 'Usmon', 'Abdulaziz', 'Sardor', 'Murod']
]

const types = [];

for(let i = 0; i < komil.length; i++) {
  // Reading from komil array
  // console.log(komil[i], typeof komil[i]);

  // Filling types array
  // types[i] = komil[i];
  types.push(typeof komil[i])
}

console.log(types);

const years = [1991, 2007, 1969, 2020]
const ages = []

for(let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for(let i = 0; i < komil.length; i++) {
  if(typeof komil[i] !== 'string') continue;
  console.log(komil[i], typeof komil[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i < komil.length; i++) {
  if(typeof komil[i] === 'number') break;
  console.log(komil[i], typeof komil[i]);
}
