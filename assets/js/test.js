"use strict";

document.addEventListener("DOMContentLoaded", init);

const correctPwdEncrypted = [69, 109, 109, 97, 50, 48, 55357, 56473, 122, 101, 118, 101, 110, 47, 49, 50, 83, 110, 111, 101, 115, 106, 101];

function init() {
    document.querySelector("form").addEventListener("submit", tryPassword);
}

function tryPassword(e) {
    e.preventDefault();
    checkPassword(document.querySelector("input#pwd").value);
}

function checkPassword(guessedPassword) {
    if (pwdIsCorrect(encrypt(guessedPassword))) {
        console.log("Correct");
        document.querySelector("body").classList.add("pink");
    } else {
        console.log("Incorrect");
        document.querySelector("body").classList.remove("pink");
    }
}

function pwdIsCorrect(guessedPwdEncrypted) {
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