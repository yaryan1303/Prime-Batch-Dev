const arr = [
  {
    id: "1234",
    email: "aryan@example.com",
    name: "Aryan",
    city: "Delhi",
  },
  {
    id: "1235",
    email: "ram@example.com",
    name: "Ram",
    city: "Mumbai",
  },
  {
    id: "1236",
    email: "shayam@example.com",
    name: "Shayam",
    city: "Ghaziabd",
  },
  {
    id: "1237",
    email: "sundar@example.com",
    name: "Sundar",
    city: "Jaunpur",
  },
];

const maindiv = document.getElementById("parent");

// Function to display cards
const showcard = (data) => {
  maindiv.innerHTML = "";
  data.forEach((item) => {
    const innerdiv = document.createElement("div");
    innerdiv.classList.add("card");
    innerdiv.innerHTML = `
      <div>
        <h4>${item.name}</h4>
        <p class="text">${item.city}</p>
        <div id="btn">
          <button class="button" onclick="deleteCard('${item.email}')">Delete</button>
          <button class="button" onclick="editCard('${item.email}')">Edit</button>
        </div>
      </div>
    `;
    maindiv.appendChild(innerdiv);
  });
};

// Function to delete a card
const deleteCard = (id) => {
  const index = arr.findIndex((ele) => ele.email === id);
  if (index !== -1) {
    const city = arr[index].city;
    arr.splice(index, 1);
    showcard(arr);
    removeCityOptionIfEmpty(city);
  }
};

// Function to edit a card
const editCard = (id) => {
  const index = arr.findIndex((ele) => ele.email === id);
  if (index !== -1) {
    let newName = prompt("Enter new name:", arr[index].name);
    let newCity = prompt("Enter new city:", arr[index].city);

    if (newName) arr[index].name = newName;
    if (newCity && newCity !== arr[index].city) {
      const oldCity = arr[index].city;
      arr[index].city = newCity;
      addcityTosearchOption(newCity);
      removeCityOptionIfEmpty(oldCity);
    }

    showcard(arr);
  }
};

// Function to filter by city
const showFilterelement = () => {
  let selectedValue = document.getElementById("citySelect").value.trim().toLowerCase();
  const filteredArr = arr.filter((ele) => ele.city.toLowerCase() === selectedValue);
  showcard(filteredArr);
};

// Initial display
showcard(arr);

const handleonSubmit = (e) => {
  e.preventDefault();

  const isEmailExist = arr.some((ele) => ele.email === e.target.email.value);

  if (isEmailExist) {
    alert("Email already exists!");
    return;
  }

  const newEntry = {
    id: Date.now().toString(),
    email: e.target.email.value,
    name: e.target.name.value,
    city: e.target.city.value,
  };

  arr.push(newEntry);
  addcityTosearchOption(newEntry.city);
  showcard(arr);
};

const addcityTosearchOption = (city) => {
  const selected = document.getElementById("citySelect");
  let exists = Array.from(selected.options).some(option => option.value.toLowerCase() === city.toLowerCase());

  if (!exists) {
    const option = document.createElement("option");
    option.value = city;
    option.innerText = city;
    selected.appendChild(option);
  }
};

const removeCityOptionIfEmpty = (city) => {
  const cityExists = arr.some((ele) => ele.city.toLowerCase() === city.toLowerCase());
  if (!cityExists) {
    const selected = document.getElementById("citySelect");
    const optionToRemove = Array.from(selected.options).find(option => option.value.toLowerCase() === city.toLowerCase());
    if (optionToRemove) {
      selected.removeChild(optionToRemove);
    }
  }
};
