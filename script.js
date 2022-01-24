'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


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

// for (const [i, player] of game.score.entries()) {
//   console.log(`gol ${i + 1}: ${player}`);

// }

// **************************************
//                SET
// **************************************

const orderSet = new Set(
  ['Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze'])
// console.log(orderSet)

const orderSet2 = new Set([1, 3, 5, 56, 7, 3, 4, 5, 1, 2, 3])
// console.log(orderSet2.has(56))

const orderSet3 = new Set("In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.")
// console.log(orderSet3.keys)

// for (const x of orderSet2) console.log(x)

const players = [
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
]

const t = [...new Set(players)]




// **************************************
//                MAPS
// **************************************

const orderMap = new Map()
orderMap.set('name', 'joao')
orderMap.set(4, 'casa')

orderMap
  .set(1, 'teste')
  .set(['pedra', 'papel', 'tesoura'], [1, 3, 5])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open =D')
  .set(false, 'we are close =(')


const time = 12

// console.log(orderMap)
// console.log(orderMap.get(time > orderMap.get('open') && time < orderMap.get('close')));

const question = new Map(
  [
    ['question', 'what is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'correct'],
    [false, 'try again!']
  ]
)





// document.body.append(document.createElement('textarea'))
// document.body.append(document.createElement('button'))

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output =
//       `${first.replace(
//         first[0],
//         first[0].toUpperCase()
//       )} ${second.replace(
//         second[0],
//         second[0].toUpperCase()
//       )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`)
//   }
// });



// const flight =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// const flightsStatus = flight.split('+')

// for (const i of flightsStatus) {
//   let status = i.slice(1, i.indexOf(';')).replace('_', ' ');
//   status.startsWith('Delayed') ? status = `🔴 ${status}` : ''


//   const destination = i.split(';')
//   const [from, to] = [destination[1].slice(0, 3),
//   destination[2].slice(0, 3)]

//   const hours = destination[3].replace(':', 'h')
//   console.log(`${status} from ${from.toUpperCase()} to ${to.toUpperCase()} (${hours})`.padStart(45))

// }


// 3. Write a JavaScript function to split a 
// string and convert it into an array of words. Go to the editor
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

const text = ['RobinSingh@gmail.com', 'bobsmith@gmail.com',
  'bobsincl@gmail.com', 'pedropeter@gmail.com', 'carlamarta@gmail.com']
const num = 4
let newArray1 = []
for (const i of text) {
  // newArray1.push(i)
}

// console.log(newArray1)

// function str(text, num) {
//   return text.slice(0, num)
// }


// for (const i of text) {
//   let [first, last] = i.split(' ')
//   first = first[0].toUpperCase() + first.slice(1)
//   let fullName = `${first} ${last[0].toUpperCase()}.`
//   console.log(fullName)
// }

for (const i of text) {
  let email = i.split('@')
  let name = email[0]
  let security = `${name.slice(0, 3).padEnd(15, '*')}${'@' + email[1]} `
  console.log(security)
}

let texts = "Robin Singh from USA."

console.log(texts.replaceAll(' ', '-'))








