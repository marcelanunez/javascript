const markMass = 52;
const johnMass = 61;
const markHeight = 1.8;
const johnHeight = 1.7;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI);
console.log(johnBMI);

const markBMIisGreaterThanJohns = markBMI > johnBMI;

console.log(`Is Mark's BMI higher than John's ${markBMIisGreaterThanJohns}`);
