/**
 * Functions
 */

function calculateAge(birthYear) {
  return 2020 - birthYear;
}

const ageAsh = calculateAge(1990);
const ageClaire = calculateAge(1948);
const ageNick = calculateAge(1969);

console.log(ageAsh, ageClaire, ageNick);

function yearsUntilRetirement(year, firstName) {
  const retirement = 65 - year;
  console.log(`${firstName} retires in ${retirement} years`);
}

yearsUntilRetirement(ageAsh, `Ash`);
yearsUntilRetirement(ageClaire, `Claire`);
yearsUntilRetirement(ageNick, `Nick`);
