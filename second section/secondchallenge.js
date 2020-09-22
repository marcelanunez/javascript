const johnTeamScore = 78 + 120 + 103;
const mikeTeamScore = 116 + 94 + 123;
const maryTeamScore = 94 + 134 + 105;

const averageJohnTeam = johnTeamScore / 3;
const averageMikeTeam = mikeTeamScore / 3;
const averageMaryTeam = maryTeamScore / 3;

if (averageJohnTeam > averageMikeTeam && averageJohnTeam > averageMaryTeam) {
  console.log(
    `John's team has the highest average, which is: ${averageJohnTeam} points`
  );
} else if (
  averageMikeTeam > averageJohnTeam &&
  averageMikeTeam > averageMaryTeam
) {
  console.log(
    `Mike's team has the highest average, which is: ${averageMikeTeam} points`
  );
} else if (
  averageMaryTeam > averageJohnTeam &&
  averageMaryTeam > averageMikeTeam
) {
  console.log(
    `Mary's team has the highest average, which is: ${averageMaryTeam} points`
  );
} else {
  console.log(`There is a draw`);
}

console.log(
  `John's team's average is: ${averageJohnTeam}, Mike's team's average is: ${averageMikeTeam} and Mary's team's average is: ${averageMaryTeam}`
);
