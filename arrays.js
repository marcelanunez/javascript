/**
 * Arrays
 */

// Initialize Array
const names = [`Ash`, `Nicole`, `Alex`];
// const years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

// Mutate array Data
names[1] = `Ben`;
console.log(names);

names[names.length] = `Mary`;
console.log(names);

// Different data types
const ash = [`Ash`, `Smith`, 1990, `designer`, false];
ash.push(`blue`);
console.log(ash);
// Adds element to the beginning of the array
ash.unshift(`Ms`);
console.log(ash);

// Removes the last element
ash.pop();
console.log(ash);

// Removes the first element
ash.shift();
console.log(ash);

console.log(ash.indexOf(`teacher`));

const isDesigner =
  ash.indexOf(`designer`) === -1
    ? `Ash is not a designer`
    : `Ash is a designer`;

console.log(isDesigner);
