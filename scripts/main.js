// getting current date and time //
let currentDateTime = new Date().toLocaleString("en-GB", {
  timeZone: "Europe/London",
});

// date and time showing on page //
const dateOnPage = document.getElementById("date");
dateOnPage.textContent = currentDateTime;

// buttons going green when clicked//
const buttons = document.querySelectorAll("button");
buttons.forEach(function buttonClicked(button) {
  button.addEventListener("click", () => {
    button.style.backgroundColor = "#608B54";
  });
});
