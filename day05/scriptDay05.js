//Excercises level 1
//1
let emptyArr = Array();
let emptyArr2 = [];
//2
let numberArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 56, 90];
//3
console.log(numberArray.length);
//4
let firstItem = numberArray[0];
let lastItem = numberArray[numberArray.length - 1];
let middleItem = numberArray[parseInt(numberArray.length / 2)]; //since array is odd (11 values), dividing it by 2 (turns 5,5) and parseing to 5 would turn the middle value-index number
console.log(firstItem, lastItem, middleItem);
//5
let mixedDataTypes = [
    'Elias',
    'Carballo',
    '33',
    true,
    true,
    false,
    1,80,
    33,
    1990,
    "union de hecho",
    [1, 2, 3]
];
//6
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//7
console.log(itCompanies);
//8
console.log(itCompanies.length);
//9
console.log(itCompanies[0], itCompanies[parseInt(itCompanies.length / 2)], itCompanies[itCompanies.length -1] );
//10
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
};
//11
for (let i = 0; i < itCompanies.length; i++) {
    console.log((itCompanies[i]).toUpperCase());
};
//12
console.log(itCompanies.join(', ') + ' are big IT companies');
//13
itCompanies.includes('Google')
? console.log('Google found')
: console.log('google not found');
//14
let filteredCompanies = [];
itCompanies.forEach(company => {
    let oCount = 0;
    for (let i = 0; i < company.length; i++) {
        if (company[i].toLowerCase() === 'o') {
            oCount++;
        }
    }
    if (oCount >= 2) {
        filteredCompanies.push(company);
    }
});
console.log(filteredCompanies);

//15
console.log(itCompanies.sort());
//16
console.log(itCompanies.reverse());
//17
console.log(itCompanies.slice(0, 3));
//18
console.log(itCompanies.slice(itCompanies.length - 3));
//19
/*
console.log(itCompanies.slice(parseInt(itCompanies.length / 2), (itCompanies.length / 2).ceil));
console.log(midCompany);
console.log(itCompanies.slice(itCompanies[midCompany], 1));
console.log(itCompanies, midCompany,)
console.log(itCompanies.sort())
*/
let midCompany = parseInt(itCompanies.length / 2);
console.log(itCompanies.slice(midCompany, midCompany + 1));  // <-- result
console.log(itCompanies.sort().slice(midCompany, midCompany + 1));
/*
console.log(itCompanies)
console.log(itCompanies.reverse())
console.log(itCompanies)
*/
//20
console.log(itCompanies.shift());
console.log(itCompanies)

//21
let itLength = itCompanies.length
function isCompanyOdd(number) {
    
        if (number % 2 == 0) {
            console.log(itCompanies.pop(midCompany , midCompany + 2))
        } else {
            console.log(itCompanies.pop(midCompany))
        }
    };

//console.log(itLength, isCompanyOdd(itLength))
console.log(itLength)
/*
console.log(itCompanies.pop())
console.log(itCompanies)

console.log(itCompanies % 2 == 0);
!(itCompanies % 2 == 0) 
    ? console.log(itCompanies.pop(midCompany))
    : console.log(itCompanies.pop(midCompany, midCompany + 1));

console.log(midCompany)
console.log(itCompanies)
*/
//itCompanies.push('JavasCrypt')
function isItOdd() {
if ((itCompanies.length % 2) === 0) {
    console.log(itCompanies.splice(midCompany - 1, 2))
} else {
    console.log(itCompanies.splice(midCompany, 1))
}
};
console.log(itCompanies);
console.log(isItOdd());
console.log(itCompanies);

//22
console.log(itCompanies.pop())
console.log(itCompanies)
//23
console.log(itCompanies.splice(0, itCompanies.length))
console.log(itCompanies);

//Excercises level 2
//1

/*
let countries = import('./countries.js');
console.log(countries);
let pattern1 = ",\g"
*/
//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const re = /[,.]/g;
console.log(text.replaceAll(re, '').split(' '));
let techArray = text.replaceAll(re, '').split(' ');
console.log(techArray, techArray.length);

/*
text.replaceAll(', ', ' ');
console.log(text.replace(/\,./g, ' ').split(' '))
console.log(text.split(' '), ' ')
*/

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart)
shoppingCart.unshift('Meat');
console.log(shoppingCart);
shoppingCart.push('Sugar');
console.log(shoppingCart);
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
console.log(shoppingCart);
shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea');
console.log(shoppingCart);

/*
let noHoney = shoppingCart.filter(item => item !== 'Honey');
shoppingCart.filter(item => item !== 'Honey');
console.log(noHoney);
console.log(shoppingCart.filter(item => item !== 'Honey'));
*/

//4
const countries = [
    'Albania', 
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];