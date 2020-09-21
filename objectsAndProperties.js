/**
 * Object and Properties
 */

const ash = {
  firstName: `Ash`,
  lastName: `Smith`,
  birthYear: 1990,
  family: [`Jane`, `Mark`, `Bob`, `Emily`],
  job: `writer`,
  isMarried: false,
};
console.log(ash.firstName);
console.log(ash.lastName);

const x = `birthYear`;
console.log(ash[x]);

ash.job = `designer`;
console.log(ash);

const jane = new Object();
jane.firstName = `Jane`;
jane.birthYear = 1969;
jane.lastName = `Smith`;
console.log(jane);
