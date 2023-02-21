const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#fName");
const firstNameError = document.querySelector("#fNameError");
const lastName = document.querySelector("#lName");
const lastNameError = document.querySelector("#lNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(lastName.value, 3) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  // if (firstName.value.trim().length > 0) {
  //     firstNameError.style.display = "none";
  // } else {
  //     firstNameError.style.display = "block";
  // }

  // if (lastName.value.trim().length > 3) {
  //     lastNameError.style.display = "none";
  // } else {
  //     lastNameError.style.display = "block";
  // }

  console.log("hello");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function validateForm(text) {
  alert(text);
}
