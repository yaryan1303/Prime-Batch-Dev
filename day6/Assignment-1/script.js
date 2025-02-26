function addItem() {
  let input = document.getElementById("itemInput");
  let value = input.value.trim();
  if (value === "") return;

  let li = document.createElement("li");
  li.innerHTML = `${value} <button onclick="editItem(this)">Edit</button> <button onclick="deleteItem(this)">Delete</button>`;
  document.getElementById("itemList").appendChild(li);
  input.value = "";
}

function editItem(button) {
  let li = button.parentElement;
  console.dir(button.parentElement);
  let newValue = prompt("Edit item:", li.firstChild.textContent.trim());
  if (newValue !== null && newValue.trim() !== "") {
    li.firstChild.textContent = newValue;
  }
}

function deleteItem(button) {
  let li = button.parentElement;
  li.remove();
}
