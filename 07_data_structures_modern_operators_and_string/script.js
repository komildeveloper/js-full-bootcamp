'use strict'

// Enhanced Object Literals
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const openingHours = {
	[weekdays[3]]: {
		open: 13,
		close: 23
	},
	[weekdays[4]]: {
		open: 12,
		close: 24
	},
	[weekdays[5]]: {
		open: 0,
		close: 25
	}
}

const restuarant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizerraa', 'Vegetarian', 'Organic'],
	starterMenu: ['Focacciaa', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	// ES6 enhanced object literals
	openingHours,

	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
	},

	orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		)
	},

	orderPasta(ing1, ing2, ing3) {
		console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`)
	},

	orderPizza(mainIngredient, ...otherIngredients) {
		console.log(mainIngredient)
		console.log(otherIngredients)
	}
}

/*
// Maps: Iteration
const question = new Map([
	['question', 'What is the best programming language in the world'],
	[1, 'C'],
	[2, 'Java'],
	[3, 'JavaScript'],
	['correct', 3],
	[true, 'Correct'],
	[false, 'Try again!']
])
console.log(question)

// Convert object to map
console.log(Object.entries(openingHours))
const hoursMap = new Map(Object.entries(openingHours))

console.log(hoursMap)

// Quiz app
console.log(question.get('question'))
for (const [key, value] of question) {
	if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}

// const answer = Number(prompt('Your answer'))
const answer = 3;
console.log(answer)

console.log(question.get(question.get('correct') === answer))

// Convert map to array
console.log([...question])
// console.log(question.entries())
console.log(question.keys())
console.log(question.values())
*/

/*
// Maps: Fundamentals
const rest = new Map()
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze Italy')
console.log(rest.set(2, 'Lisbon Portugal'))

rest
	.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
	.set('open', 11)
	.set('close', 23)
	.set(true, 'We are open :D')
	.set(false, 'We are close :(')

console.log(rest.get('name'))
console.log(rest.get(true))
console.log(rest.get(1))

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

console.log(rest.has('categories'))
rest.delete(2)
// rest.clear()

const arr = [1, 2]
rest.set(arr, 'Test')
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest)
console.log(rest.size)

console.log(rest.get(arr))
*/

/*
// Sets
const ordersSet = new Set([
	'Pasta',
	'Pizza',
	'Pizza',
	'Risotto',
	'Pasta',
	'Pizza'
])
console.log(ordersSet)

// console.log(new Set('Komil'))

console.log(ordersSet.size)
console.log(ordersSet.has('Pizza'))
console.log(ordersSet.has('Bread'))
ordersSet.add('Garlic Bread')
ordersSet.add('Garlic Bread')
ordersSet.delete('Risotto')
// ordersSet.clear()
console.log(ordersSet)

for (const order of ordersSet) console.log(order)

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
const stuffUnique = [...new Set(staff)]
console.log(stuffUnique)
console.log(
	new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
)

console.log(new Set('komilsobitov').size)
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

/*
const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski'
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Weigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze'
		]
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5
	}
}

// 1.
for (const [i, player] of game.scored.entries())
	console.log(`Goal ${i + 1}: ${player}`)

// 2.
const odds = Object.values(game.odds)
let average = 0
for (const odd of odds) average += odd
average /= odds.length
console.log(average)

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
	const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
	console.log(`Odd of ${teamStr} ${odd}`)
}
*/

/*
// Looping Objects: Object Keys, Values and Entries
// property NAMES
const properties = Object.keys(openingHours)
console.log(properties)

let openStr = `We are open on ${properties.length} days: `

for (const day of properties) {
	openStr += `${day}, `
}

console.log(openStr)

// Property VALUES
const values = Object.values(openingHours)
console.log(values)

// Entrie Object
const entries = Object.entries(openingHours)
// console.log(entries);

for (const [day, { open, close }] of entries) {
	console.log(`On ${day} we open at ${open} and close at ${close}`)
}
*/

/*
// OPTIONAL CHAINING (?.)

// Without optional chaining (?.)
if (restuarant.openingHours && restuarant.openingHours.mon)
	console.log(restuarant.openingHours.mon.open)

// Error
// console.log(restuarant.openingHours.mon?.open)

// Optional Chaining (?.)
console.log(restuarant.openingHours.mon?.open)
console.log(restuarant.openingHours?.mon?.open)

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
for (const day of days) {
	const open = restuarant.openingHours[day]?.open ?? 'closed'
	console.log(`On ${day} we open at ${open}`)
}

// Methods
console.log(restuarant.order?.(0, 1) ?? 'Method does not exist')
console.log(restuarant.orderRisotto?.(0, 1) ?? 'Method does not exist')

// Arrays
const users = [{ name: 'Komil', email: 'hello@komil.com' }]
// const users = [];

console.log(users[0]?.name ?? 'User array empty')
if (users.length > 0) console.log(users[0].name)
else console.log('User array empty')
*/

/*
// Looping Arrays: The for-of loop
const menu = [...restuarant.starterMenu, ...restuarant.mainMenu]

for (const item of menu) console.log(menu)

for(const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`)
}
*/

// console.log([...menu.entries()])

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic']

