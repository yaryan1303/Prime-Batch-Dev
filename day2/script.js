document.addEventListener("DOMContentLoaded", function () {
  let emailInput = document.getElementById("email");

  emailInput.addEventListener("input", function () {
    let email = emailInput.value;
    console.log("Email:", email);
    console.log("Is valid:", isValidEmail(email));
  });

  function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
