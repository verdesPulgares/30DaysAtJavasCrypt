console.log("hello, world!");
//01 es: Level 1 Create a closure which has one inner function
function outerFunction() {
    let outerVariable = 0;
    function innerFunction() {
        outerVariable++;
        return outerVariable
    };
    return innerFunction;
};

const innerOuterTest = outerFunction()

console.log(outerFunction); //just test
console.log(outerFunction()); //just test
console.log(innerOuterTest); //just test
console.log(innerOuterTest()); //the real deal

for (let i = 0; i < 5; i++) {
    console.log(innerOuterTest());
};

//02
function outerFunk() {
    let outerVariable = 0;
    function innerPlusOne() {
        let value = 1;
        outerVariable += 1;
        return outerVariable
    };
    function innerPlusTwo() {
        let value = 2
        outerVariable += 2
        return outerVariable
    }
    function innerPlusThree() {
        let value = 3
        outerVariable += value
        return outerVariable
    }
    return {
        innerPlusOne:innerPlusOne(),
        innerPlusTwo:innerPlusTwo(),
        innerPlusThree:innerPlusThree()
    };
};
const innerFunks = outerFunk();


console.log(innerFunks.innerPlusThree);
console.log(innerFunks.innerPlusThree);
console.log(innerFunks.innerPlusThree);
