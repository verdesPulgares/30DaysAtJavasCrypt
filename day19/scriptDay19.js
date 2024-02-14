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
    function plusOne() {
        outerVariable++;
        return outerVariable
    };
    function minusOne() {
        outerVariable--
        return outerVariable
    }
    function factorize() {
        outerVariable * outerVariable
        return outerVariable
    }
    return {
        plusOne:plusOne(),
        minusOne:minusOne(),
        factorize:factorize()
    }
}
const innerFunks = outerFunk();


console.log(innerFunks.plusOne);
console.log(innerFunks.plusOne);


//03

//debugger;
 function personAccount() {
    let firstName = 'Fulano';
    let lastName = 'de Tales';
    let incomes = {incomeA: 100, incomeB: 200, incomeC: 300, incomed: 1000};
    let expenses = {expenseA: 35, expense2: 250, expenseC: 100};
    function totalIncome() {
      let totalIncomeX = 0;
      for(const income in incomes) {
        const incomeX = incomes[income]; //aca esta la cuestion
        totalIncomeX += incomeX
      }
      return totalIncomeX }
      /*
    };
    function totalExpense() {
      let totalExpenses = 0;
      for (const expense in expenses) {
        const expenseX = expenses[expense];
        totalExpenses += expenseX;
      }
      return totalExpenses;
    };
    function accountInfo() {
      return `My name is ${firstName} ${lastName} and im a promising software developer`;
    };
    
    function addIncome(key, value) {
      incomes[key] = value //gotta add this to the Object
      return incomes;
    };
    function addExpense(key, value) {
      expenses[key] = value
      return expenses;
    };
    function accountBalance () {
      let totalIncomes = totalIncome();
      let totalExpenses = totalExpense();
      let totalTotal = totalIncomes - totalExpenses;
      return totalTotal;
    }; */
    return {
        totalIncome:totalIncome(),
    //    totalExpenses:totalExpense(),
    //    accountInfo:accountInfo(),
    //    addIncome:addIncome(),
    //    addExpense:addExpense(),
    //    accountBalance:accountBalance()
    };
 };
  //debugger;
  const test = personAccount.totalIncome;
//console.log(test);
//console.log(personAccount.totalIncome);
//console.log(personAccount.totalExpense);
//console.log(personAccount.accountInfo);
//console.log(personAccount.addIncome);
//console.log(personAccount.addExpense);
//console.log(personAccount.accountBalance)


function testingOuterFunction() {
  let count = 0;
  function modify(val) {
      count += val;
      console.log(count)
  }
  return {
    increment() {
      modify(1);
    },

    decrement() {
      modify(-1);
    },

    value() {
      modify(0); //this line or `return count` work similar, just that writting it this way allows you to call .value() without console.log-
    },
  };
};
const innerFuncs = testingOuterFunction();

console.log(innerFuncs.value);
