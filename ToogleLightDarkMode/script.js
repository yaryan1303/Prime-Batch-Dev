const togglebutton = document.getElementById("toggleButton");

const body = document.body;

if (localStorage.getItem("darkmode") === "enabled") {
  body.classList.add("darkmode");
}
togglebutton.addEventListener("click", () => {
  body.classList.toggle("darkmode");

  if (body.classList.contains("darkmode")) {
    localStorage.setItem("darkmode", "enabled");
  } else {
    localStorage.setItem("darkmode", "disabled");
  }
});
