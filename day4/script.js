//............................
//two separate functions

// const sum = (a, b) => a + b;
// const printPretty = (text) => {
//   console.log(text);
// };
// //calling the functions
// printPretty(sum(2, 3)); //output: 5

// const sum = (a, b, c) => {
//   ans = a + b;
//   c(ans);
// };
// const printPretty = (text) => {
//   console.log(text);
// };

// sum(2, 3, printPretty); //output: 5

// //............................

// const number = [2, 3, 5, 6, 8];
// number.forEach((a) => {
//   console.log(a);
// });

// const getMetaData = () => {
//   const name = prompt("Enter your name:");
//   console.log(name);

//   const numOfSubText = prompt("Enter number of subjects:");
//   const numOfSub = parseInt(numOfSubText);
//   console.log(numOfSub);
//   return numOfSub;
// };

// const getSubjects = (numOfSub) => {
//   const subjects = [];
//   for (let i = 0; i < numOfSub; i++) {
//     const subject = prompt(`Enter subject ${i + 1}:`);
//     const marks = prompt(`Enter marks for ${subject} ${i + 1}:`);
//     subjects.push({ subject, marks });
//   }
//   return subjects;
// };

// const printSubjects = (subjects) => {
//   let totalMarks = 0;
//   console.log("Subjects and marks:");
//   subjects.forEach((subject) => {
//     totalMarks += parseInt(subject.marks);
//     console.log(`${subject.subject.toUpperCase()}: ${subject.marks}`);

//     console.log(totalMarks);
//     return totalMarks;
//   });
// };
// const getPercentage = (marks, numOfSub) => {
//   const percentage = (marks / (numOfSub * 100)) * 100;
//   return percentage;
// };

// const numOfSub = getMetaData();
// const subjects = getSubjects(numOfSub);
// const totalMarks1 = printSubjects(subjects);
// const percentage = getPercentage(totalMarks1, numOfSub);

// console.log(`Total marks: ${totalMarks1}`);
// console.log(`Percentage: ${percentage}%`);

//..........

// getSubjects(getMetaData()).then((subjects) => {
//   printSubjects(subjects);
// });
// const p = prompt("Enter the String to Myultipy");
// let num = prompt("Enter the Number of times to Multiply");

// document.getElementById("demo").innerHTML = p.repeat(num);
let num = [10, 20, 301];

const numarrya = num.map((num) => 3 * num);
console.log(numarrya);
