/**
 * Hoisting
 */
calculateAge(1990);

function calculateAge(year) {
  console.log(2020 - year);
}

const retirement = function (year) {
  console.log(65 - (2020 - year));
};

retirement(1990);

// variables

console.log(age);
var age = 23;

function foo() {
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
