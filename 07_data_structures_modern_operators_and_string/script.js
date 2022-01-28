'use strict'

const restuarant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizerraa', 'Vegetarian', 'Organic'],
	starterMenu: ['Focacciaa', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	openingHours: {
		thu: {
			open: 13,
			close: 23
		},
		fri: {
			open: 12,
			close: 24
		},
		sat: {
			open: 1,
			close: 25
		}
	},

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
	},

	orderDelivery: function ({
		starterIndex = 1,
		mainIndex = 0,
		time = '20:00',
		address
	}) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		)
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`)
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient)
		console.log(otherIngredients)
	}
}

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
