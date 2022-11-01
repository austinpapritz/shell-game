/* Get DOM Elements */
const btnL = document.getElementById('btn-l');
const btnM = document.getElementById('btn-m');
const btnR = document.getElementById('btn-r');

const containerL = document.getElementById('l-container');
const containerM = document.getElementById('m-container');
const containerR = document.getElementById('r-container');

const winsSpan = document.getElementById('wins-elem');
const lossesSpan = document.getElementById('losses-elem');
const totalSpan = document.getElementById('total-elem');

/* State */

const hidingPlaces = ['left', 'middle', 'right'];

let correctGuesses = 0;
let totalGuesses = 0;

/* Events */
btnL.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    console.log('we did itL');
});

btnM.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    console.log('we did itM');
});

btnR.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    console.log('we did itR');
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
