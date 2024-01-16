//Excercises Day 07: Level 1
//1
function myFullName() {
    return ("Elías Carballo");
};
console.log(myFullName());

//2
//debugger;
function fullName(firstName, lastName) {
    let space = ' ';
    return firstName + space + lastName;
};
console.log(fullName("Juan Manuel", "Carlos"));

//3
//debugger;
function addNumbers(a, b) {
    return a + b ;
};
console.log(addNumbers(3, 7));

//4
//debugger;
function areaOfRectangle(length, width) {
    return area = length * width;
};
console.log(areaOfRectangle(3, 8));

//5
//debugger;
function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
};
console.log(perimeterOfRectangle(7, 7));

//6
//debugger;
function volumeOfRectPrism(length, width, height) {
    return length * width * height;
};
console.log(volumeOfRectPrism(3, 2, 3));

//7
//debugger;
function areaOfCircle (r) {
    return Math.PI * r * r;
};
console.log(areaOfCircle(2));

//8
//debugger;
function circumOfCircle(r) {
    return 2 * Math.PI * r;
};
console.log(circumOfCircle(3));

//9
//debugger;
function density(mass, volume) {
    return mass / volume;
};
console.log(density(3, 6));

//10
//debugger;
function speed(distanceCovered, timeTaken) {
    if (timeTaken <= 0 || timeTaken == NaN) {
        return null;
    } else {
        return distanceCovered / timeTaken
    };
};
console.log(speed(100, 7));

//11
//debugger;
function weight(mass, gravity = 9.81) {
    let weight = mass * gravity;
    return weight;
};
console.log(weight(80, 23.1));

//12
//debugger;
function convertCelsiusToFarenheit(oC) {
    let oF = (oC * 9/5) + 32;
    return oF;
};
console.log(convertCelsiusToFarenheit(30));

//13
//debugger;
function calculateBmi(weight, height) {
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Underweight"
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal"
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight"
    } else if (bmi >= 30) {
        return "Obese"
    };
};
console.log(calculateBmi(72, 1.80));

//14
//debugger;
function checkSeason (mes){
    let month = mes.toLowerCase();
    let summer = "Summer";
    let autumn = "Autumn";
    let winter = "Winter";
    let spring = "Spring";
    if (month == "december" || month == "january" || month == "february") {
        return summer;
    } else if (month == "march" || month == "april" || month == "may") {
        return autumn;
    } else if (month == "june" || month == "july" || month == "august") {
        return winter;
    } else if (month == "september" || month == "october" || month == "november") {
        return spring;
    }
};
console.log(checkSeason("DeCember"));

//15
//debugger;
function findMax(n1, n2, n3) {
    let largestArgument = 0;
    if (n1 > largestArgument) {
        largestArgument = n1
    };
    if (n2 > largestArgument) {
        largestArgument = n2
    };
    if (n3 > largestArgument) {
        largestArgument = n3
    };
    return largestArgument;
};
console.log(findMax(32, 16, 45));

//Exercises: Level 2
//1
//debugger;
function solveLinearEquation(a, b, c, x, y) {
    let result = a * x + b * y + c;
    return result;
};
console.log(solveLinearEquation(4, 2, 6, 5, 3));

//2
//debugger;
function solveQuadEquation (a, b, c, x) {
    let result = a * x * 2 + b * x + c;
    return result;
};
console.log(solveQuadEquation(3, 6, 4, 67));

//3
//debugger;
function printArray(arr) {
    for (const element of arr) {
        console.log(element)
    };
};
let testArray = [1, 2, 3, 4, "ads"];
printArray(testArray);

//4
//debugger;
function showDateTime() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;

    console.log(formattedDateTime);
};

showDateTime();

//5
//debugger;
function swapValues(x, y) {
    let temp = x;
    x = y;
    y = temp;
    return {x, y};
};
console.log(swapValues(2, 26));

//6
//debugger;
function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    };
    return reversedArray;
};
let arrayToBeReversed = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseArray(arrayToBeReversed));

