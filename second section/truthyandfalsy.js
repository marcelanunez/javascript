/**
 * Truthy and Falsy values and equality operators
 * Falsy: undefined, null, 0, '', NaN
 */

var height = 23;

if (height || height === 0) {
  console.log(`variable is defined`);
} else {
  console.log(`variable has NOT been defined`);
}

//  Equality Operators
if (height === `23`) {
  console.log(`The == operator does type coercion!`);
}
