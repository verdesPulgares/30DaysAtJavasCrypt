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
    for (let i = 0; i <= 5; i++) {
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



