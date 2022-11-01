/* Get DOM Elements */
const btnL = document.getElementById('btn-l');
const btnM = document.getElementById('btn-m');
const btnR = document.getElementById('btn-r');

const containerL = document.getElementById('l-container');
const containerM = document.getElementById('m-container');
const containerR = document.getElementById('r-container');

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

/* Display Functions */
function handleGuess(correctSpot, userGuess) {
    totalGuesses++;
    console.log('working handleGuess');
    // const correctHidingPlace = document.getElementById(`${correctSpot}-container`);
    // correctHidingPlace.classList.toggle('pearl');
    if (userGuess === correctSpot) {
        correctGuesses++;
    }
    updateScoreboard();
}

//Update Scoreboard
function updateScoreboard() {
    winsSpan.textContent = correctGuesses;
    totalSpan.textContent = totalGuesses;
    lossesSpan.textContent = totalGuesses - correctGuesses;
}
// (don't forget to call any display functions you want to run on page load!)
