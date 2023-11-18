// getting current date //
let currentDate = new Date().toLocaleString("default", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
// date showing on page //
const dateOnPage = document.getElementById("date");
dateOnPage.textContent = currentDate;

// buttons going green when clicked//
const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    button.clicked = true;
    if (button.class !== ignore) {
      button.style.backgroundColor = "#608B54";
    }
  });
});
