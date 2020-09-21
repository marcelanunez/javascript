/**
 * Function Statements and Expressions
 */

// Function Declaration
// function whatDoyouDo (job, firstName) {};
// Function Expression
const whatDoyouDo = function (job, firstName) {
  switch (job) {
    case `teacher`:
      return `${firstName} teaches kids how to code`;
    case `driver`:
      return `${firstName} drives an uber in London`;
    case `designer`:
      return `${firstName} designs beautiful websites`;
    default:
      return `${firstName} does something else`;
  }
};

console.log(whatDoyouDo(`teacher`, `Ash`));
console.log(whatDoyouDo(`driver`, `Mark`));
console.log(whatDoyouDo(`actor`, `Katie`));
