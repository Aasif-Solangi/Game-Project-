const buttons = document.querySelectorAll('.move-btn');
const playerChoiceDisplay = document.querySelector('#player-choice span');
const computerChoiceDisplay = document.querySelector('#computer-choice span');
const resultMessage = document.getElementById('result-message');

// Computer's move options
const moves = ['rock', 'paper', 'scissors'];

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const playerMove = this.getAttribute('data-move');
        const computerMove = moves[Math.floor(Math.random() * moves.length)];

        // Display player's and computer's choices
        playerChoiceDisplay.textContent = playerMove;
        computerChoiceDisplay.textContent = computerMove;

        // Determine the result
        const result = getResult(playerMove, computerMove);
        resultMessage.textContent = result;
    });
});

function getResult(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
