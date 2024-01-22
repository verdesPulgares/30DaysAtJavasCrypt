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
//debugger;
const personAccount = {
  firstName: 'Fulano',
  lastName: 'de Tales',
  incomes: {incomeA: 100, incomeB: 200, incomeC: 300, incomed: 1000},
  expenses: {expenseA: 35, expense2: 250, expenseC: 100},
  totalIncome: function() {
    let totalIncome = 0;
    for(const income in this.incomes) {
      const incomeX = personAccount.incomes[income]; //aca esta la cuestion
      totalIncome += incomeX
    }
    return totalIncome
  },
  totalExpense: function() {
    let totalExpenses = 0;
    for (const expense in this.expenses) {
      const expenseX = personAccount.expenses[expense];
      totalExpenses += expenseX
    }
    return totalExpenses;
  },
  accountInfo: function() {
    return `My name is ${personAccount.firstName} ${personAccount.lastName} and im a promising software developer`;
  },
  
  addIncome: function(key, value) {
    personAccount.incomes[key] = value //gotta add this to the Object
    return personAccount.incomes
  },
  addExpense: function(key, value) {
    personAccount.expenses[key] = value
    return personAccount.expenses
  },
  accountBalance: function() {
    let totalIncomes = this.totalIncome();
    let totalExpenses = this.totalExpense();
    return totalIncomes - totalExpenses
  }
};

console.log(personAccount.totalIncome());
console.log(personAccount.incomes.incomeA);
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());
console.log(personAccount.accountInfo())
//debugger;
console.log(personAccount.addIncome('incomeD', 400))
console.log(personAccount.addExpense('expenseZ', 683))
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountBalance())

//02
const usersCollection = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
];
//debugger;
//debugger
function randomIdGenerator() {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = '';
  for (let i = 0; i <= 5; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length)
    randomId += characters.charAt(randomIndex);
  }
  return randomId;
};

function showDateTime() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;

  return formattedDateTime;
};


function userSignUp(userName, email, password) {
  const providedEmail = email;
  const newUSer = {
    _id: randomIdGenerator(),
    username: userName,
    email: email,
    password: password,
    createdAt: showDateTime(),
    isLoggedIn: false
  };
//debugger;
  for (const email in usersCollection.user) {
    if (providedEmail == this.user.email) {
      return `There is an account in existance linked to that email. Please verify.`
    } 
  };
  newUSer.isLoggedIn = true
  usersCollection.newUser = Object(newUSer);
  return usersCollection;
};

console.log(userSignUp('pimba', 'martha@martha.com', 'chichang4'))
    

    /*
    addIncome: function(key, value) {
      personAccount.incomes[key] = value //gotta add this to the Object
      return personAccount.incomes
  }

*/



/*{
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  }
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