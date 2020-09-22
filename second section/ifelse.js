/**
 * If / else statements
 */

const firstName = "John";
const civilStatus = "single";

if (civilStatus === "married") {
  console.log(`${firstName} is married!`);
} else {
  console.log(`${firstName} is not married`);
}

const isMarried = true;
if (isMarried) {
  console.log(`${firstName} is married!`);
} else {
  console.log(`${firstName} is not married`);
}

const markMass = 52;
const johnMass = 61;
const markHeight = 1.8;
const johnHeight = 1.98;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI);
console.log(johnBMI);

if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}
