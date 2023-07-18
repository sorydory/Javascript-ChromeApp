const termBox = document.querySelector("#term-box");
const guessBox = document.querySelector("#guess-box");
const button = document.querySelector("#button");
const guestChose = document.querySelector("#guestChose");
const machineChose = document.querySelector("#machineChose");
const result = document.querySelector("#result");

function play(event) {
  event.preventDefault();
  let maxNum = termBox.value;
  let guessNum = guessBox.value;

  if (maxNum != "" && guessNum != "") {
    let randomNum = Math.floor(Math.random() * maxNum);
    guestChose.innerText = guessNum;
    machineChose.innerText = randomNum;
    if (guessNum == randomNum) {
      // win
      result.classList.remove("hidden");
      result.innerText = " You won!";
    } else {
      // lose
      result.classList.remove("hidden");
      result.innerText = " You lost! ";
    }
  }
}

button.addEventListener("click", play);
