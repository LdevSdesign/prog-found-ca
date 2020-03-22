// Question 1

var name = "Trond";

// Question 2

var person = {
  name: "Trond",
  age: 33
};

// Question 3

var outOfStock = false;

if (outOfStock === false) {
  console.log("In stock");
} else {
  console.log("Out of stock");
}

// Question 4

var myNumber = [1, 4, 6, 8, 10];

for (var i = 0; i < myNumber.length; i++) {
  console.log(myNumber[i]);
}

// Question 5

for (var i = 15; i <= 25; i++) {
  console.log(i);
}

// Question 6
for (var i = 15; i <= 25; i++)
  if (i === 20) {
    console.log(i);
  }

// Question 7 ----------------- CONT

var myAnimals = [
  {
    name: "Tobias",
    age: 14,
    dog: false
  },
  {
    name: "Theo",
    age: 7,
    dog: true
  }
];

for (var i = 0; i < myAnimals.length; i++) {
  console.log(myAnimals[i].age);
  console.log(myAnimals[i].dog);
}

// Question 8

function whatIDontLike(dontLike) {
  console.log("I don't like: " + dontLike);
}

whatIDontLike("Waking up too early");

// Question 9

function someNumbers(age, day) {
  console.log(day - age);
}

someNumbers(33, 20);

// Question 10

var myNumbers = [];

function addToArray(age) {
  myNumbers.push(age);
}

addToArray(33);

console.log(myNumbers);
