import "./style.css";

let currentTurn = 0;
const turnDisplay = document.getElementById("turn-number") as HTMLDivElement;
const prevButton = document.getElementById("prev-button") as HTMLButtonElement;
const resetButton = document.getElementById(
  "reset-button"
) as HTMLButtonElement;
const nextButton = document.getElementById("next-button") as HTMLButtonElement;
const customTurnInput = document.getElementById(
  "custom-turn"
) as HTMLInputElement;
const setTurnButton = document.getElementById(
  "set-turn-button"
) as HTMLButtonElement;

function updateTurnDisplay() {
  const formattedTurn = String(currentTurn).padStart(2, "0");
  turnDisplay.textContent = formattedTurn;
  customTurnInput.value = formattedTurn;
}

prevButton.addEventListener("click", () => {
  if (currentTurn > 0) {
    currentTurn--;
    updateTurnDisplay();
  }
});

resetButton.addEventListener("click", () => {
  currentTurn = 0;
  updateTurnDisplay();
});

nextButton.addEventListener("click", () => {
  currentTurn++;
  updateTurnDisplay();
});

setTurnButton.addEventListener("click", () => {
  const newTurn = parseInt(customTurnInput.value);
  if (!isNaN(newTurn)) {
    currentTurn = newTurn;
    updateTurnDisplay();
  }
});

updateTurnDisplay();
