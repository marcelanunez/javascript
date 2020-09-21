const Root = {
  fullName: `Root Groves`,
  mass: 198,
  height: 1.67,
  calculateBMI() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const Shaw = {
  fullName: `Sameen Shaw`,
  mass: 167,
  height: 1.42,
  calculateBMI() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (Root.calculateBMI() > Shaw.calculateBMI()) {
  console.log(`${Root.fullName} has higher BMI, which is ${Root.bmi}`);
} else if (Shaw.bmi > Root.bmi) {
  console.log(`${Shaw.fullName} has higher BMI, which is ${Shaw.bmi}`);
} else {
  console.log(
    `Both ${Shaw.fullName} with ${Shaw.bmi} and ${Root.fullName} with ${Root.bmi} have the same BMI`
  );
}
