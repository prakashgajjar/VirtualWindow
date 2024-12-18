const boxes = document.querySelectorAll('[id^="box"]');
const resultDisplay = document.getElementById("result");

let currentPlayer = 'X'; 
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            resultDisplay.textContent = `${currentPlayer} wins!`;
            return true;
        }
    }

    if (!gameBoard.includes('')) {
        resultDisplay.textContent = "It's a draw!";
        return true;
    }

    return false;
}

function handleClick(index) {
    if (gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        boxes[index].textContent = currentPlayer;

        if (checkWinner()) {
            boxes.forEach(box => box.removeEventListener('click', boxClick));
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (currentPlayer === 'O') {
                setTimeout(computerMove, 500); 
            }
        }
    }
}

function boxClick(event) {
    const index = Array.from(boxes).indexOf(event.target);
    handleClick(index);
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    boxes.forEach((box, index) => {
        box.textContent = '';
        box.addEventListener('click', boxClick);
    });
    currentPlayer = 'X'; 
    resultDisplay.textContent = '';
}

function computerMove() {
    let availableMoves = gameBoard.map((mark, index) => mark === '' ? index : null).filter(val => val !== null);
    if (availableMoves.length > 0) {
        let randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
        handleClick(randomMove);
    }
}

boxes.forEach(box => box.addEventListener('click', boxClick));

