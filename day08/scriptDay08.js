//exercises day 08: level 1
//1
const dog = {};
//2
console.log(dog);
//3
dog.name = "Chamba";
dog.legs = 4;
dog.color = "black with a slash of white"
dog.age = 7
dog.bark = function() {
    return `woof woof`
};
//4
const values = Object.values(dog);
console.log(values);
console.log(dog.bark());
//5
dog.breed = 'PeaceBull';
dog.getDogInfo = function getDogInfo() {
    return `Me llamo ${this.name}, tengo ${this.legs} patas y me gusta hacer ${this.bark()}. Tambien me autopersivo hispanoparlante. Deal with it`
};
console.log(dog.getDogInfo());

//exercises level 2:
//01
//debugger;
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
};

//01
console.log(Object.entries(users));
//debugger;
console.log(users.Paul.skills.length);
function whoHasMoreSkills() {
    let userWithTheMostSkills = null;
    let howManySkillsDoesUserHave = 0;
    for (const userName in users) {
      const user = users[userName];
      if (user.skills.length > howManySkillsDoesUserHave) {
        howManySkillsDoesUserHave = user.skills.length;
        userWithTheMostSkills = userName;
      };
    };
    return `${userWithTheMostSkills} is the Prime and has ${howManySkillsDoesUserHave} skills`;
    };
console.log(whoHasMoreSkills());
//02
//debugger;
function countLoggedInUsers() {
  let loggedInUsersCounter = 0;
  let greaterThan50Counter = 0;
  for (const userName in users) {
    const user = users[userName];
    if (user.isLoggedIn == true) {
      loggedInUsersCounter += 1
    }
    if (user.points >= 50) {
      greaterThan50Counter++
    }
  }
  return `there are ${loggedInUsersCounter} logged in users. and ${greaterThan50Counter} of the total have 50 or more points`;
};
console.log(countLoggedInUsers())

//03
// let mernDev = users.skills has ['MongoDB', 'Express', 'React', 'Node']
//debugger;
function mernDevDetector() {
  let whoAreTheMernDevsArray = [];
  for (const userName in users) {
    const user = users[userName];
    const devSkills = Object.values(user.skills)
    if (devSkills.includes('MongoDB')) {
      if (devSkills.includes('Express')) {
        if (devSkills.includes('React')) {
          if (devSkills.includes('Node')) {
            whoAreTheMernDevsArray.push(userName);
          }
        }
      }
    }    
  }
  return whoAreTheMernDevsArray
};
console.log(mernDevDetector())

//04
//debugger;
function pushMyselfIntoTheObject(){
  const theObjectAndI = Object.assign({}, users);
  theObjectAndI.Elias = {
    email: 'greenThumbs@greenmail.com',
    skills: ['Html', 'CSS', 'Javascript', 'Maximun Effort', 'Unbreaking Resolve', 'Cooking'],
    age: 33,
    isLoggedIn: true, //superTrue
    points: 90000
  };
  return theObjectAndI
}
console.log(pushMyselfIntoTheObject())
//05 and 06
const keys = Object.keys(users);
const valuess = Object.values(users);
const entries = Object.entries(users);
console.log(keys)
console.log(valuess)
console.log(entries)
//07 countries object not available

//Exercises Level 3
//01
const personAccount = {
  firstName: 'Fulano',
  lastName: 'de Tales',
  incomes: {incomeA: 100, incomeB: 200, incomeC: 300},
  expenses: {expenseA: 35, expense2: 250, expenseC: 100},
  totalIncome: function() {
    let totalIncome = 0;
    for(const income of Object.values(personAccount[incomes])) {
      let incomeX = Object.values(incomes.income);
      totalIncome += incomeX
    }
    return totalIncome
  },
  totalExpense: function() {

  },
  accountInfo: function() {
  
  },
  addIncome: function() {

  },
  addExpense: function() {

  },
  accountBalance: function() {
    return incomes -= expenses
  }
};
console.log(personAccount.totalIncome());


/*
console.log(users.Paul.skills.length);
function whoHasMoreSkills() {
    let userWithTheMostSkills = null;
    let howManySkillsDoesUserHave = 0;
    for (const userName in users) {
      const user = users[userName];
      if (user.skills.length > howManySkillsDoesUserHave) {
        howManySkillsDoesUserHave = user.skills.length;
        userWithTheMostSkills = userName;
      };
    };
    return `${userWithTheMostSkills} is the Prime and has ${howManySkillsDoesUserHave} skills`;
    };
console.log(whoHasMoreSkills());


//01
console.log(Object.entries(users));
function printSkills() {
  for (const [userName, skills] of Object.entries(users)) {
    console.log(`${userName} ${JSON.stringify(skills)}`);

  }
};
printSkills();
*/