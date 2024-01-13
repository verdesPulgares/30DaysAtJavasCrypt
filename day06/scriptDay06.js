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
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//1
for (let i = 0; i <= 10; i++) {
  console.log(i)
};

//
let ii = 0
while (ii <= 10) {
  console.log(ii)
  ii++
};

//
let iii = 0
do {
  console.log(iii)
  iii++
} while (iii <= 10) ;

//2


for (let iI= 10; iI >= 0; iI--) {
  console.log(iI)
};

//
let iiI = 10
while (iiI >= 0) {
  console.log(iiI)
  iiI--
};

//
let iiiI = 10
do {
  console.log(iiiI)
  iiiI--
} while (iiiI >= 0) ;

//3
let n = 7;
for (let i = 0; i <= n; i++) {
  console.log(i)
};

//4
let repeatingString = '#'
for (let i = 0; i <= 7; i++) {
  console.log(repeatingString.repeat(i))
};

//5
for (let i = 0; i <= 10; i++) {
  console.log(i + " x " + i + " = " + (i * i))
};

//6
console.log("i\ti^2\ti^3")
for (let i = 0; i <= 10; i++) {
  console.log(i + "\t" + i*i + "\t" + i*i*i)
};

//7
//debugger;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
};

//8
//debugger
for (let i = 0; i <=100; i++) {
  if (!(i % 2 ===0))
  console.log(i)
};
//9
//debugger
/*for (let i = 0; i <= 100; i++) {
  if (i <= 2) {
    continue
  } else if (i % 2 === 0 || i % 3 === 0) {
    continue
  } else if (i % 5 === 0 || i % 7 === 0) {
    continue
  } else {
    for (let ii = 2; ii <= Math.sqrt(i); ii++) {
      if (i % ii === 0) {
        console.log(i);
      }
    }
  }
}
*/
//debugger
function isPrime(number) {
  if (number < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

//debugger
for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i)
  }
};

//10
let sumLoop = 0;
for (let i = 0; i <= 100; i++) {
  sumLoop += i
};
console.log(sumLoop);


//11
//debugger
let oddSum = 0;
let evenSum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i
  } else {
    oddSum += i
  }
}
console.log(oddSum, evenSum);

//12
//debugger

let oddSm = 0;
let evenSm = 0;
let arraySum = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSm += i
  } else {
    oddSm += i
  }
}
arraySum.push(oddSm);
arraySum.push(evenSm)
console.log(arraySum);

//13
//debugger
function createArr() {
  let arrOfRndm = [];
    for (let i = 0; i <= 4; i++) {
    arrOfRndm.push(Math.random());
    }
  console.log(arrOfRndm)
};
createArr();

/* here lies the cemetery of dead intents
arrOfRndm.push(Math.random() * 10);
let rndmNumber = parseInt(Math.random() * 10);

for (let i = 0; i > 5; i++) {
  let array$i = [Math.random, Math.random, Math.random, Math.random, Math.random]
  console.log(array$i)
};

 

function createArray() {
  let arrOfRndm = [] */
  
//14
//debugger
function randomSingularitiesGenerator () {
  let minNumber = 0;
  let maxNumber = 100;
  let arrayLenght = 5;

 /*
 //this parts seems to make no functional difference 
 if (arrayLenght > maxNumber - minNumber + 1) {
    console.error("error: array is too long")
    return null;
  }*/

  let uniqueNumbers = [];
  while (uniqueNumbers.length < arrayLenght) {
    let randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    if (!uniqueNumbers.includes(randomNum)) {
      uniqueNumbers.push(randomNum);
    }
  }
  return uniqueNumbers
}
let randomArray = randomSingularitiesGenerator();
console.log(randomArray);
console.log(randomSingularitiesGenerator());

//15
//debugger
function randomIdGenerator() {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = '';
  for (let i = 0; i <= 6; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length)
    randomId += characters.charAt(randomIndex);
  }
  return randomId;
};

let randomId = randomIdGenerator();
console.log(randomId);

