const passViewLog = document.querySelectorAll(".loginEye")[0];
const passViewReg = document.querySelectorAll(".loginEye")[1];
let passwordInput = document.querySelector(".loginPasswordInput");
let passwordInputReg = document.querySelector(".loginPasswordInputReg");

console.log(passViewReg);
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
