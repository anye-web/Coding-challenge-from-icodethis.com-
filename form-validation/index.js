// Ui Elemens

const formEL = document.getElementById("form");
const usernameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmedPasswordEl = document.getElementById("confirm-password");
const successMessageEl = document.querySelector(".success-message");

formEL.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // Get the values from the input.
  const usernameValue = usernameEl.value.trim();
  const emailValue = emailEl.value.trim();
  const passwordValue = passwordEl.value.trim();
  const confirmedPasswordValue = confirmedPasswordEl.value.trim();

  // Username Validation
  if (usernameValue === "") {
    // Show Eror Message
    // add Error Class

    setErrorFor(usernameEl, "Username cannot be blank");
  } else {
    setSuccessFor(usernameEl);
  }

  // Email validatiion
  if (emailValue === "") {
    setErrorFor(emailEl, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailEl, "Email is not value");
  } else {
    setSuccessFor(emailEl);
  }

  // Password Validation
  if (passwordValue === "") {
    setErrorFor(passwordEl, "Password cannot be blank");
  } else {
    setSuccessFor(passwordEl);
  }

  // Password confirmation Validation
  if (confirmedPasswordValue === "") {
    setErrorFor(confirmedPasswordEl, "Password cannot be blank");
  } else if (confirmedPasswordValue !== passwordValue) {
    setErrorFor(
      confirmedPasswordEl,
      "Password must be thesame as the one above"
    );
  } else {
    setSuccessFor(confirmedPasswordEl);
  }

  // Show success Message
  checkFormControlSuccess();
}

function setErrorFor(input, message) {
  const formControlEl = input.parentElement; // .form-control
  const smallEl = formControlEl.querySelector("small");

  // Add error message to small tag
  smallEl.textContent = message;

  // Add Error class to form control
  formControlEl.classList.add("error");
}

function setSuccessFor(input) {
  const formControlEl = input.parentElement; // .form-control
  formControlEl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// check if all form form control has the class of success
function checkFormControlSuccess() {
  const formControlEl = formEL.querySelectorAll(".form-control");

  formControlEl.forEach((element) =>
    element.classList.contains("success")
      ? successMessageEl.classList.add("show")
      : false
  );
}
