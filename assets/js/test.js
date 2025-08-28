"use strict";

document.addEventListener("DOMContentLoaded", init);

const correctPwdEncrypted = [84, 101, 115, 116, 49, 50, 51, 55357, 56473];

function init() {
    document.querySelector("form").addEventListener("submit", tryPassword);
}

function tryPassword(e) {
    e.preventDefault();
    checkPassword(document.querySelector("input#pwd").value);
}

function checkPassword(guessedPassword) {
    if (pwdIsCorrect(guessedPassword)) {
        console.log("Correct");
    } else {
        console.log("Incorrect");
    }
}

function pwdIsCorrect(guessedPassword) {
    const guessedPwdEncrypted = encrypt(guessedPassword);
    if (guessedPwdEncrypted.length !== correctPwdEncrypted.length) {
        return false;
    }
    for (const i in guessedPwdEncrypted) {
        if (guessedPwdEncrypted[i] !== correctPwdEncrypted[i]) {
            return false;
        }
    }
    return true;
}