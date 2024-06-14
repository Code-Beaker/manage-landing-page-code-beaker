import validator from "validator";
import isEmail from "validator/lib/isEmail";
import "./typeScales.css";

// Navigation elements
const navigationToggleButton = document.getElementById("navigationToggle");
const navigationLinks = document.querySelector(".navbar__links");
const toggleIcon = document.getElementById("navigationToggleIcon");

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

// Toggle Navigation Menu
navigationToggleButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("links-show");

  if (navigationLinks.classList.contains("links-show")) {
    toggleIcon.classList.add("bi-x");
    toggleIcon.classList.remove("bi-list");
  } else {
    toggleIcon.classList.remove("bi-x");
    toggleIcon.classList.add("bi-list");
  }
});

// Slides
new Splide(".splide", {
  type: "loop",
  perPage: 3,
  height: "30rem",
  lazyLoad: "true",
  breakpoints: {
    640: {
      height: "20rem",
    },
  },
});