//7
//debugger;
function capitalizeArray (arr) {
    const capitalizedArray = [];
    for (const element of arr) {
        capitalizedArray.push(element.toUpperCase());
    }
    return capitalizedArray;
};
let arrayToBeCapitalized = ["pingo", "pimba", "3 en la cara"];
console.log(capitalizeArray(arrayToBeCapitalized));

//8
//debugger;
let preExistentArray = [1, 2];
function addItem(item) {
    preExistentArray.push(item);
    return preExistentArray;
};
console.log(addItem(3));

//9
function removeItem(i) {
    preExistentArray.splice(i, 1)
    return preExistentArray;
};
console.log(removeItem(1));

//10
//debugger;
function sumOfNumbers(n) {
    if (n < 1 || !Number.isInteger(n)) {
        console.log("please provide a positive intenger greater than 0");
        return;
    };
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    };
    return sum;
};
let result = sumOfNumbers(5);
console.log(result);

//11
//debugger;
function sumOfOdds(n) {
    if (n < 1 || !Number.isInteger(n)) {
        console.log("please provide a positive intenger greater than 0");
    };
    let oddsSum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 == !0) {
            oddsSum += i;
        };
    };
    return oddsSum;
};
let oddResult = sumOfOdds(100);
console.log(oddResult);

//12
//debugger;
function sumOfEven(n) {
    if (n < 1 || !Number.isInteger(n)) {
        console.log("please provide a positive intenger greater than 0");
    };
    let evenSum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            evenSum += i;
        };
    };
    let result = evenSum;
    return result;
};
console.log(sumOfEven(100))

//13
//debugger;
function evensAndOdds(n) {
    if (n < 1 || !Number.isInteger(n)) {
        console.log("please provide a positive intenger greater than 0");
    };
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            evenSum += i;
        } else if (i % 2 == !0) {
            oddSum += i;
        };
    };
    let result = `The sum of odds in range adds up to ${oddSum}.\nThe sum of evens in range adds up to ${evenSum}.`;
    return result;
};
console.log(evensAndOdds(100));

//14
//debugger;
function sumAnyNumberOfArguments(...args) {
    let sumOfAllArguments = 0;
    for (let i = 0; i < args.length; i++) {
        sumOfAllArguments += args[i];
    };
    return sumOfAllArguments;
};
console.log(sumAnyNumberOfArguments(3, 5, 11, 7, 4));

//15
//debugger;
function randomUserIp() {
    const part1 = Math.floor(Math.random() * 256);
    const part2 = Math.floor(Math.random() * 256);
    const part3 = Math.floor(Math.random() * 256);
    const part4 = Math.floor(Math.random() * 256);

    const randomizedUserIp = `${part1}.${part2}.${part3}.${part4}`;

    return randomizedUserIp;
};
console.log(randomUserIp());

//16
//debugger;
function generateRandomMacAdress() {
    const hexChars = '0123456789ABCDEF';
    let macAddress = '';
    for (let i = 0; i < 6; i++) {
        const part = `${hexChars.charAt(Math.floor(Math.random() * 16))}${hexChars.charAt(Math.floor(Math.random() * 16))}`;
        macAddress += (i === 5) ? part : `${part}:`;
    };
    return macAddress;
};
const randomAdress = generateRandomMacAdress();
console.log(randomAdress); 

//17
//debugger;
function randomHexaNumberGenerator() {
    const hexChars = '0123456789abcdef';
    let randomHexaNumber = '#';
    for (let i = 0; i < 6; i++) {
        let hexPart = `${hexChars.charAt(Math.floor(Math.random() * 16))}`;
        randomHexaNumber += hexPart;
    };
    return randomHexaNumber;
};
const randomHexNumber = randomHexaNumberGenerator();
console.log(randomHexNumber);

//18
//debugger;
/*
let chachacha = "abcdefghijklmnopqrstuvwxyz";
console.log(chachacha.toUpperCase());
console.log("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".length);
*/
function userIdGenerator() {
    const chachachars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let userId = '';
    for (let i = 0; i < 7; i++) {
        let idPart = `${chachachars.charAt(Math.floor(Math.random() * 62))}`;
        userId += idPart;
    };
    return userId;
};
const randomUserId = userIdGenerator();
console.log(randomUserId);

