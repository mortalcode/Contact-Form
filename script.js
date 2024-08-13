
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const queryType = document.querySelector('input[name="query-type"]:checked');
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent").checked;

  const formAlert = document.querySelectorAll(".form-alert");

  // First name validation
  if (firstName === "") {
    isValid = false;
    document.querySelector("#first-name + .form-alert").style.display = "block";
    document.getElementById("first-name").style.border = "1px solid var(--Red)";
  } else {
    document.querySelector("#first-name + .form-alert").style.display = "none";
    document.getElementById("first-name").style.border =
      "1px solid var(--Greyone)";
  }

  // Last name validation
  if (lastName === "") {
    isValid = false;
    document.querySelector("#last-name + .form-alert").style.display = "block";
    document.getElementById("last-name").style.border = "1px solid var(--Red)";
  } else {
    document.querySelector("#last-name + .form-alert").style.display = "none";
    document.getElementById("last-name").style.border =
      "1px solid var(--Greyone)";
  }

  // Email validation
  if (!isValidEmail(email)) {
    isValid = false;
    document.querySelector("#email + .form-alert").style.display = "block";
    document.getElementById("email").style.border = "1px solid var(--Red)";
  } else {
    document.querySelector("#email + .form-alert").style.display = "none";
    document.getElementById("email").style.border = "1px solid var(--Greyone)";
  }

  // Query type validation
  if (!queryType) {
    isValid = false;
    document.querySelector("#query-type + .form-alert").style.display = "block";
  } else {
    document.querySelector("#query-type + .form-alert").style.display = "none";
  }

  // Message validation
  if (message === "") {
    isValid = false;
    document.querySelector("#message + .form-alert").style.display = "block";
    document.getElementById("message").style.border = "1px solid var(--Red)";
  } else {
    document.querySelector("#message + .form-alert").style.display = "none";
    document.getElementById("message").style.border =
      "1px solid var(--Greyone)";
  }

  // Consent validation
  if (!consent) {
    isValid = false;
    formAlert[5].classList.add("form-error");
  } else {
    formAlert[5].classList.remove("form-error");
  }

  // If the form is valid, show the success message
  if (isValid) {
    successMessage.classList.add("active");
    form.reset();
  }
});

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
