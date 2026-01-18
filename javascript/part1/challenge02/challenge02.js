const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark.toFixed(1)}) is higher than John's (${bmiJohn.toFixed(1)})!`);
} else {
  console.log(`John's BMI (${bmiJohn.toFixed(1)}) is higher than Mark's (${bmiMark.toFixed(1)})!`);
}