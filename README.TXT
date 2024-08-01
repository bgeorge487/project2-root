The requirements are as follows from the D2L website:

REQUIREMENTS

PROGRAM REQUIREMENTS


5.	Your program should allow a user to quit the current game and start a new game (“Start/Restart”)

6.	Your program should allow the user to select one of two radio buttons:
a.	Player v Player
b.	Player v Computer

7.	If the game is a “Player v Computer”, the Player always gets X and the Computer always gets the O symbol, 
but who moves first depends on the randomization just as it would if it was Player v Player

8.	The AI isn’t really all that intelligent. The Computer simply looks for an open spot on the board and randomly selects one (again, using Math.random.)  
Again, the spot must be open – unoccupied – you must NOT write over a symbol if one already exists in a particular spot.



function numberOfPlayers() {
  if (document.getElementById("single_player").checked) {
    gameMode = "singlePlayer";
    computerPlayer = "O";
    currentPlayer = Math.random() < 0.5 ? computerPlayer : playerOne;
  } else if (document.getElementById("two_player").checked) {
    gameMode = "multiplayer";
    currentPlayer = Math.random() < 0.5 ? playerOne : playerTwo;
  }
  initializeGame();
}

function computerLogic() {
  if (gameMode !== "singlePlayer" || !gameRunning) return;

  let emptyCells = gameBoard.reduce((acc, cell, index) => {
    if (cell === "") acc.push(index);
    return acc;
  }, []);

  if (emptyCells.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const   
 cellIndex = emptyCells[randomIndex];   

    updateCell(cells[cellIndex], cellIndex);
    checkWinner();
  }
}