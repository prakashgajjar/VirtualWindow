const box01 = document.getElementById('box01')
const box02 = document.getElementById('box02')
const box03 = document.getElementById('box03')
const box04 = document.getElementById('box04')
const box05 = document.getElementById('box05')
const box06 = document.getElementById('box06')
const box07 = document.getElementById('box07')
const box08 = document.getElementById('box08')
const box09 = document.getElementById('box09')

const i01 = document.getElementById('i01')
const i02 = document.getElementById('i02')
const i03 = document.getElementById('i03')
const i04 = document.getElementById('i04')
const i05 = document.getElementById('i05')
const i06 = document.getElementById('i06')
const i07 = document.getElementById('i07')
const i08 = document.getElementById('i08')
const i09 = document.getElementById('i09')

const boxes = document.querySelectorAll('[id^="box"]');
const icons = document.querySelectorAll('[id^="i"]');
const winCounter = document.getElementById("win01");
const drawCounter = document.getElementById("draw01");
const lossCounter = document.getElementById("lost01");

let counter = 0; 
let winCount = 0;
let drawCount = 0;
let lossCount = 0;


function isBoxEmpty(icon) {
    return !icon.classList.contains('fa-circle') && !icon.classList.contains('fa-times');
}


function handlePlayerMove(event) {
    const boxIndex = Array.from(boxes).indexOf(event.target);
    const icon = icons[boxIndex];

    if (isBoxEmpty(icon)) {
        icon.classList.add('fa-regular', 'fa-circle'); 
        counter++;
        if (!checkGameOver('Player')) {
           
            setTimeout(handleComputerMove, 500);
        }
    }
}


function handleComputerMove() {
  
    const emptyBoxes = Array.from(icons).filter(isBoxEmpty);

    if (emptyBoxes.length > 0) {
        
        const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
        const icon = emptyBoxes[randomIndex];

        
        icon.classList.add('fas', 'fa-times'); 
        counter++;
        checkGameOver('Computer');
    }
}


function checkGameOver(player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];

    const playerClass = player === 'Player' ? 'fa-circle' : 'fa-times';

    
    for (const pattern of winPatterns) {
        if (pattern.every((index) => icons[index].classList.contains(playerClass))) {
            if (player === 'Player') {
                winCount++;
                winCounter.textContent = winCount; // Update win counter
                alert("You win!");
            } else {
                lossCount++;
                lossCounter.textContent = lossCount; // Update loss counter
                alert("Computer wins!");
            }
            resetGame();
            return true;
        }
    }

    // Check for draw
    if (counter === 9) {
        drawCount++;
        drawCounter.textContent = drawCount; // Update draw counter
        alert("It's a draw!");
        resetGame();
        return true;
    }

    return false;
}

// Function to reset the game
function resetGame() {
    icons.forEach((icon) => {
        icon.classList.remove('fa-regular', 'fa-circle', 'fas', 'fa-times');
    });
    counter = 0;
}


boxes.forEach((box) => {
    box.addEventListener('click', handlePlayerMove);
});


