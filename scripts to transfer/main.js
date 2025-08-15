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
  // if popup screen has already been shown, don't display it (set by if closepopup button in local storage)
  if (localStorage.getItem("closePopup")) {
    document.getElementById("popup").style.display = "none";
    document.getElementById("header").style.display = "block";
    document.getElementById("mainContent").style.display = "flex";
  }
};

// display content when close intro popup //
document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
  document.getElementById("header").style.display = "block";
  document.getElementById("mainContent").style.display = "flex";
});
