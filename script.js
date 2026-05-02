const form = document.querySelector(".signup form");

const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmError = document.querySelector("#confirmError");
const nameError = document.querySelector("#nameError");

form.reset();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // clear errs
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmError.textContent = "";
  nameError.textContent = "";

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;
  const confirm = document.querySelector("#confirm").value;

  let isValid = true;

  // NAME
  if (!name) {
    nameError.textContent = "Name is required";
    isValid = false;
  } else if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters";
    isValid = false;
  }

  // EMAIL
  if (!email) {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.includes("@")) {
    emailError.textContent = "Invalid email address";
    isValid = false;
  }

  // PASSWORD
  const hasCapital = /[A-Z]/.test(password);

  if (!password) {
    passwordError.textContent = "Password is required (min 6 chars + 1 capital)";
    isValid = false;
  } else if (password.length < 6 || !hasCapital) {
    passwordError.textContent = "Password must be min 6 characters and contain 1 capital letter";
    isValid = false;
  }

  // CONFIRM PASSWORD
  if (!confirm) {
    confirmError.textContent = "Please confirm your password";
    isValid = false;
  } else if (password !== confirm) {
    confirmError.textContent = "Passwords do not match";
    isValid = false;
  }

  if (!isValid) return;

  form.reset();
});

const fbForm = document.querySelector(".feedback form");

const fbEmailError = document.querySelector("#fbEmailError");
const fbMessageError = document.querySelector("#fbMessageError");

fbForm.reset();

fbForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // clear
  fbEmailError.textContent = "";
  fbMessageError.textContent = "";

  const email = document.querySelector("#fbEmail").value.trim();
  const message = document.querySelector("#fbMessage").value.trim();

  let isValid = true;

  // EMAIL
  if (!email) {
    fbEmailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.includes("@")) {
    fbEmailError.textContent = "Invalid email address";
    isValid = false;
  }

  // MESSAGE
  if (!message) {
    fbMessageError.textContent = "Message cannot be empty";
    isValid = false;
  }

  if (!isValid) return;

  fbMessageError.style.color = "green";
  fbMessageError.textContent = "Feedback sent!";

  fbForm.reset();
});