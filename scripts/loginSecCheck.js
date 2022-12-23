// show/hide password
const passViewLog = document.querySelectorAll(".loginEye")[0];
const passViewReg = document.querySelectorAll(".loginEye")[1];
let passwordInput = document.querySelector(".loginPasswordInput");
let passwordInputReg = document.querySelector(".loginPasswordInputReg");

passViewLog.addEventListener("mousedown", () => {
  passwordInput.type = "text";
});

passViewLog.addEventListener("mouseup", () => {
  passwordInput.type = "password";
});

passViewLog.addEventListener("touchstart", () => {
  passwordInput.type = "text";
});

passViewLog.addEventListener("touchcancel", () => {
  passwordInput.type = "password";
});

passViewReg.addEventListener("mousedown", () => {
  passwordInputReg.type = "text";
});

passViewReg.addEventListener("mouseup", () => {
  passwordInputReg.type = "password";
});

passViewReg.addEventListener("touchstart", () => {
  passwordInputReg.type = "text";
});

passViewReg.addEventListener("touchcancel", () => {
  passwordInputReg.type = "password";
});

// check the password
let form = document.querySelectorAll("form")[1];

console.log(form);

let numberSecurityCheck;
form.passwordReg.addEventListener("keyup", (e) => {
  if (e.target.value) {
    let ep = 0;
    ep += /[a-z]/.test(e.target.value) ? 1 : 0;
    ep += /[A-Z]/.test(e.target.value) ? 1 : 0;
    ep += /[0-9]/.test(e.target.value) ? 1 : 0;
    ep += /[\W]/.test(e.target.value) ? 1 : 0;
    ep += e.target.value.length >= 8 ? 1 : 0;

    if (ep === 5) {
      passwordInputReg.style["border-color"] = "green";
      passwordInputReg.style["background-color"] = "#c0fdb7";
    } else {
      passwordInputReg.style["border-color"] = "red";
      passwordInputReg.style["background-color"] = "#fdb7b7";
    }
  }
});
