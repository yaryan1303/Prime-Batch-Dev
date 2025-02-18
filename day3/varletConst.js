// const temp = () => {
//   if (true) {
//     var username = "Raj";
//   }
//   console.log(username);
// };

// temp();
// console.log(username);

const sum = (a, b) => {
  let sum = a + b;

  const print10 = (a) => {
    console.log(a + 10 + "This is the inner function)");
  };
  print10(sum);
  return sum;
};

console.log(sum(2, 10));
