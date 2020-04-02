//Imported elements.
import compareNumbers from './compareNumbers.js';
const guess = document.getElementById('user-input');
const button = document.getElementById('button');
const correctNumber = Math.ceil(Math.random() * 20);
const triesRemaining = document.getElementById('tries-remaining');
const highOrLow = document.getElementById('high-or-low');

//Tries counter-reduces as user inputs guesses and clicks to submmit.
let tries = 5;
triesRemaining.textContent = tries;

//Event listner
button.addEventListener('click', () => {
    tries--;
    triesRemaining.textContent = tries;
    if (tries === 0) {
        document.getElementById('button').disabled = true;
        return highOrLow.textContent = 'You LOSE!';
    } 
    const userGuess = Number(guess.value);
    const result = compareNumbers(userGuess, correctNumber);

    //Returns (changes state of) one of these strings depending on the if the users guess was too high or too low.
    if (result === 0) {
        document.getElementById('button').disabled = true;
        highOrLow.textContent = 'You WIN!';
    } 
    if (result === -1) {
        highOrLow.textContent = 'You guessed too low.';
    }
    if (result === 1) {
        highOrLow.textContent = 'You guessed too high.';
    }
});

