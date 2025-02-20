const arr = [
  { name: "aryan", age: 19, city: "delhi" },
  { name: "Ram", age: 19, city: "mumbai" },
  { name: "Shayam", age: 19, city: "Ghaziabd" },
  { name: "Sundar", age: 19, city: "Jaunpur" },
];

const maindiv = document.getElementById("parent");

arr.forEach((item) => {
  const innerdiv = document.createElement("div");
  innerdiv.classList.add("card");
  innerdiv.innerHTML = `
  <h4>${item.name}</h4>
  <h6>${item.age}</h6>
  <p class="text">${item.city}</p>
  `;

  maindiv.appendChild(innerdiv);
});

const btn = document.getElementById("btn");

btn.addEventListener(
  "click",
  () => {
    const element = document.querySelector("body");
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);

    element.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
  },
  true
);

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  const element = document.querySelector("#parent");

  const children = element.children;
  console.dir(element);

  Array.from(children).forEach((item) => {
    item.style.backgroundColor = changeColor();
  });
});

const changeColor = () => {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  return `rgb(${a}, ${b}, ${c})`;
};

const textElement = document.querySelector(".text");

textElement.addEventListener("click", () => {
  textElement.style.backgroundColor = "red";
  textElement.style.color = "white";
});
