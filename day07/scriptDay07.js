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
debugger;
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
