/* Get DOM Elements */
const btnL = document.getElementById('btn-l');
const btnM = document.getElementById('btn-m');
const btnR = document.getElementById('btn-r');

const shellL = document.getElementById('shell-l');
const shellM = document.getElementById('shell-m');
const shellR = document.getElementById('shell-r');

const pearlL = document.getElementById('pearl-l');
const pearlM = document.getElementById('pearl-m');
const pearlR = document.getElementById('pearl-r');

const winsSpan = document.getElementById('wins-elem');
const totalSpan = document.getElementById('total-elem');
const lossesSpan = document.getElementById('losses-elem');

/* State */

const hidingPlaces = ['l', 'm', 'r'];

let correctGuesses = 0;
let totalGuesses = 0;

/* Events */
btnL.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'l');
});

btnM.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'm');
});

btnR.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'r');
});

/* Guess-Reward Mechanism  */
function handleGuess(correctSpot, userGuess) {
    resetBoard();

    // transformShell();
    const correctShell = document.getElementById(`shell-${correctSpot}`);
    correctShell.classList.add('transform');

    // revealPearl();
    const correctPearl = document.getElementById(`pearl-${correctSpot}`);
    correctPearl.classList.remove('hide');

    // updateScoreboard();
    totalGuesses++;
    if (userGuess === correctSpot) {
        correctGuesses++;
    }

    winsSpan.textContent = correctGuesses;
    totalSpan.textContent = totalGuesses;
    lossesSpan.textContent = totalGuesses - correctGuesses;
}

//Reset scoreboard
function resetBoard() {
    shellL.classList.remove('transform');
    shellM.classList.remove('transform');
    shellR.classList.remove('transform');
    pearlL.classList.add('hide');
    pearlM.classList.add('hide');
    pearlR.classList.add('hide');
}

// (don't forget to call any display functions you want to run on page load!)
