const obj = {
  name: "aryan",
  age: "12",
};

console.log(obj);

console.log(obj.age);
console.log(obj.name);

obj.college = "ABES";
console.log(obj.college);
console.log(obj);

console.log(obj["name"]);
console.log(obj["age"]);

delete obj.age;
console.log(obj);


obj.name="aryan yadav"
console.log(obj);
