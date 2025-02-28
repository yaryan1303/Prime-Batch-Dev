const getData = (text) => {
  fetch(`https://dummyjson.com/recipes/search?q=${text}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.recipes);
      showCards(data.recipes || []); // Fallback if recipes is undefined
    })
    .catch((error) => console.error("Error fetching data:", error));
};

const main = document.getElementById("cards-container");

const showCards = (recipes) => {
  main.innerHTML = "";
  recipes.forEach((ele) => {
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    newDiv.innerHTML = `
      <h4>${ele.name}</h4>
      <img src="${ele.image}" alt="${ele.name}">
      <p>${ele.cuisine}</p>
    `;
    main.appendChild(newDiv);
  });
};

let timeout = null;
const handleSearch = (e) => {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    getData(e.target.value);
  }, 1000);
};
