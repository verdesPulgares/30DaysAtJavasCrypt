const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

//Exercises: Level 1:
//01
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(constants);
console.log(e, pi);

//02
let [ fin, est, sw, den, nor ] = countries;
console.log(countries, fin, sw, nor, est, den);

//03
let { width, height, area, perimeter } = rectangle;
console.log(width, area, height, perimeter);


//Exercises: Level 02:
//01
for (const {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age);
};

//02
const usersWith2orLessSkills = {};
for (const {name, skills} of users) {
    if (skills.length === 2) { //actually the assignment was to find the persons with less than two but i already wrote the code, so.. 
        console.log(`${name} has ${skills.length} skills`);
    };
    if (skills.length === 1) {
        console.log(`${name} has ${skills.length} skill. We'll call you "almost"`)
    };
};


//Exercises: Level 03:
//01 Had to block this one out by notation because of RAM issues
/*
import { countries_data } from "../day10/countriesData.js";
for (const {name, capital, population, languages} of countries_data) {
    console.log(name, capital, population, languages)

}
*/

//02
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
let [ name, skills, scores ] = student;
let [ , , jsScore, reactScore ] = scores
console.log(name, skills, jsScore, reactScore);



//03 still in the works. gotta say many of this exercises are shit. the complexity curve from one to another is wtf
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
function convertArrayToObject(array) {
  let resultObject = new Object();
  for (const element in array) {
    let [ name, skills, scores ] = student;
    let tempObject = Object.assign(student);
    resultObject = Object.assign(tempObject)
  };
  return resultObject;
}
console.log(convertArrayToObject(students));


//04

