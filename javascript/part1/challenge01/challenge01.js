
const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;


const bmiMark1 = massMark1 / (heightMark1 * heightMark1);
const bmiJohn1 = massJohn1 / (heightJohn1 ** 2); 


const markHigherBMI1 = bmiMark1 > bmiJohn1;

console.log("--- DATA 1 ---");
console.log("Mark BMI:", bmiMark1.toFixed(2));
console.log("John BMI:", bmiJohn1.toFixed(2));
console.log("Mark has higher BMI than John:", markHigherBMI1);


// --- TEST DATA 2 ---
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const bmiMark2 = massMark2 / (heightMark2 * heightMark2);
const bmiJohn2 = massJohn2 / (heightJohn2 ** 2);

const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log("\n--- DATA 2 ---");
console.log("Mark BMI:", bmiMark2.toFixed(2));
console.log("John BMI:", bmiJohn2.toFixed(2));
console.log("Mark has higher BMI than John:", markHigherBMI2);