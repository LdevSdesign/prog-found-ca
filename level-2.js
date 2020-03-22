// Question 1

for (var i = 15; i <= 25; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Question 2

function logFunction() {
  console.log("I am a Function");
}
var innerFunction = logFunction();

function outerFunction(x) {
  x;
}
outerFunction(innerFunction);
