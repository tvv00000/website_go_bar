const form = document.querySelector(".signup form");

if (form) {
  const emailError = document.querySelector("#emailError");
  const passwordError = document.querySelector("#passwordError");
  const confirmError = document.querySelector("#confirmError");
  const nameError = document.querySelector("#nameError");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    nameError.textContent = "";

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const confirm = document.querySelector("#confirm").value;

    let isValid = true;

    if (!name) {
      nameError.textContent = "Name is required";
      isValid = false;
    } else if (name.length < 3) {
      nameError.textContent = "Name must be at least 3 characters";
      isValid = false;
    }

    if (!email) {
      emailError.textContent = "Email is required";
      isValid = false;
    } else if (!email.includes("@")) {
      emailError.textContent = "Invalid email address";
      isValid = false;
    }

    const hasCapital = /[A-Z]/.test(password);

    if (!password) {
      passwordError.textContent = "Password is required";
      isValid = false;
    } else if (password.length < 6 || !hasCapital) {
      passwordError.textContent = "Password must be min 6 chars + 1 capital";
      isValid = false;
    }

    if (!confirm) {
      confirmError.textContent = "Please confirm password";
      isValid = false;
    } else if (password !== confirm) {
      confirmError.textContent = "Passwords do not match";
      isValid = false;
    }

    if (!isValid) return;

    confirmError.style.color = "green";
    confirmError.textContent = "Account created";

    form.reset();
  });
}