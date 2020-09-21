/** *******
 * Ternary Operator and Switch Statements
 */

const firstName = "Ash";
const age = 11;

// Ternary Operator
age >= 18
  ? console.log(`${firstName} can vote.`)
  : console.log(`${firstName} cannot vote.`);

const vote = age >= 18 ? "can" : "cannot";
console.log(`${firstName} ${vote} vote`);

/* if (age >= 18){
     var vote = 'can';
 } else {
     var vote = 'cannot';
 } */

// Switch statement

const job = "instructor";

switch (job) {
  case "teacher":
  case "instructor":
    console.log(`${firstName} teaches kids how to code.`);
    break;
  case "driver":
    console.log(`${firstName} drives an uber in Toronto.`);
    break;
  case "designer":
    console.log(`${firstName} designs beautiful websites.`);
    break;
  default:
    console.log(`${firstName} does something else`);
}

const year = 23;

switch (true) {
  case year < 13:
    console.log(`${firstName} is a girl`);
    break;
  case year >= 13 && year < 20:
    console.log(`${firstName} is a teenager`);
    break;
  case year >= 20 && year < 30:
    console.log(`${firstName} is a young woman`);
    break;
  default:
    console.log(`${firstName} is a woman`);
}