// 5.
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function(...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 1 is more likely to win');
*/

/*
// Logical Assigment Operators

const rest1 = {
	name: 'Capri',
	// numGuests: 20,
	numGuests: 0
}

const rest2 = {
	name: 'La Piazza',
	owner: 'Giovanni Rossi'
}

// OR Assignment Operator
// rest1.numbGuests = rest1.numGuests || 10;
// rest2.numbGuests = rest2.numGuests || 10;
// rest1.numguests ||= 10;
// rest2.numguests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numguests ??= 10;
rest2.numguests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'
rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= '<ANONYMOUS>'

// nullish assignment operator
console.log(rest1);
console.log(rest2);
*/

/*
// The Nulllish Coalesing Operator (??)

restuarant.numGuests = 0
const guests = restuarant.numGuests || 10
console.log(guests)

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restuarant ?? 10
console.log(guestCorrect)
*/

/*
// SHORT CIRCUITING (&& and ||)
console.log('---- OR ----')
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas')
console.log('' || 'Jonas')
console.log(true || 0)
console.log(undefined || null)

console.log(undefined || 0 || '' || 'Hello' || 23 || null)

restuarant.numGuests = 0
const guests1 = restuarant.numGuests ? restuarant.numGuests : 10
console.log(guests1)

const guests2 = restuarant.numGuests || 10
console.log(guests2)

console.log('---- AND ----')
console.log(0 && 'Komil')
console.log(7 && 'Komil')

console.log('Hello' && 23 && null && 'Komil')

// Practical example
if (restuarant.orderPizza) {
	restuarant.orderPizza('mushrooms', 'spinach')
}

restuarant.orderPizza && restuarant.orderPizza('mushrooms', 'spinach')
*/

/*
// REST PATTERN and PARAMETRS 
// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]]

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others)

const [pizza, , risotto, ...otherFood] = [
	...restuarant.mainMenu,
	...restuarant.starterMenu
]
console.log(pizza, risotto, otherFood)

// Objects
const { sat, ...weekdays } = restuarant.openingHours
console.log(weekdays)

// 2) Functions
const add = function (...numbers) {
	let sum = 0
	for (let i = 0; i < numbers.length; i++) sum += numbers[i]
	console.log(sum)
}
add(2, 3)
add(5, 3, 7, 2)
add(8, 2, 5, 3, 2, 1, 4)

const x = [23, 5, 7]
add(...x)

restuarant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
restuarant.orderPizza('mushrooms')
*/

/*
// The Spread Operator(...)
const arr = [7, 8, 9]
const badNewArr = [1, 2, arr[0], arr[1], arr[arr.length - 1]]
console.log(badNewArr)

const newArr = [1, 2, ...arr]
console.log(newArr)

console.log(...newArr)

const newMenu = [...restuarant.mainMenu, 'Gnocci']
console.log(newMenu)

// Copy Array
const mainMenuCopy = [...restuarant.mainMenu]
console.log(mainMenuCopy)

// Join 2 arrays
const menu = [...restuarant.mainMenu, ...restuarant.starterMenu]
console.log(menu)

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Komil'
const letters = [...str, ' ', 'S.']
console.log(letters)
console.log(...str)
// console.log(`${...str} Schemedtmann`);

// Real-world example
const ingredients = [
	// prompt("Let's make pasta! Ingredient 1?"),
	// prompt('Ingredient 2?'),
	// prompt('Ingredient 3?')
]
// console.log(ingredients)

// restuarant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
restuarant.orderPasta(...ingredients)

// Objects
const newRestuarant = { foundedIn: 1998, ...restuarant, founder: 'Giuseppe' };
console.log(newRestuarant);

const restuarantCopy = {...restuarant};
restuarantCopy.name = 'Ristuaranta Rome';
console.log(restuarantCopy.name);
console.log(restuarant.name);
*/

/*
// Destructuring Objects

// Using Object Method with Destructuring Objects
restuarant.orderDelivery({
	time: '22:30',
	address: 'Via del Sole, 21',
	mainIndex: 2,
	starterIndex: 2
})

restuarant.orderDelivery({
	address: 'Via del Sole, 21',
	starterIndex: 1
})

const { name, openingHours, categories } = restuarant
console.log(name, openingHours, categories)

const {
	name: restuarantName,
	openingHours: hours,
	categories: tags
} = restuarant
console.log(restuarantName, hours, tags)

// Default Value
const { menu = [], starterMenu: starters = [] } = restuarant
console.log(menu, starters)

// Mutating Variables
let a = 111
let b = 999
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj)
console.log(a, b)

// Nested Destructuring with Objects
const {
	fri: { open: o, close: c }
} = hours
console.log(o, c)
*/

/*
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0]
const b = arr[1]
const c = arr[2]

console.log(a, b, c); // 2, 3, 4

const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4

const [first, second] = restuarant.categories;
console.log(first, second); // Italian Pizerra

let [main, , secondary] = restuarant.categories;
console.log(main, secondary); // Italian Vegetarian

// // Switching Variables
// const temp = main; // Italian
// main = secondary; // Vegetarian
// secondary = temp; // Italian
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

// Recieve 2 return values from a function
const [bread, pizza] = restuarant.order(2, 0);
console.log(bread, pizza);

// Nested Destructuring
const nested = [2, 4, [5, 6]]
// console.log(nested[2][0]); // 5

// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/