//excercises level 2
//1
//debugger
function randomIdGenerator2() {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = '';
  for (let i = 0; i <= Math.floor(Math.random() * 100); i++) {
    let randomIndex = Math.floor(Math.random() * characters.length)
    randomId += characters.charAt(randomIndex);
  }
  return randomId;
};

let randomId2 = randomIdGenerator2();
console.log(randomId2);

//2
//debugger
function hexGen() {
  let characters = '0123456789abcdef';
  let randomHex = '#';
  for (let i = 0; i <= 5; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length)
    randomHex += characters.charAt(randomIndex);
  }
  return randomHex
};

let randomHex = hexGen();
console.log(randomHex);

//3
//debugger
function randomRGBGenerator () {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
const randomRGBColor = randomRGBGenerator();
console.log(randomRGBColor);

//4
//debugger


let upperCaseCountries = [];
for (let i = 0; i <= countries.length - 1; i++) {
  upperCaseCountries.push(countries[i].toUpperCase())
};
console.log(countries); 
console.log(upperCaseCountries);

//5
//debugger
let lengthArray = [];
for (let i = 0; i < upperCaseCountries.length; i++) {
  lengthArray.push(upperCaseCountries[i].length)
};
console.log(lengthArray);

//6

//debugger

countries.push('Iceland');
upperCaseCountries.push('ICELAND');

console.log(countries);
let arrayOfArrays = [];

for (let i = 0; i < countries.length; i++) {
  let insiderArray = [];
  insiderArray.push(countries[i], upperCaseCountries[i].slice(0,3), lengthArray[i])
  arrayOfArrays.push(insiderArray)
};

console.log(arrayOfArrays);


//7
//debugger
let landCountries = countries.filter((word) => word.includes('land'));
console.log(landCountries);

//8
let iaEndingCountries = [];
function areThereCountriesEndingWithIa() {
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].endsWith('ia')) {
      iaEndingCountries.push(countries[i])
    } 
  };
  
  if (iaEndingCountries.length === 0) {
    console.log('there are no countries ending with "ia"')
  } else {
    console.log(iaEndingCountries)
  }
};

areThereCountriesEndingWithIa();

//9
//debugger
let longestWord = '';
function findLongestWord (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord
};

console.log(findLongestWord(countries));

//10
let countriesWith5Characters = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length == 5) {
    countriesWith5Characters.push(countries[i])
  }
};
console.log(countriesWith5Characters);

//11
//debugger;
let longestNamedWebTech = '';

function findLongestWebTech () {
  for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > longestNamedWebTech.length) {
      longestNamedWebTech = webTechs[i];
    }
  }
  return longestNamedWebTech
}
console.log(findLongestWebTech());

//12
let webTechsArray = []
for (let i = 0; i < webTechs.length; i++) {
  let innerWebTechArray = [];
  innerWebTechArray.push(webTechs[i], webTechs[i].length)
  webTechsArray.push(innerWebTechArray)
};
console.log(webTechsArray);

//13 this bad boy didnt stress me at all
//debugger
let mernAcronym = [];
for (let i = 0; i < mernStack.length; i++) {
  let firstCharacter = mernStack[i].slice(0,1)  
  mernAcronym.push(firstCharacter)
};

let mernAcronymButItsAString = mernAcronym.join('')

console.log(mernAcronymButItsAString); 

//14
const webTechs2 = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (let i = 0; i < webTechs2.length; i++) {
  console.log(webTechs2[i])
};

for (const element of webTechs2) {
  console.log(element.toUpperCase()) //just added the toUpperCase to print it out differently in the console.
};

//15
//debugger
let fruitArray = ['banana', 'orange', 'mango', 'lemon'];
let reversedFruitArray = [];
for (let i = fruitArray.length -1; i >= 0; i--) {
  reversedFruitArray.push(fruitArray[i]);
}
console.log(fruitArray);
console.log(reversedFruitArray);


