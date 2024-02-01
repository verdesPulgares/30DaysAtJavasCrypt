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
const map = new Map(countries);
console.log(map)