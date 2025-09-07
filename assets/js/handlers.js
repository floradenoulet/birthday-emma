
import { addGuess } from "./storage.js";
import { pwdIsCorrect, encrypt } from "./helpers.js";


function tryPassword(e) {
    e.preventDefault();
    addGuess();
    checkPassword(document.querySelector("input#pwd").value);
}

function checkPassword(guessedPassword) {
    if (pwdIsCorrect(encrypt(guessedPassword))) {
        console.log("Correct");
    } else {
        console.log("Incorrect");
    }
}


export { tryPassword };