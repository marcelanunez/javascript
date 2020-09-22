const johnsFamily = {
  fullName: `John S`,
  bills: [124, 48, 268, 180, 42],
  calculateTips() {
    this.tips = [];
    this.fullBill = [];

    for (let i = 0; i < this.bills.length; i++) {
      let tipAmount = 0;

      if (this.bills[i] < 50) {
        tipAmount = 0.2;
      } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
        tipAmount = 0.15;
      } else {
        tipAmount = 0.1;
      }
      this.tips.push(this.bills[i] * tipAmount);
      this.fullBill.push(this.bills[i] + tipAmount * this.bills[i]);
    }
  },
};

johnsFamily.calculateTips();

const markFamily = {
  fullName: `Mark R`,
  bills: [77, 5, 110, 45],
  calculateTips() {
    this.tips = [];
    this.fullBill = [];

    for (let i = 0; i < this.bills.length; i++) {
      let tipAmount = 0;

      if (this.bills[i] < 100) {
        tipAmount = 0.2;
      } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
        tipAmount = 0.1;
      } else {
        tipAmount = 0.25;
      }
      this.tips.push(this.bills[i] * tipAmount);
      this.fullBill.push(this.bills[i] + tipAmount * this.bills[i]);
    }
  },
};

markFamily.calculateTips();
// console.log(marksbills, johnBills);

function calculateTipsForHolidays(tips) {
  let averageOfTips = 0;
  console.log(tips);

  for (let i = 0; i < tips.length; i++) {
    averageOfTips += tips[i];
    console.log(averageOfTips);
  }
  return averageOfTips / tips.length;
}

var mark = calculateTipsForHolidays(markFamily.tips);
var john = calculateTipsForHolidays(johnsFamily.tips);

if (john > mark) {
  console.log(`John's family tipped more than Mark's family with ${john}`);
} else if (mark > john) {
  console.log(`Mark's family tipped more than John's family with ${mark}`);
} else {
  console.log(`Both families pay the same`);
}
