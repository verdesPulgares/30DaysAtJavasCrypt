/*
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))

const numbers = [1, 2, 3, 5, 6, 7, 9]
const sumArray = arr => {
    let sum = 0;
    arr.forEach(element => {
        sum += element        
    });
    return sum

}
console.log(sumArray(numbers));

function sayHello() {
    console.log('hello')
}
setTimeout(sayHello, 2000);

let sum = 0;
numbers.forEach(num => sum += num)
console.log(sum)



const numbers = [9.81, 3.14, 100, 37];
console.log(numbers);
console.log(numbers.sort())
numbers.sort(function (a, b) {
    return a - b
})
console.log(numbers)
numbers.sort(function (a, b) {
    return b - a
})
console.log(numbers);
*/



const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

/*01 explica la diferencia entre forEach, Map Filter y Reduce
forEach toma un array y una funcion y llama la funcion por cada uno de los elementos

filter coorre sobre un array y toma una condicion
y te crea un array nuevo con todos los elementos que den match(sean filtrados) con la condicion dada en el array mapeado

map te crea un array nuevo modificando los elementos del original

y reduce te unifica los resultados de un array a uno (por ejemplo sumar todos los elementos de un array y retornar el resultado)
*/

//02
//debugger;
const calcularIVA = (n) => n * 1.21;

function a(item, index) {
    console.log("a", `en la posicion ${index} esta el valor ${item}`);
}

const b = (item, index) => {
    console.log("b", `en la posicion ${index} esta el valor ${item}`);

}

numbers.forEach(a)
numbers.forEach(b)

console.log(numbers.map(a))
console.log(numbers.forEach(a))

const pruebaMap = numbers.map((item) => item * 1.21);

console.log({ pruebaMap, a, b , numbers })
const pruebaMap2 = numbers.map(calcularIVA);
console.log(pruebaMap2)


function miPropioMap(array, callback) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        const valor = array[i];
        let element = callback(valor, i, array);
        resultado.push(element)
    }
    return resultado
}

function miPropioFilter(array, callback) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (callback(item, i, array)) {
            resultado.push(item)
        }
    }
    return resultado
    
}

const resultad = miPropioMap(numbers, calcularIVA) // [1.21, 2.42, 3.63, 4.84, 6.05, 7.26, 8.469999999999999, 9.68, 10.89, 12.1]
console.log({ resultad})

const funcionPelotuda = (nombre, index, arrayTotal) => {
    if (index === 0) {
        return `*${nombre}*`
    }
    if (index === arrayTotal.length -1) { return `[${nombre}]`}// al primero , asteriscos
    // al ultimo , corechetes
    return nombre;
}

const gente = ["pepe", "juan", "maria", "alicia", "pedro"]

const envueltos = gente.map(funcionPelotuda);

const envueltosPorPropioMap = miPropioMap(gente, funcionPelotuda)

console.log({ envueltos, envueltosPorPropioMap })

//03
countries.forEach((element) => {
    console.log(element)
})

//04
names.forEach((element) => console.log(element))

//05
numbers.forEach(function (element, index, array) {
    console.log(element, index, array)
})

//06
const newCountriesArray = countries.map((element) => element.toUpperCase())
console.log(newCountriesArray)

//07
const countriesAndTheirLenghts = countries.map((element) => `${element} length is ${element.length}`);
console.log(countriesAndTheirLenghts)
const test = countries.map((element) => [element, element.length])
console.log(test)

//08
const squaredNumbers = numbers.map((element) => element * element);
console.log(squaredNumbers)

//09
const upperCaseNames = names.map((element) => element.toUpperCase())
console.log(upperCaseNames)

//10
const productsAndPrices = products.map((element) => `${element.product}: $${element.price}`)
console.log(productsAndPrices)

//11
const landCountries = countries.filter((element) => element.toLowerCase().includes('land'))
console.log(landCountries)

//12
const sixCharsCountries = countries.filter((element) => element.length == 6);
console.log(sixCharsCountries);

