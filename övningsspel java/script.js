let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('userGuess');
const submitButton = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');

submitButton.addEventListener('click', checkGuess);

function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Too high! Try again.';
    } else {
        feedback.textContent = `Congratulations! You guessed the right number: ${randomNumber}.`;
        attemptsDisplay.textContent = `It took you ${attempts} attempts.`;
        // Disable the input and button after winning
        guessInput.disabled = true;
        submitButton.disabled = true;
    }

    guessInput.value = '';
}