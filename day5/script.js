// console.log(document);
// console.dir(document);
// console.dir(window);

const element = document.getElementsByClassName("heading");

// for (let i = 0; i < element.length; i++) {
//   element[i].style.color = "red";
// }
// console.log(element);

// element[0].style.color = "blue";

// document.children[0].children[1].children[2].children[0].style.color = "red";

const mapping = {
  Invitation: "You are invited for event",
  Invitation1: "You are invited for task",
  Invitation2: "You are invited from college",
  Invitation3: "You are invited for 7 messages",
};

// Select all divs in the document
const divElements = document.querySelectorAll("div");

divElements.forEach((div) => {
  const heading = div.querySelector("h4"); // Select the <h4> inside the div
  const paragraph = div.querySelector("p"); // Select the <p> inside the div

  if (heading && paragraph) {
    const key = heading.innerText.trim(); // Get text and remove spaces
    if (mapping[key]) {
      paragraph.innerText = mapping[key]; // Update <p> content with mapped text
    }
  }
});

// console.log(mapping[ele[0].children[0].innerHTML]);
// for (let i = 0; i < ele.length; i++) {
//   ele[i].children[1].innerHTML = mapping[ele[i].children[0].innerHTML]; //
// }

// document.querySelector("#heading").addEventListener("click", (e) => {
//   console.log(e);
// });
console.log(document);
