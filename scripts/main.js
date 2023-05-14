// getting current date and time //
const currentDateTime = new Date().toLocaleString("en-GB", {
  timeZone: "Europe/London",
});

// date and time showing on page //
const dateOnPage = document.getElementById("date");
dateOnPage.textContent = currentDateTime;

// buttons going green when clicked//
const buttons = document.querySelectorAll("button");
buttons.forEach(function buttonClicked(button) {
  button.addEventListener("click", () => {
    button.style.backgroundColor = "#bcc9bb";
    localStorage.buttonStyle.setItem(button.style.backgroundColor);
  });
});

// change button colour back to red if new day //
let storedDate = localStorage.getItem("lastVisitedDate");
if (
  storedDate !== currentDateTime ||
  storedDate !== currentDateTime.toDateString()
) {
  localStorage.setItem("lastVisitedDate", currentDateTime);
  button.style.backgroundColor = "#e05949";
}
