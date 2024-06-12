import validator from "validator";
import isEmail from "validator/lib/isEmail";
import "./typeScales.css";

const d = new Date().getFullYear();
document.getElementById("year").textContent = d;

const form = document.getElementById("form");
const formInput = document.getElementById("emailInput");
const emailStatus = document.querySelector(".form__label");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validator.isEmail(formInput.value)) {
    emailStatus.textContent = "Please enter a valid email";
    emailStatus.classList.add("status-error");
    emailStatus.classList.remove("status-success");
  } else {
    emailStatus.textContent = "Success! Please check your inbox.";
    emailStatus.classList.remove("status-error");
    emailStatus.classList.add("status-success");
  }
});
