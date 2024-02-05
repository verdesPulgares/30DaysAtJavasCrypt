//Exercises Day 12: Level 01:
//01
/* "Calculate the total annual income of the person from the following text:
‘He earns 4000 euro from salary per month,
 10000 euro annual bonus,
 5500 euro online courses per month.’"*/
const incomeString = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month";
const pattern = /\d+/g;
const matches = incomeString.match(pattern);
console.log(matches); 
const numberMatches = [];
for (const element of matches) {
    let temp = parseInt(element);
    numberMatches.push(temp)
};
console.log(numberMatches)
let [ salary, annualBonus, onlineCourses ] = numberMatches
const totalAnnualEarnings = (salary + onlineCourses) * 12 + annualBonus;
console.log(totalAnnualEarnings);

//02
