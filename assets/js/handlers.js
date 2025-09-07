
import { addGuess } from "./storage.js";
import { pwdIsCorrect, encrypt } from "./helpers.js";
import { renderGuessed } from "./renderer.js";
import { correctPwdEncrypted } from "./data.js";


function tryPassword(e) {
    e.preventDefault();
    addGuess();
    checkPassword(document.querySelector("input#pwd").value);
}

function checkPassword(guessedPassword) {
    if (pwdIsCorrect(encrypt(guessedPassword), correctPwdEncrypted)) {
        console.log("Correct");
        renderGuessed();
    } else {
        console.log("Incorrect");
    }
}


export { tryPassword };