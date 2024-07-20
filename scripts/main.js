/**
 * Global Variables
 */

//Source code: https://www.youtube.com/watch?v=AnmwHjpEhtA
//Game variables
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#display_turn");
const startBtn = document.querySelector("#startBtn");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]; //end winConditions
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let computerPlayer = "O";
let selection = 0;
let currentPlayer = "";
let playerOne = "X";
let playerTwo = "O";
let gameRunning = false;

//Timer variables
let timer = null;
let timerStarted = false;
let timerSpan = document.querySelector("#timer-span"); //the span holding the timer button and span
let timerButton = document.querySelector("#timerBtn"); //the button that starts/stops the timer
let secondsCount = 0;

initializeGame();

function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  timerButton.addEventListener("click", handleTimerButton);
  statusText.textContent = `${computerPlayer}'s turn`;
  gameRunning = true;
} //end initializeGame

function numberOfPlayers() {
  if (document.getElementById("single_player").checked) {
    computerLogic;
  } else if (document.getElementById("two_player").checked) {
    initializeGame;
  }
} //end numberOfPlayers

function computerLogic() {
  if (!gameRunning) {
    switch (Math.random(0, 2)) {
      case 0:
        currentPlayer = computerPlayer;
        break;
      case 1:
        currentPlayer = playerOne;
    } //end switch case
  }

  randomIndex = Math.random(0, gameBoard.length + 1);
  if (currentPlayer == computerPlayer && gameBoard[randomIndex] == "") {
    updateCell(this, randomIndex);
    checkWinner();
  }
} //end computerLogic

function assignTurns() {
  switch (Math.random(0, 2)) {
    case 0:
      currentPlayer = playerOne;
      break;
    case 1:
      currentPlayer = playerTwo;
      break;
  }
} //end assignTurns

function cellClicked() {
  const cellIndex = this.getAttribute("cell-index");

  if (gameBoard[cellIndex] != "" || !gameRunning) {
    return;
  }

  updateCell(this, cellIndex);
  checkWinner();
} //end cellClicked

function updateCell(cell, index) {
  gameBoard[index] = currentPlayer;
  cell.textContent = currentPlayer;
} //end updateCell

function changePlayer() {
  currentPlayer = currentPlayer == playerTwo ? playerOne : playerTwo;
  statusText.textContent = `${currentPlayer}'s turn`;
} //end changePlayer

function checkWinner() {
  let roundWon = false;
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = gameBoard[condition[0]];
    const cellB = gameBoard[condition[1]];
    const cellC = gameBoard[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  } //end for loop

  if (roundWon) {
    statusText.textContent = `${currentPlayer} won!`;
    startBtn.innerHTML = "Restart Game?";
    gameRunning = false;
  } else if (!gameBoard.includes("")) {
    statusText.textContent = "Draw!";
  } else {
    changePlayer();
  }
} //end checkWinner

function restartGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = "Start the game to play!";
  cells.forEach((cell) => (cell.textContent = ""));
  gameRunning = true;
} //end restartGame

/**
 * Timer Functionality
 */

function startTimer() {
  timer = setInterval(handleTimer, 1000);
  timerStarted = true;
  timerButton.textContent = "Stop Timer";
} //end startTimer

function stopTimer() {
  clearInterval(timer);
  timerStarted = false;
  timerSpan.textContent = 0;
  secondsCount = 0;
  timerButton.textContent = "Start Timer";
}

function handleTimer() {
  secondsCount++;
  timerSpan.textContent = secondsCount;
} //end handleTimer

function handleTimerButton() {
  timerStarted ? stopTimer() : startTimer();
} //end handleTimerButton
