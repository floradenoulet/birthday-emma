
function addGuess() {
    localStorage.setItem("Guesses", getGuesses() + 1);
}

function getGuesses() {
    const guesses = parseInt(localStorage.getItem("Guesses"));
    if (isNaN(guesses)) {
        return 0;
    } else {
        return guesses;
    }
}

function resetGuesses() {
    localStorage.removeItem("Guesses");
}


export { addGuess };