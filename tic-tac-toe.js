let gameState = Array(9).fill(null); // Array to store the state of each cell
let currentPlayer = 'X'; // 'X' is the human player, 'O' is the bot
let gameActive = true; // Flag to keep the game active

// Possible winning combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// Function to handle human move
function makeMove(index) {
    if (!gameActive || gameState[index] !== null) return; // Check if cell is empty and game is active
    
    gameState[index] = currentPlayer;
    document.getElementById(`cell-${index}`).textContent = currentPlayer;

    if (checkWin(currentPlayer)) {
        displayMessage("Baby, You were just Lucky!");
        endGame();
        return;
    } else if (gameState.every(cell => cell !== null)) {
        displayMessage("It's a Draw!");
        endGame();
        return;
    }

    currentPlayer = 'O'; // Switch to bot
    botMove();
}

// Function for bot's intelligent move
function botMove() {
    if (!gameActive) return;

    let bestScore = -Infinity;
    let bestMove;

    for (let i = 0; i < gameState.length; i++) {
        if (gameState[i] === null) {
            gameState[i] = 'O';
            let score = minimax(gameState, 0, false);
            gameState[i] = null;

            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    gameState[bestMove] = 'O';
    document.getElementById(`cell-${bestMove}`).textContent = 'O';

    if (checkWin('O')) {
        displayMessage("Haha Loser!");
        endGame();
    } else if (gameState.every(cell => cell !== null)) {
        displayMessage("It's a Draw!");
        endGame();
    } else {
        currentPlayer = 'X';
    }
}

// Minimax algorithm for the bot's optimal moves
function minimax(board, depth, isMaximizing) {
    if (checkWin('O')) return 10 - depth;
    if (checkWin('X')) return depth - 10;
    if (board.every(cell => cell !== null)) return 0;

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === null) {
                board[i] = 'O';
                let score = minimax(board, depth + 1, false);
                board[i] = null;
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === null) {
                board[i] = 'X';
                let score = minimax(board, depth + 1, true);
                board[i] = null;
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

// Check for a win
function checkWin(player) {
    return winningCombinations.some(combination => 
        combination.every(index => gameState[index] === player)
    );
}

// Display message
function displayMessage(message) {
    document.getElementById("message").textContent = message;
}

// End the game
function endGame() {
    gameActive = false;
}

// Reset the game
function resetGame() {
    gameState = Array(9).fill(null);
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById("message").textContent = '';
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}
