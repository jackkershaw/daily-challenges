// getting current date //
let currentDate = new Date().toLocaleString("default", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// date showing on page //
const dateOnPage = document.getElementById("date");
dateOnPage.textContent = currentDate;

// getting all buttons //
const buttons = document.querySelectorAll("button");

// buttons going green when clicked and set local storage to button id and today's date//
buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    if (button.id !== "reset") {
      localStorage.setItem(button.id, currentDate);
    }
    if (!button.classList.contains("noColorChange")) {
      button.style.backgroundColor = "#608B54";
    }
  });
});

// reset button and reset local storage for button based on id//
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  buttons.forEach(function (button) {
    localStorage.removeItem(button.id);
    if (!button.classList.contains("noColorChange")) {
      button.style.backgroundColor = "#3a3a3c";
    }
  });
});

// checking if button has been clicked today on page load //
window.onload = function () {
  buttons.forEach(function (button) {
    let storedDate = localStorage.getItem(button.id);
    if (storedDate === currentDate) {
      if (!button.classList.contains("noColorChange")) {
        button.style.backgroundColor = "#608B54";
      }
    }
  });
};
