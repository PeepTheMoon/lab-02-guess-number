//Function that compares the user input (guess) with the computer-generated number (correctNumber).
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