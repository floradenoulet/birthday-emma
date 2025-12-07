
import { addGuess, getGuesses } from "./storage.js";
import { pwdIsCorrect, encrypt } from "./helpers.js";
import { renderGuessed } from "./renderer.js";
import { correctPwdEncrypted } from "./data.js";


function tryPassword(e) {
    e.preventDefault();
    addGuess();
    checkPassword(document.querySelector("input#pwd"));
}

function checkPassword($inputField) {
    if (pwdIsCorrect(encrypt($inputField.value), correctPwdEncrypted)) {
        renderGuessed();
    } else if (getGuesses() >= 2) {
        document.querySelector("div#hint").classList.remove("hidden");
    }
    $inputField.value = "";
    $inputField.focus();
}

function showHint(e) {
    e.preventDefault();
    document.querySelector("div#hint p").classList.remove("hidden");
    document.querySelector("a#forgotten").classList.add("hidden")
}

function goToEnd(e) {
    e.preventDefault();
    document.querySelectorAll(".page").forEach(el => {
        el.classList.add("hidden");
    })
    document.querySelector(".page#end").classList.remove("hidden");
}


export { tryPassword, showHint, goToEnd };