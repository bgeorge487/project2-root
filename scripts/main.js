/**
 * Global Variables
 */

//Setting the cells to a node list
const cells = document.querySelectorAll('.cell');

//Adding event listener
cells.forEach(cell => {
    cell.addEventListener('click', clickedCell, false);
}); //end event listener

/**
 * Timer Functionality
 */

/**
 * Game Logic 
 */

// const NUM_ROWS = 3;
// const NUM_COLS = 3;

let gameBoard = [
    ['','',''],
    ['','',''],
    ['','','']
]


//Check to see if there is a winner or a tied game
function checkGameState(){
    for (var i = 0; i < gameBoard.length; i++ ) {
        for (var j = 0; j < gameBoard[i].length; j++) {
            var rows = gameBoard[i];
            var cols = gameBoard[j];
            //Placeholder logic. Switch out 'cols' for whatever variable you set the players' symbols to.
            if (rows === cols) {
                //Whichever player that is wins horizontally
                //Again, replace rows with players' variable
            } else if (cols === rows) {
                //Winning vertically
            } else if (cols % 2 && cols === rows) {
                //Winning diagonally
            } else if (cols !== '' && rows !== '') {
                //Cat's game/tie
            }
        }
    }
}

//1. Check to see if the game is one or two player (using the radio buttons in the HTML)
function determineNumOfPlayers(isSinglePlayer) {
    let playerSymbols = ['X','O'];
    let assignSymbol = Math.random(0,2);
    let numberOfPlayers = 1;
    let playerOneSymbol;
    let playerTwoSymbol;
    

    if (isSinglePlayer === true) {
         playerTwoSymbol = playerSymbols[0];
         playerOneSymbol = playerSymbols[1];
    } else {
        playerOneSymbol = playerSymbols[assignSymbol];
        playerTwoSymbol = playerSymbols[assignSymbol];
    }
}

function gameplayLogic(){
//2. Assign either X or O to each player using Math.random()
    //2.1 If it is two player, they must altertnate taking turns
    //2.2 If it is single player the "AI" will always be X and the player will always be O
        //Using Math.random() decide who goes first (just like in two player)
        //Computer moves using Math.random() to determine where to place its symbole IN AN EMPTY SPACE
//3. Record and display the amount of time the game has been played for
//4. Once the game is over:
    //4.1 Determine if there is a winner. Display the winner
    //4.2 Determine if there is NO winner (cat's game)
    //4.3 Stop the timer
//5. After the game state has been decided
    //5.1 Ask the user if they would like to play again (Button should change to 'Restart')
    //5.2 The "Play Again" button should be available only when the game is over (modal?)
    //5.3 Display the outcome of the game (Winner! Loser :( or Tied)

}

/**
 * Start the game on window finished loading
 */

function start(){
    //NYI
}

window.addEventListener('load', start);