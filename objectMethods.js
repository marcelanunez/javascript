/**
 * Object and Methods
 */

const ash = {
  firstName: `Ash`,
  lastName: `Smith`,
  birthYear: 1992,
  family: [`Jane`, `Mark`, `Bob`, `Emily`],
  job: `writer`,
  canVote: true,
  calculateAge() {
    this.age = 2020 - this.birthYear;
  },
};
console.log(ash);
ash.calculateAge();
console.log(ash);
console.log(ash.canVote);
