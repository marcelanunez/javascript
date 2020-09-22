/**
 * Loops and Iteration
 
// for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

const liv = [`Liv`, `Dunham`, 1990, `detective`, false];

for (let i = 0; i < liv.length; i++) {
  console.log(liv[i]);
}

let i = 0;
while (i < liv.length) {
  console.log(liv[i]);
  i++;
}
*/

// continue and break statements
const liv = [`Liv`, `Dunham`, 1990, `detective`, false, `blue`];

for (let i = 0; i < liv.length; i++) {
  if (typeof liv[i] !== `string`) continue;
  console.log(liv[i]);
}

for (let i = 0; i < liv.length; i++) {
  if (typeof liv[i] !== `string`) break;
  console.log(liv[i]);
}

console.log(`-----------------------`);
for (let i = liv.length - 1; i >= 0; i--) {
  console.log(liv[i]);
}
