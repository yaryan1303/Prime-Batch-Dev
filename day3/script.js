// function print(a) {
//   console.log(a);
// }

// print("hello world");

// const view = function printText(a) {
//   console.log(a);
// };
// view("hello  are you");

// const view = (a) => {
//   console.log(a);
// };
// view("hello  are you");

//assignment

// function sum(a, b) {
//   let sum = a + b;
//   return sum % 10;
// }

// console.log(sum(2, 10));

// const sum = function (a, b) {
//   let sum = a + b;
//   return sum % 10;
// };
// console.log(sum(2, 10));

const sum = (a, b) => a + (b % 10);
console.log(sum(2, 10));

const sum1 = (...a) => {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
};

console.log(sum1(1, 2, 3, 4, 5));
