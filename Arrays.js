

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
let arr2 = ['j', 'l', 'm', 'n']


// ****************************************************************
// slice
arr.slice(2);


// ****************************************************************
// splice
arr.splice(1, 4)

// ****************************************************************
// reverse -- mutate de array
arr.reverse()

// ****************************************************************
// concat -- doesnt mutate de array
const letter = arr.concat(arr2)
letter

// ****************************************************************
// join 
arr.join('-')

// ****************************************************************
// getting last array element

arr[arr.length - 1]
arr.slice(-1)[0]
arr.at(-1)


// ****************************************************************
// ForEach
const movimentos = [200, 450, -400, 3000, -650, -130, 70, 1300]

// normal FOR
for (const movimento of movimentos) {
    if (movimento > 0) {
        `you deposited ${movimento}`
    } else {
        `you withdrew ${movimento}`
    }
}

// FOREACH

movimentos.forEach(function (movimento) {
    if (movimento > 0) {
        `you deposited ${movimento}`
    } else {
        `you withdrew ${movimento}`
    }
})


// FOREACH getting index and value

// entries method get index and current element  from the array

for (const [i, movimento] of movimentos.entries()) {
    if (movimento > 0) {
        `moviment ${i + 1}: you deposited ${movimento}`
    } else {
        `moviment ${i + 1}: you withdrew ${movimento}`
    }
}

// have to be in a expecific order - current element , index and array
movimentos.forEach(function (movimento, i, arr) {
    if (movimento > 0) {
        `moviment ${i + 1}: you deposited ${movimento}`
    } else {
        `moviment ${i + 1}: you withdrew ${movimento}`
    }
})

// ****************************************************************
//      MAP & SET

//  MAP

const moedas = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

moedas.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
})

//  SET

const moedaUnica = new set(['USD', 'EUR', 'GBP'])

// in foreach set the key and current element will be the same value
// _ means to disregard that variable
moedaUnica.forEach(function (value, _, map) {
    console.log(`${value}: ${value}`);
})





const julia = [3, 5, 2, 12, 7]
const kate = [4, 1, 15, 8, 3]

const checkDogs = function checkDogs(dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice()
    dogsJuliaCorrected.splice(0, 1)
    dogsJuliaCorrected.splice(-2)
    const dogsarr = dogsJuliaCorrected.concat(dogsKate)

    dogsarr.forEach(function (dog, i) {

        const aget = dog >= 3
            ?
            `Dog number ${i + 1} is an adult and is ${dog} years old`
            :
            `Dog number ${i + 1} is still a puppy 🐶`

        console.log(aget)
    })
}






checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const eurToUsd = 1.1

// using map js create a new array to store the new values
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements)
console.log(movementsUSD)

// using FOR instead MAP

const movementsUSDfor = []
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd)
console.log(movementsUSDfor)

const movementsUSD = movements.map(mov => mov * eurToUsd);
const movementsDescription = movements.map((mov, i, arr) =>
    `movement ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
)

console.log(movementsDescription)


// FILTER 
const withdrawal = movements.filter(mov => mov < 0)

// REDUCE
const balance = movements.reduce(function (acc, cur, i, arr) {
    console.log(`Iteration ${i}: ${acc} cur ${cur}, arr ${arr}`)
    return acc + cur
}, 100)
console.log(balance)

// or
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const balance = movements.reduce((acc, cur) => acc + cur)

console.log(balance)



const eurToUsd = 1.1
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0)




const dogs = [5, 2, 4, 1, 15, 8, 3]


const calcDog = function (data) {
    const avg = data.reduce((acc, age) => acc + age, 0)
    console.log(avg)

    const dogPuppy = data
        .filter(puppy => puppy <= 2)
        .map(x => x * 2)
    console.log(dogPuppy)
    const dogOld = data
        .filter(puppy => puppy > 2)
        .map(x => 16 + x * 4).filter(x => x > 37)
    console.log(dogOld)
}

console.log(calcDog(dogs))


// SOME and Every

const nu = [5, 2, 4, 1, 15, 8, 3]

console.log(nu)
// equality
console.log(nu.includes(15))

// Condition
const anyD = nu.some(mov => mov > 5)
console.log(anyD)

// flat array

const arr = [[1, 2, 3], [4, 1, 15], 8, 3]
arr.flat()

// if your array has more than one array inside you have to say how deep you want
const arrDeep = [1, 2, 3, 54, 18, -9, 98, 13, -15]
arrDeep.flat(2)

const allArr = [arr, arrDeep]

const result = allArr
    .map(acc => acc)
    .flat(2)
    .reduce((acc, n) => acc + n, 0)

console.log(result)


// how to sort a arry of numbers 
arrDeep.sort((a, b) => {
    if (a > b) return 1
    if (b > a) return -1
})

console.log(arrDeep)

// or

arrDeep.sort((a, b) => a - b)

console.log(arrDeep)

// creating a array and filling up

const z = Array.from({ length: 100 }, (_, i) => i + 1)
console.log(z)



const brankDep = accounts.flatMap(acc => acc.movements)
console.log(brankDep)


// using filter to know how many valeu greater than 1000
console.log(brankDep.filter(mov => mov >= 1000).length)

// others option using REDUCE

console.log(brankDep.reduce(
    (contador, x) =>
        (x >= 1000 ? contador + 1 : contador), 0))



// using reduce to separetes positive and negative

const sums = accounts
    .flatMap(acc => acc.movements)
    .reduce(
        (sums, cur) => {
            cur > 0 ? (sums.deposits += cur) : (sums.withdraw += cur)
            return sums
        }, { deposits: 0, withdraw: 0 }
    )
console.log(sums)

// OR 

const sums1 = accounts
    .flatMap(acc => acc.movements)
    .reduce(
        (sums, cur) => {
            sums[cur > 0 ? 'deposits' : 'withdraw'] += cur
            return sums
        }, { deposits: 0, withdraw: 0 }
    )
console.log(sums)