//13
const sixCharsOrMoreLongCountries = countries.filter((element) => element.length >= 6);
console.log(sixCharsOrMoreLongCountries);

//14
const startsWithE = countries.filter((element) => element.startsWith('E'))
const testF = countries.filter((element) => element.startsWith('F'))
console.log(startsWithE, testF, countries)

//15
const pricesWithValues = products.filter((element) => typeof element.price === "number")
console.log(pricesWithValues)

//16
function getStringList(array) {
    const stringListArray = [];
    for (const element of array) {
        if (typeof element === "string") {
            stringListArray.push(element)
        }
    }
    return stringListArray
}
const testStringList = [1, 2, 3, '', 'abc'];
console.log(getStringList(testStringList))

//17
const sumOfNumbers = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sumOfNumbers)

//18 tengo que hacer la callback function que toma acc y cur
const europeanCountries = countries.reduce((acc, country, index, array) => {
    if (index === 0) {
        return acc + country;
    } else if (index === countries.length - 1) {
        return acc + ', and ' + country + ' are north european countries.';    
    } else {
        return acc + ', ' + country;
    }
}, 'Estonia, ');
console.log(europeanCountries)

/* 19 some check if some elements are similiar in one aspect, 
whereas every checks if all elements are similar in one aspect */

//20
const areSome7lengthed = names.some((name) => name.length < 7)
console.log(areSome7lengthed, names)

//21
const areEveryLand = countries.every((country) => country.includes('land'));
console.log(areEveryLand)

/* 22 find returns the first element matching the conditions,
findIndex returns the index of the first element matching the condition */

//23
const firstSixLettersCountry = countries.find((country) => country.length === 6)
console.log(firstSixLettersCountry)

//24
const indexFirstSixLettersCountry = countries.findIndex((country) => country.length === 6)
console.log(indexFirstSixLettersCountry)

//25
const findNorwayIndex = countries.findIndex((country) => country === 'Norway');
console.log(findNorwayIndex)

//26
const findRussia = countries.findIndex((country) => country === 'Russia');
console.log(findRussia)

//Exercises: Level 2
//1 Find the total price of products by chaining two or more array iterators
//(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products.map(item => item.price) //map to extract prices from original object
.filter((price) => typeof price === "number" && !isNaN(price)) //separate prices with typeof number values
.reduce((acc, price) => acc + price, 0); //sum them all up
console.log(totalPrice)

//2
const totalPriceByReduce = products.reduce((acc, item) => {
    const price = parseFloat(item.price);
    if (!isNaN(price)) {
        return acc + price;
    } else {
        return acc;
    }
}, 0);
console.log(totalPriceByReduce)

//3
import { importedCountries } from "./importedCountries.js";
//console.log(importedCountries);
debugger;


function categorizeCountries1(array) {
//    const countriesWithLand = array.filter((country) => country.includes('land')); they all work just dont wanna overwork RAM
    const countriesStartingwithE = array.filter((country) => country.startsWith('E'));
//    const countriesWithOneOrMoreWords = array.filter((country) => country.includes(' '));
//    const countriesWith4Letters = array.filter((country) => country.length === 4);
    return countriesStartingwithE;
}
console.log(categorizeCountries1(importedCountries))

//4 la consigna quiere una funcion que tome un array y retorne un array que contenga [letra con la que inicia, numero de paises que inician]
function firstLetterAndItsUses(array, firstLetter) {
    const startingLetter = firstLetter;
    let howManyTimes = 0;
    const countriesStartingWithSaidLetter = [];
    const resultingArray = [startingLetter];
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith(startingLetter)) {
            howManyTimes++;
            countriesStartingWithSaidLetter.push(array[i]);
        }
    };
    resultingArray.push(howManyTimes)
    resultingArray.push(countriesStartingWithSaidLetter)
    return resultingArray;
}
console.log(firstLetterAndItsUses(importedCountries, 'Z'))

//5
function getFirstTenCountries(array) {
    const firstTen = array.slice(0, 10)
    return firstTen 
}
console.log(getFirstTenCountries(importedCountries))
