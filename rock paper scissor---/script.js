let computer = document.querySelector(".computer");
let player = document.querySelector(".player");

let cp = document.querySelector("computerScore");
let pp = document.querySelector("playerScore");

let options = document.querySelectorAll(".btns button");

options.forEach((option) => {
  option.addEventListener(
    "click",
    () => {
      computer.classList.add(".shakeComputer");
      player.classList.add(".shakePlayer");
    }
  );
});
