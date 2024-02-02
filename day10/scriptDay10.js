//Exercises level 01;
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]



//01
const newSet = new Set();

//02
const numberSet = new Set();
for (let i = 0; i < 10; i++) {
    numberSet.add(i);
};
console.log(numberSet);

//03
numberSet.delete(5);
console.log(numberSet)

//04
numberSet.clear();
console.log(numberSet);

//05
const pimba = ["pamba", "pemba", "pimba", "pomba", "pumba"];
const pimbaX = new Set(pimba);
console.log(pimbaX)

//06
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
const countriesAndTheirLengthsMap = new Map();
countries.forEach(([country]) => {
  countriesAndTheirLengthsMap.set(country, country.length);
});
console.log(countriesAndTheirLengthsMap)

//Exercises: Level 2:
//1
let aBUnion = [...a, ...b]
let abUnionSet = new Set(aBUnion);
console.log(a, b, abUnionSet)

//2
let A = new Set(a);
let B = new Set(b)
let abIntersection = a.filter((item) => B.has(item));
let C = new Set(abIntersection);
console.log(C)

//3 "Find a with b". assignment not clear

//Exercise: Level 3:
//debugger
import { countries_data } from "./countriesData.js";
function countLanguages(countries_data) {
  const allLanguages = countries_data.flatMap(country => country.languages);
  const uniqueLanguages = Array.from(new Set(allLanguages));
  return uniqueLanguages.length
}
const languageCount = countLanguages(countries_data)
console.log(`There are a total of ${languageCount} unique languages`);

//debugger;
function topSpokenLanguages(countriesData, topX) {
  const languageCountMap = new Map();

  countriesData.forEach(country => {
    country.languages.forEach(language => {
      languageCountMap.set(language, (languageCountMap.get(language) || 0) + 1);
    });
  });

  const sortedLanguages = Array.from(languageCountMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, topX)
    .map(([language, count]) => ({ language, count }));
  
  return sortedLanguages;
};

const topLanguages = topSpokenLanguages(countries_data, 3)
console.log(topSpokenLanguages(countries_data, 7))

