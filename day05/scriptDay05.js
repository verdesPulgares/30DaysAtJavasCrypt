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
console.log(itCompanies.slice(itCompanies.length - 3));
console.log(itCompanies.slice(parseInt(itCompanies.length / 2), (itCompanies.length / 2).ceil));
let midCompany 