//16
//debugger;
/*
const frontEnd = [webTechs2.slice(0,4)];
const backEnd = [webTechs2.slice(5, 8)]
const fullStackk = frontEnd + backEnd;
console.log(fullStackk);

console.log('const fullStack = [\n\t[' + fullStackk[0] + '],\n\t[' + fullStackk[1] + '\n]');

console.log('const fullStack = [\n\t[' + frontEnd + '],\n\t[' + backEnd + ']\n]');
console.log(frontEnd);
console.log(backEnd);
console.log(upperCaseCountries);
*/
//it seems like the assignment was missunderstood, let's go again:

//debugger;
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
function consoleameLaLoganiza () {
  for (let i = 0; i < fullStack.length; i++) {
    for (const element of fullStack[i]) {
      console.log(element.toUpperCase())
    }
  }
};
consoleameLaLoganiza();

//excercises level 3
//1
//debugger
const copiedCountries = countries.slice();
console.log(copiedCountries);
console.log(countries);


//2
//debugger
const sortedCopyOfCountries = copiedCountries.sort();
console.log(sortedCopyOfCountries);

//3
console.log(webTechs.sort(), mernStack.sort());

//4 
import { importedCountries } from "./importedCountries.js";
console.log(importedCountries);


//debugger

let countriesWith4Characters = importedCountries.filter((word) => word.includes('land'));;
console.log(countriesWith4Characters);

//5
//debugger
function findLongestImportedWord (arr) {
  let longestImportedWord = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestImportedWord.length) {
      longestImportedWord = arr[i];
    }
  };
  return longestImportedWord;
};

console.log(findLongestImportedWord(importedCountries));

/*6 is to extract all the countries containing the word 'land'.
since it has already been (partially) done on excercise 4 ( i didnt extract it, 
just made a new one without mmutating the original array), 
this time i will extract them into a new array, modyfing the original one.
*/
console.log(importedCountries);


//debugger
const landFullCountries = [];
function separarLandFromNonLand (array){
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes('land')){
      landFullCountries.push(array[i]);
      array.splice(array[i], 1);
    }
  };
  return landFullCountries;

};
console.log(separarLandFromNonLand(importedCountries));

console.log(importedCountries.length);
//7 countries.filter((word) => word.includes('land'));



/* cemetery of processes and fallen intents


;
function findLongestCountry(arr) {
  let longestWord = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord
};

for (let i = 0; i < countries.length; i++) {

}


let arrayLand = countries.filter((word) => word.includes('land'));
console.log(arrayLand)
console.log(arrayLand)
console.log(countries);
console.log(arrayOfArrays)

let landArray = []
for (let i = 0; i < arrayOfArrays.length; i++) {
  arrayOfArrays[i].forEach(filter((word) => word.matches('land'))) }
  
let landArray = arrayOfArrays.filter(item => item.includes('land'));
function lookingForLand() {
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (arrayOfArrays.filter(item => item.includes('land'))) {
      landArray.push(arrayOfArrays[i, i, 0])
    }
  }
};
lookingForLand();
console.log(landArray);
console.log(arrayOfArrays)

console.log(arrayOfArrays[5][0].includes('land'));

arrayOfArrays[5][0].includes('land') ? console.log('yes') : console.log('no')

//debugger

let landArray = [];
function filterItems(arr) {
  landArray.push(arr.filter((item) => item.includes('land')));
};
console.log(filterItems(arrayOfArrays));

//debugger

for (let i = 0; i > arrayOfArrays.length; i++) { 
  for (let ii = 0; ii > 3; ii++) {
  if (arrayOfArrays[i][ii].includes('land')) {
    landArray.push(arrayOfArrays[i][ii])
  }
  };
};

//debugger

for (let i = 0; i > arrayOfArrays.length; i++) { 
  for (let ii = 0; ii > 3; ii++) {
  console.log(arrayOfArrays[i][ii])
  };
};

const targetLand = 'land';

const landArray = arrayOfArrays.reduce((accumulator, innerArray) => {
  let filteredWords = innerArray.filter(currentValue => currentValue.includes(targetLand));
  return accumulator.concat(filteredWords);
}, []);

console.log(landArray);

*/