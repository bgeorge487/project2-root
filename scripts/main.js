/**
 * Global Variables
 */

//Source code: https://www.youtube.com/watch?v=AnmwHjpEhtA
const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector("#display_turn");
const startBtn = document.querySelector("startBtn");
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]; //end winConditions
let gameBoard = [
    "","","",
    "","","",
    "","",""
]
let computerPlayer = "X";
let playerSymbols = ["X", "O"];
let selection = playerSymbols[Math.random(0,2)];
let currentPlayer = "O";
// let playerTwo = "XX";
let gameRunning = false;

initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));    
    statusText.textContent = `${computerPlayer}'s turn!`;
    gameRunning = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute("cell-index");

    if (gameBoard[cellIndex] != "" || !gameRunning){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index){
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
} 

function changePlayer() {
    
    currentPlayer = (currentPlayer == "O") ? "XX" : "O";
    statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = gameBoard[condition[0]];
        const cellB = gameBoard[condition[1]];
        const cellC = gameBoard[condition[2]];

        if(cellA == "" || cellB =="" || cellC == "") {
            continue;
        }
        if(cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    } //end for loop

    if(roundWon) {
        statusText.textContent = `${currentPlayer} won!`;
        gameRunning = false;
    } else if(!gameBoard.includes("")) {
        statusText.textContent = "Draw!";
    } else {
        changePlayer();
    }
    startBtn.innerHTML = "Restart Game?";
} //end checkWinner

function restartGame() {
    gameBoard = [
        "","","",
        "","","",
        "","",""
    ]
    statusText.textContent ="Start the game to play!";
    cells.forEach(cell => cell.textContent = "")
    gameRunning = true
}


 /**
 * Timer Functionality
 */









