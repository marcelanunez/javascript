const firstBill = 124;
const secondBill = 48;
const thirdBill = 268;

const tips = [];
const finalBill = [];

function tipCalculator(bill) {
  if (bill < 50) {
    tips.push(bill * 0.2);
    return bill * 0.2;
  }
  if (bill >= 50 && bill < 200) {
    tips.push(bill * 0.15);
    return bill * 0.15;
  }
  tips.push(bill * 0.1);
  return bill * 0.1;
}

finalBill.push(firstBill + tipCalculator(firstBill));
finalBill.push(secondBill + tipCalculator(secondBill));
finalBill.push(thirdBill + tipCalculator(thirdBill));

console.log(tips);
console.log(finalBill);

function tipCalculator2(bill) {
  let percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

console.log(tipCalculator2(300));
