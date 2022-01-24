'use strict';

const bookings = [];
const createBooking = function (
    flightNum,
    numPassenger = 1,
    price = 199
) {

    // ES5 way but on ES6 you can assign valeu on func parameter like on top 
    // numPassenger = numPassenger || 1
    // price = price || 199

    const booking = {
        flightNum,
        numPassenger,
        price,
    };
    console.log(booking)
    bookings.push(booking)
};

// createBooking = ('LH123', 2, 90);

const flight = 'LH234'
const jonas = {
    name: 'Jonas schem',
    passport: 2744957766
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name

    if (passenger.passport === 2744957766) {
        // alert('cheked in')
    } else {
        // alert('wrong passport')
    }
}

const newP = function (person) {
    person.passport = 24564
}

newP(jonas)
checkIn(flight, jonas);


// ============================================================
// CALLBACK FUNCTIONS
// ============================================================

const oneWord = function (str) {
    return str.replace(/ /g, '').tolower();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ')
}

// high-order func calling other func
const transformer = function (str, fn) {
    // console.log(`Original string: ${str}`)
    // console.log(`Transforme by: ${fn(str)}`)
    // console.log(`Transform by: ${fn.name}`)
}

transformer('javascr is the best!', upperFirstWord)


// ***************************************************************************************

// const greet = (greeting) => {
//     return (name) => {
//         console.log(`${greeting} ${name}`)
//     }
// }

const greet = greeting =>
    name =>
        console.log(`${greeting} ${name}`)

const greetingHey = greet('Hey')
greetingHey('jo8nas')
greetingHey('steven')

greet('hi')('jonas')

// **********************************************************************************

const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    booking: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline}
            flight ${this.iataCode}${flightNum}`
        )
        this.booking.push(
            { flight: `${this.iataCode}${flightNum}` }
        )
    }
}

lufthansa.book(777, 'cris T')
lufthansa.book(877, 'john Smith')

const eurowings = {
    airline: 'eurowings',
    iataCode: 'EW',
    booking: [],

}
const swiss = {
    airline: 'eurowings',
    iataCode: 'EW',
    booking: [],

}
const book = lufthansa.book;

// Method CALL for copy one func
book.call(eurowings, 22, 'sarah williams')

book.call(swiss, 52, 'pedro t')

// Apply method
const flightData = [566, 'joe do']
// old style
book.apply(swiss, flightData)
console.log(swiss)

// new style
book.call(swiss, ...flightData)


// Bind method

const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)

bookEW(28, 'sam sung')


// ****************************************************************
//  exempla with event listeners

lufthansa.planes = 300
lufthansa.buyPlane = function () {
    console.log(this)

    this.planes++
    console.log(this.planes)
}

document.querySelector('.buy').addEventListener
    ('click', lufthansa.buyPlane.bind(lufthansa))





// =================================================================
//                   CODING CHALLENGE
// =================================================================

const poll = {
    question: 'What is your favorite programming language?',
    options: ['0:javascript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    resgisterNewAnswer() {
        let promptQues = Number(prompt(
            `${this.question}\n${this.options.join('\n')}
        \n(Write opition number)`))

        typeof promptQues === 'number' && promptQues < this.answers.length
            && this.answers[promptQues]++
        this.displayResult()
        this.displayResult('string')

    },
    displayResult(type = 'array') {
        if (type === 'array') {
            console.log(this.answers)
        } else if (type === 'string') {
            console.log(`Poll result are ${this.answers.join(', ')}`)
        }
    }
}

document.querySelector('.poll').addEventListener
    ('click', poll.resgisterNewAnswer.bind(poll))

poll.displayResult.call({ answers: [5, 2, 3] })

// =================================================================
//                   Closures
// =================================================================
let f

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2)
    }
}


// =================================================================
//                   CODING CHALLENGE
// =================================================================

function o() {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    header.addEventListener('click',
        function () {
            header.style.color = 'blue'
        })
} o();

