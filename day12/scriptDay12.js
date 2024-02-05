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
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
const numberPoints = points.map(Number).sort((a, b) => a - b);
console.log(numberPoints);
const distance = numberPoints[numberPoints.length -1] - numberPoints[0];
console.log(distance);

//03
const validJSNamePattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/
const test1 = 'first_name';
const test2 = 'first-name';
const test3 = '1first_name';
const test4 = 'firstName';
const testPatternArray = [test1, test2, test3, test4];

for (const test of testPatternArray) {
    let testInAction = validJSNamePattern.test(test);
    console.log(testInAction)
};


//Exercises Level 2:
//01
function tenMostFrequentWords(inputString) {
    const cleansedString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();
    const wordsArray = cleansedString.split(/\s+/);
    const frequencyMap = {};
    wordsArray.forEach(word => {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    });
    const sortedWords = Object.keys(frequencyMap).sort((a,  b) => frequencyMap[b] - frequencyMap[a]);
    const topTenWords = sortedWords.slice(0, 10);
    return topTenWords.map(word => ({ word, count: frequencyMap[word]}));
};

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph))
//level 03 is just the same than last exercises extracting just 3 most used words (sortedWords.slice(0,3))
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
console.log(tenMostFrequentWords(sentence))

function topthreeMostFrequentWords(inputString) {
    const cleansedString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();
    const wordsArray = cleansedString.split(/\s+/);
    const frequencyMap = {};
    wordsArray.forEach(word => {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    });
    const sortedWords = Object.keys(frequencyMap).sort((a,  b) => frequencyMap[b] - frequencyMap[a]);
    const topTenWords = sortedWords.slice(0, 3);
    return topTenWords.map(word => ({ word, count: frequencyMap[word]}));
};
console.log(topthreeMostFrequentWords(sentence))