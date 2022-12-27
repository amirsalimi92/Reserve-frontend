themeSelector = document.querySelector(".theme");

//get the saved theme
let themeModeFirst = localStorage.getItem("themeModeReserve");
//set the saved theme
if (themeModeFirst === "night") {
  nightTheme();
} else if (themeModeFirst == null || themeModeFirst === "day") {
  localStorage.setItem("themeModeReserve", "day");
}

themeSelector.addEventListener("click", () => {
  nightTheme();
});

function nightTheme() {
  document.querySelector(".navbar").classList.toggle("nightNavbar");
  document.querySelectorAll(".dropdown").forEach((e) => {
    e.classList.toggle("nightDropdown");
  });
  document.querySelector(".content").classList.toggle("night");
  document.querySelector(".profileName").classList.toggle("profileLeftNight");
  document.querySelector(".profileFamily").classList.toggle("profileLeftNight");
  document
    .querySelector(".profilePhoto")
    .classList.toggle("profileTopLeftNight");
  document.querySelectorAll("input").forEach((e) => {
    e.classList.toggle("profileInputNight");
  });
  document.querySelectorAll("select").forEach((e) => {
    e.classList.toggle("profileSelectNight");
  });
  document
    .querySelector(".profileButton > button")
    .classList.toggle("profileButtonNight");

  document.querySelector(".navMenu").classList.toggle("navMenuNight");

  if (localStorage.getItem("themeModeReserve") == "night") {
    localStorage.setItem("themeModeReserve", "day");
  } else if (localStorage.getItem("themeModeReserve") == "day") {
    localStorage.setItem("themeModeReserve", "night");
  }
}
