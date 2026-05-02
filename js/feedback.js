const fbForm = document.querySelector(".feedback form");

if (fbForm) {
  const fbEmailError = document.querySelector("#fbEmailError");
  const fbMessageError = document.querySelector("#fbMessageError");

  fbForm.addEventListener("submit", function (e) {
    e.preventDefault();

    fbEmailError.textContent = "";
    fbMessageError.textContent = "";

    const email = document.querySelector("#fbEmail").value.trim();
    const message = document.querySelector("#fbMessage").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (!email) {
      fbEmailError.textContent = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      fbEmailError.textContent = "Invalid email";
      isValid = false;
    }

    if (!message) {
      fbMessageError.textContent = "Message cannot be empty";
      isValid = false;
    }

    if (!isValid) return;

    fbEmailError.style.color = "green";
    fbEmailError.textContent = "Feedback sent!";

    fbForm.reset();
  });
}