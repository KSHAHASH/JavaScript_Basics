'use strict';

// FUNCTIONS

function logger() {
  console.log(`my name is shahash`);
}
logger();

function fruitProcessor(firstValue, secondValue) {
  const juice = `There are ${firstValue} apples and ${secondValue} oranges`;
  return juice;
}

const result = fruitProcessor(4, 5);
console.log(result);

// Function declaration
const age1 = calcAge1(1996); // you can call function before declare it in function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(age1);

// Function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1996);
console.log(age2);

// Arrow Function
const calcAge4 = (birthYear) => 2023 - birthYear;
const age4 = calcAge4(1934);
// console.log(calcAge4(1934))
console.log(age4);

// function calling function
const calcRealAge = (a) => {
  const realAge = calcAge4(a) + 1; // calling above function and storing in a variable
  return realAge; // returning the value as well
};

console.log(calcRealAge(1996));

const helloWorld = () => console.log(`Hello World`);
const createHelloWorld = () => {
  return helloWorld();
};

const res = createHelloWorld();
console.log(res);

const calcAverage = (firstScore, secondScore, thirdScore) => {
  const averageScore = firstScore + secondScore + thirdScore / 3;
  return averageScore;
};

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else console.log(`no one wins`);
};
checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);

// arrays
const pandawife = 'meow';
const animalsName = [pandawife, 'panda', 'bees', 'tiger', 'girrage'];
console.log(animalsName);
console.log(animalsName[0]);
console.log(animalsName.length); // gives the total number of elements in an array
console.log(animalsName[animalsName.length - 1]); // to get the last value in an array
animalsName[0] = 'tigress'; // to mutate the array, but we cannot mutate the whole array
// animalsName= [1,3.5,7,8]; we cannot mutate the array in this manner
console.log(animalsName);

// another way of writing array with the Array function
const names = new Array('panda', 'elephant');
console.log(names);

// Function call inside an array
const ages = function (years) {
  const resultAge = 2023 - years;
  return resultAge;
};

const values = [1996, 2003, 1995, 1997];
console.log(values[values.length - 1]);
const value1 = ages(values[0]);
console.log(value1);
const array2 = [
  ages(values[0]),
  ages(values[1]),
  ages(values[values.length - 1]),
];
console.log(array2);

// Basic Array operation

const friends = ['shahsh', 'kandel', 'ram', 'shah', 'poojan'];
console.log(friends);
console.log(friends.push('hari')); // this gives the length
console.log(friends); // gives an array
friends.unshift('deepak'); // add elements at the begining of an array
console.log(friends);
const popped = friends.pop(); // pop function is used to remove the last element
console.log(friends);
console.log(friends.pop()); // this shows the last element of an array
console.log(popped); // this shows the element that was popped out
console.log(friends);
friends.shift(); // to remove the elements at the beginning of an array
console.log(friends);
console.log(friends.shift()); //shows the element that was popped at begginning)
console.log(friends);
console.log(friends.indexOf('shah')); // shows the index of shah
console.log(friends.indexOf(friends.length));
console.log(friends.includes('shahash'));

const calcTip = function (bill) {
  let tip;
  console.log(tip);
  if (bill >= 50 && bill <= 300) {
    tip = 0.15 * bill;
    console.log(tip);
    return tip;
  } else {
    tip = 0.2 * bill;
    console.log(tip);
    return tip;
  }
};
const resultFirst = calcTip(100);
console.log(resultFirst);

// Adding two arrays
const arr = [1, 3, 4, 5];
const arr2 = [3, 6, 7, 8];
console.log(arr[0] + arr2[0]);

const day = 'monday';
switch (day) {
  case 'tuesday':
    console.log('Hello');
    break;

  case 'monay':
    console.log('wow');
    break;

  default:
    console.log('hawa');
}

//OBJECTS IN JAVASCRIPT

const jonas = {
  firstName: 'shahash',
  lastName: 'Kandel',
  birthYear: 1991,
  job: 'student',
  friends: ['jay', 'kumar', 'hari'],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear; // creating age property like jonas.age inside the object
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} - year old ${
      this.job
    }, anbd he has
        ${this.hasDriversLicense ? 'a' : 'no'} driversLicense`;
  },
};
console.log(jonas.calcAge());
console.log(jonas.firstName); // to access the property with dot notation
console.log(jonas['firstName']); // accessing property with string notation
// const interestedIn = prompt("what do you want to know about shahash")
// console.log(interestedIn);
// console.log(jonas.interestedIn)// it will be undefined even if the property of object exists
// console.log(jonas[interestedIn]) // we would be able to access if the property exists in the object

// adding properties in the object
jonas.location = 'Nepal';
jonas['property'] = 'house';
console.log(jonas);

console.log(`My name is ${jonas.firstName} and I have ${jonas.friends.length} friends and 
${jonas.friends[0]} is my best friend`);
console.log(jonas.calcAge());

console.log(jonas.getSummary());

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.result = this.mass / (this.height * this.height);
    return this.result;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.result = this.mass / (this.height * this.height);
    return this.result;
  },
};
console.log(john.calcBMI());
console.log(mark.calcBMI());
console.log();

//LOOP
for (let i = 0; i < 10; i++) {
  console.log(`I played soccer ${i} time a day`);
}

// pushing the values in an empty array
const years = [1991, 2007, 1969, 2020];
const agess = [];

for (let i = 0; i < years.length; i++) {
  let result = 2037 - years[i];
  // agess[i] = result
  agess.push(result);
}

console.log(agess);

// while loop
let i = 0;
while (i < 5) {
  console.log(`hey it's me shahash calling ${i}`);
  i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`dice is 6 finally so loop ends`);
  }
}
let x = 3;
if (x === 3) console.log('shahsh');
console.log('shahashkandel');