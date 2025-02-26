fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    // Store the whole product list in localStorage
    makeUI(data.products); // Show all products on page load

    // Add event listener for search button
    document.getElementById("search-button").addEventListener("click", () => {
      search(data.products);
    });

    // Show search history on page load
    showSearchHistory();
  })
  .catch((error) => console.error("Error fetching products:", error));

// Function to create the product list UI
const makeUI = (products) => {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear existing products

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
      <h3>${product.title}</h3>
      <img src="${product.images[0]}" alt="${product.title}" class="img">
      <p>Price: $${product.price}</p>
      <p>${product.description}</p>
    `;
    productList.appendChild(productDiv);
  });
};

// Store product data in localStorage
const storeData = (products) => {
  let storedProducts = JSON.parse(localStorage.getItem("search")) || [];
  storedProducts.push(...products);
  localStorage.setItem("search", JSON.stringify(products));
};

// Store search history in localStorage
const storeSearchHistory = (searchTerm) => {
  let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
  if (!history.includes(searchTerm)) {
    history.push(searchTerm);
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }
};

// Show search history
const showSearchHistory = () => {
  const historyList = document.getElementById("search-history");
  historyList.innerHTML = "";

  let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
  history.forEach((term) => {
    const item = document.createElement("li");
    item.textContent = term;
    item.addEventListener("click", () => {
      document.getElementById("search-input").value = term;
      document.getElementById("search-button").click();
    });
    historyList.appendChild(item);
  });
};

// Function to search products
const search = (products) => {
  const searchItem = document
    .getElementById("search-input")
    .value.toLowerCase();

  if (searchItem) {
    storeSearchHistory(searchItem);
    showSearchHistory();
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchItem)
  );
  storeData(filteredProducts);

  makeUI(filteredProducts);

  if (filteredProducts.length === 0) {
    document.getElementById("product-list").innerHTML =
      "<p>No products found.</p>";
  }
};
