const guess = document.getElementById('user-input');
const button = document.getElementById('button');
const correctNumber = Math.ceil(Math.random() * 20);
const triesRemaining = document.getElementById('tries-remaining');

function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) {
        return 0;
    } 
    if (guess < correctNumber) {
        return -1;
    }
    if (guess > correctNumber) {
        return 1;
    }
}
export default compareNumbers;

let tries = 5;
triesRemaining.textContent = tries;

button.addEventListener('click', () => {
    tries--;
    triesRemaining.textContent = tries;
});

